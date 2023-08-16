import React from 'react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

const customers: Customer[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890' },
  { id: 2, name: 'sam Doe', email: 'john@example.com', phoneNumber: '123-456-7890' },
  { id: 3, name: 'Dog Doe', email: 'john@example.com', phoneNumber: '123-456-7890' },
  { id: 4, name: 'Aks Doe', email: 'john@example.com', phoneNumber: '123-456-7890' },
   
];

const CustomerList: React.FC = () => {
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>
          {customer.name} - {customer.email} - {customer.phoneNumber}
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
