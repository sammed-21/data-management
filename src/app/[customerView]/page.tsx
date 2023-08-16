// CustomerView.js
'use client'
import React from 'react';
import { useRouter} from 'next/router';
import { useCustomerContext } from "@/context/CustomerContext"


function CustomerView() {
  // const router = useParams();
  const router = useRouter();
  const { id } = router.query
  console.log(id)
  const customerId = Number(id);
  console.log(customerId)
   
  console.log(customerId) 
  const { customers } = useCustomerContext();

  const customer = customers.find((customer) => customer.id === Number(customerId));

    if (!customer) {
      
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone Number: {customer.phoneNumber}</p>
      <p>Message: {customer.message}</p>
    </div>
  );
}

export default CustomerView;
