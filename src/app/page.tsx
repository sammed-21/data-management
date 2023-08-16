'use client'
import React from 'react';
import CustomerList from '@/components/CustomerList';
import Link from 'next/link'
import customers from './data';
const HomePage: React.FC = () => {
  return (
    <div className='flex min-h-full flex-col items-center justify-between'>
      <h1>Customer List</h1>
      <div>

    <CustomerList/>
      </div>
      
      <Link href="/addCustomer">Add Customer</Link>
    </div>
  );
};

export default HomePage;
