import React, { createContext, useContext, useState } from 'react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

interface CustomerContextProps {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
  updateCustomer: (customerId: number, updatedCustomer: Customer) => void;
  deleteCustomer: (customerId: number) => void;
}

const CustomerContext = createContext<CustomerContextProps | undefined>(undefined);

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomerContext must be used within a CustomerProvider');
  }
  return context;
};

export const CustomerProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addCustomer = (customer: Customer) => {
    setCustomers([...customers, customer]);
  };

  const updateCustomer = (customerId: number, updatedCustomer: Customer) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === customerId ? updatedCustomer : customer
    );
    setCustomers(updatedCustomers);
  };

  const deleteCustomer = (customerId: number) => {
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
