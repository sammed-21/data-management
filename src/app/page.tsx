'use client'
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
     
    deleteCustomer(id)
  }
  return (
    <div className="w-full flex flex-col justify-center items-center px-7">
    {customers.map((customer) => (
      <div key={customer.id} className="flex my-2 py-3 justify-evenly items-center w-full bg-gray-100 mb-2">
        <div className="flex-1">
          {customer.name} - {customer.email} - {customer.phoneNumber}
        </div>
        <button
          onClick={() => handleDelete(customer.id || "")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
        <Link
          href={"/customerView/" + customer.id}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View
        </Link>
      </div>
    ))}
    <Link href="/addCustomer" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ">
      Add Customer
    </Link>
  </div>
//     <ul>
//       {customers.map((customer) => (
//         <li key={customer.id}>
//         {customer.name} - {customer.email} - {customer.phoneNumber}
//         <button onClick={() => handleDelete(customer.id || '')} className='px-4 py-2 bg-red-500'>Delete</button>
//         <Link href={"/customerView/"+ customer.id }  className='px-4 py-2 bg-blue-500'>View</Link>
//       </li>
//       ))}
// <Link href="/addCustomer">Add Customer</Link>
//     </ul>
  );
};

export default CustomerList;

      
    