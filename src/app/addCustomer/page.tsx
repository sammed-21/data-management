"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCustomerContext } from "@/context/CustomerContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const AddCustomerPage: React.FC = () => {
  const { addCustomer } = useCustomerContext();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    addCustomer(data);
    router.push("/");
  };

  return (
    <div className="flex items-center  min-h-[80vh] w-[100%] justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md space-y-4 w-[60%]"
      >
        <div className={`relative ${errors.name ? "border-red-500" : ""}`}>
          <label className="block text-sm font-medium text-gray-800">
            Name:
          </label>
          <input
            className="mt-1 p-2 border rounded w-full"
            {...register("name")}
            placeholder="Name"
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
            placeholder="email"
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
            placeholder="phoneNumber"
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
            placeholder="message"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button type="submit" className="px-5 py-1 w-full text-white bg-black">
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomerPage;
