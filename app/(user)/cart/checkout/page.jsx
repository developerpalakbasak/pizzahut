"use client";

import { useCart } from "@/context/cartContext";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import

const Page = () => {
  const router = useRouter();

  const { selectedPizzaTotalPrice, selectedFromCart } = useCart();
// console.log(selectedFromCart)

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission from reloading

    const formElements = event.target.elements;
    const data = {
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
      email: formElements.email.value,
      phone: formElements.phone.value,
      address: formElements.address.value,
      city: formElements.city.value,
      zipCode: formElements.zipcode.value,
      cartItems: selectedFromCart,
      totalPrice: selectedPizzaTotalPrice,
    };

    try {
      setSubmitting(true);
      setErrorMessage("");

      const res = await axios.post("/api/order", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data)

      // Navigate to another page with the response data
      // router.push(
      //   `/cart/checkout/payment?responseData=${encodeURIComponent(
      //     JSON.stringify(res.data)
      //   )}`
      // );



    } catch (error) {
      setErrorMessage(
        "There was an error while processing your order. Please try again."
      );
      console.error("Error:", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-28 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>

        {/* Billing Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="john.doe@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="123 Main St"
              required
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="City"
              required
            />
          </div>
          <div>
            <label
              htmlFor="zipcode"
              className="block text-sm font-medium text-gray-700"
            >
              ZIP Code
            </label>
            <input
              id="zipcode"
              name="zipcode"
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="12345"
              required
            />
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 mb-4 text-sm">{errorMessage}</p>
        )}

        {/* Submit Button */}
        <div className="flex justify-between items-center">
          <p className="text-4xl font-semibold">BDT {selectedPizzaTotalPrice}</p>
          <button
            type="submit"
            disabled={submitting}
            className={`py-2 px-4 rounded-md text-white transition-colors duration-300 ${
              submitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-secondary hover:text-primary"
            }`}
          >
            {submitting ? "Processing..." : "Complete Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
