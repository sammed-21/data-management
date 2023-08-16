"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCustomerContext } from "@/context/CustomerContext";
import { preview } from "vite";
type CustomerData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};
const AddCustomerPage: React.FC = () => {
  const { addCustomer } = useCustomerContext();
  const router = useRouter();

  const [formData, setFormData] = useState<CustomerData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phoneNumber, message } = formData;

    // Perform form submission logic if all fields are valid
    if (name && email && phoneNumber && message) {
      console.log('add button is clicked')
      // Perform submission logic here
      addCustomer(formData)
      setFormData({
        name: "",
    email: "",
    phoneNumber: "",
    message: "",
      })
    }
  };

  return (
    <div className="flex flex-col justify-center w-full items-center  ">
      <h1>Add Customer</h1>

      <form
        className="p-10 bg-white rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-light">Contact KindaCode.com</h1>

        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={`peer border  ${
              formErrors.name ? "border-red-500" : ""
            }`}
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            onBlur={() =>
              setFormErrors((prevErrors) => ({ ...prevErrors, name:!formErrors.name }))
            }
          />
          {formErrors.name && (
            <p className="text-red-700 font-light">Please enter your name</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={`peer border border-slate-400 ${
              formErrors.email ? "border-red-500" : ""
            }`}
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            onBlur={() =>
              setFormErrors((prevErrors) => ({
                ...prevErrors,
                email: !formData.email,
              }))
            }
          />
          {formErrors.email && (
            <p className="text-red-700 font-light">
              Please enter a valid email address
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            pattern="[0-9]{10}"
            placeholder="1234567890"
            className={`peer border border-slate-400 ${
              formErrors.phoneNumber ? "border-red-500" : ""
            }`}
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            onBlur={() =>
              setFormErrors((prevErrors) => ({
                ...prevErrors,
                phoneNumber: !formData.phoneNumber,
              }))
            }
          />
          {formErrors.phoneNumber && (
            <p className="text-red-700 font-light">
              Please enter a valid 10-digit phone number
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={3}
            required
            className={`peer border border-slate-400 ${
              formErrors.message ? "border-red-500" : ""
            }`}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            onBlur={() =>
              setFormErrors((prevErrors) => ({
                ...prevErrors,
                message: !formData.message,
              }))
            }
          />
          {formErrors.message && (
            <p className="text-red-700 font-light">
              This field cannot be empty
            </p>
          )}
        </div>

        <button type="submit" className="px-5 py-1 bg-amber-500">
          Send
        </button>
      </form>
    </div>
  );
};

export default AddCustomerPage;
