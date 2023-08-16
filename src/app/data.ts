
interface Customer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;

}

const customers: Customer[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890',message:"this is the john doe" },
  { id: 2, name: 'sam Doe', email: 'john@example.com', phoneNumber: '123-456-7890' ,message:"this is the john doe"},
  { id: 3, name: 'Dog Doe', email: 'john@example.com', phoneNumber: '123-456-7890' ,message:"this is the john doe"},
  { id: 4, name: 'Aks Doe', email: 'john@example.com', phoneNumber: '123-456-7890' ,message:"this is the john doe"},
   
];
  
  export default customers;
 
  
  
  