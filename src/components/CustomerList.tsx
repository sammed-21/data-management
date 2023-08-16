import React from 'react';
import { useCustomerContext } from "@/context/CustomerContext"
import Link from 'next/link';
interface Customer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

 

const CustomerList: React.FC = () => {
  const { deleteCustomer,customers } = useCustomerContext()
  const handleDelete = (id:string) => {
    console.log(id)
    deleteCustomer(id)
  }
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>
        {customer.name} - {customer.email} - {customer.phoneNumber}
        <button onClick={() => handleDelete(customer.id || '')} className='px-4 py-2 bg-red-500'>Delete</button>
        <Link href={`/customerView/${customer.id}`}   className='px-4 py-2 bg-blue-500'>View</Link>
      </li>
      ))}
    </ul>
  );
};

export default CustomerList;
