'use client'
import { v4 as uuidv4 } from 'uuid';
import React, { createContext, useContext, useState } from 'react';
 
interface Customer {
  id?: string; // Change type to string
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface CustomerContextProps {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
  updateCustomer: (customerId: string, updatedCustomer: Customer) => void; // Change type to string
  deleteCustomer: (customerId: string) => void; // Change type to string
}

const initialCustomers: Customer[] = [
  { id: uuidv4(), name: 'John Doe', email: 'john@example.com', phoneNumber: '1234567890', message: "this is the john doe" },
  { id: uuidv4(), name: 'sam Doe', email: 'john@example.com', phoneNumber: '9236467890', message: "this is the john doe" },
  { id: uuidv4(), name: 'Dog Doe', email: 'john@example.com', phoneNumber: '7234567890', message: "this is the john doe" },
  { id: uuidv4(), name: 'Dog Doe', email: 'john@example.com', phoneNumber: '6234567890', message: "this is the john doe" },
  { id: uuidv4(), name: 'Aks Doe', email: 'john@example.com', phoneNumber: '7234567890', message: "this is the john doe" },
];

const CustomerContext = createContext<CustomerContextProps | undefined>(undefined);

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomerContext must be used within a CustomerProvider');
  }
  return context;
};

export const CustomerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers); 
  const addCustomer = (customer: Customer) => {
    const customerWithId = { ...customer, id: uuidv4() };
    setCustomers([...customers, customerWithId]);
  };

  const updateCustomer = (customerId: string, updatedCustomer: Customer) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === customerId ? { ...updatedCustomer, id: customerId } : customer
    );
    setCustomers(updatedCustomers);
  };

  const deleteCustomer = (customerId: string) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
    setCustomers(updatedCustomers);
  };

  const contextValue: CustomerContextProps = {
    customers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  };

  return <CustomerContext.Provider value={contextValue}>{children}</CustomerContext.Provider>;
};
