'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddCustomerPage: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation logic
    // Submit data to API or update state
    router.push('/');
  };

  return (
    <div>
      <h1>Add Customer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddCustomerPage;
