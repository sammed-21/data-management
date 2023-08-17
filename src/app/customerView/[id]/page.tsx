// CustomerView.js
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCustomerContext } from "@/context/CustomerContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface pageProps {
  params: { id: string };
}
type CustomerData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^\d+$/, "Invalid phone number")
      .required("Phone number is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const CustomerView: React.FC<pageProps> = ({ params }) => {
  const router = useRouter();
  const customerId = params.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // console.log(customerId);

  // console.log(customerId);
  const { updateCustomer, customers } = useCustomerContext();

  const customer = customers.find((customer) => customer.id === customerId);

  if (!customer) {
    return <div>User not found</div>;
  }

  const onSubmit = (data: CustomerData) => {
    console.log(data);
    updateCustomer(customer.id || "", data);
    router.push("/");
    // Implement your update logic here
  };
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md space-y-4 w-[70%]"
      >
        <div className={`relative ${errors.name ? "border-red-500" : ""}`}>
          <label className="block text-sm font-medium text-gray-800">
            Name:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
            {...register("name")}
            defaultValue={customer.name}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className={`relative ${errors.email ? "border-red-500" : ""}`}>
          <label className="block text-sm font-medium text-gray-800">
            Email:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
            {...register("email")}
            defaultValue={customer.email}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div
          className={`relative ${errors.phoneNumber ? "border-red-500" : ""}`}
        >
          <label className="block text-sm font-medium text-gray-800">
            Phone Number:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
            {...register("phoneNumber")}
            defaultValue={customer.phoneNumber}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className={`relative ${errors.message ? "border-red-500" : ""}`}>
          <label className="block text-sm font-medium text-gray-800">
            Message:
          </label>
          <textarea
            className="mt-1 p-2 border rounded w-full"
            {...register("message")}
            defaultValue={customer.message}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button type="submit" className="px-5 py-1 w-full text-white bg-black hover:bg-gray-300 ">
          Edit
        </button>
      </form>
    </div>
  );
};

export default CustomerView;
