
import React from 'react';
import CustomerList from '@/components/CustomerList';
import Link from 'next/link'
const HomePage: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Customer List</h1>
      <CustomerList />
      <Link href="/addCustomer">Add Customer</Link>
    </div>
  );
};

export default HomePage;
