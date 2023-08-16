'use client'
 
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
 

interface Customer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

const customerDetails: Customer[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890' },
  // Add more customer data
];

const CustomerDetailPage: React.FC = () => {
  const router = useRouter();
  const id = useParams();
  const customerId = Number(id.customer);
  console.log(customerId)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customer, setCustomer] = useState<Customer | undefined>(undefined);

  useEffect(() => {
    const foundCustomer = customerDetails.find((c) => c.id === customerId);
    if (foundCustomer) {
      setCustomer(foundCustomer);
      setName(foundCustomer.name);
      setEmail(foundCustomer.email);
      setPhoneNumber(foundCustomer.phoneNumber);
    }
  }, [customerId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation logic
    // Update customer data
  };

  return (
    <div>
      {customer && (
        <div>
          <h1>Customer Details</h1>
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          <p>Phone Number: {customer.phoneNumber}</p>
          <button>Edit</button>
          <form onSubmit={handleSubmit}>
            {/* Similar form inputs as in AddCustomerPage */}
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CustomerDetailPage;
