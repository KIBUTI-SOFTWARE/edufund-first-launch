import React, { useState } from "react";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import { alerter } from "@/app/utils";

export const BASE_URL = "https://edufunddash.kibuti.co.tz/api/card-payment";

function DonationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    amount: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    currency: "USD",
    countryCode: "TZ",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     amount: formData.amount,
  //     currency: formData.currency,
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //     phoneNo: formData.phoneNo,
  //     address: formData.address,
  //     city: formData.city,
  //     state: formData.state,
  //     postalCode: formData.postalCode,
  //     countryCode: formData.countryCode,
  //   };

  //   try {
  //     const response = await axios.post(BASE_URL, data);
  //     alerter("Thank you for your pledge. You can redeem your pledge through this payment link.");
  //     console.log("The response is: ", response);
  //   } catch (error) {
  //     alerter("Error submitting the form. Please try again.");
  //     console.error("Form submission error: ", error);
  //     console.error("the data you have submitted:", data);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     amount: formData.amount,
  //     currency: formData.currency,
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //     phoneNo: formData.phoneNo,
  //     address: formData.address,
  //     city: formData.city,
  //     state: formData.state,
  //     postalCode: formData.postalCode,
  //     countryCode: formData.countryCode,
  //     cardNumber: formData.cardNumber,
  //     expDate: formData.expDate,
  //     cvv: formData.cvv,
  //   };

  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   try {
  //     const response = await axios.post(BASE_URL, data, { headers });
  //     alerter("Thank you for your pledge. You can redeem your pledge through this payment link.");
  //     console.log("The response is: ", response);
  //   } catch (error) {
  //     alerter("Error submitting the form. Please try again.");
  //     console.error("Form submission error: ", error);
  //     console.log("The data you have submitted:", data);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
        "amount": "1100.00",
        "currency": "USD",
        "firstName": "Abdulmujib",
        "lastName": "Nizary",
        "email": "migambile25@gmail.com",
        "phoneNo": "255745377504",
        "address": "Dar es Salaam Tanzania",
        "countryCode": "TZ",
        "postalCode": "1234"
    };
  
    const headers = {
      "Content-Type": "application/json",
    };
  
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
  
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
  
      const responseData = await response.json();
      alerter("Thank you for your pledge. You can redeem your pledge through this payment link.");
      console.log("The response is: ", responseData);
    } catch (error) {
      alerter("Error submitting the form. Please try again.");
      console.error("Form submission error: ", error);
      console.log("The data you have submitted:", data);
    }
  };
  
  return (
    <>
      <ScrollArea className="h-[36rem] border-none w-full rounded-md border">
        <div className="bg-neutral-900/90 dark:bg-gray-900 h-[30%]">
          <form onSubmit={handleSubmit}>
            <div className="w-full outline-none max-w-3xl mx-auto p-4 md:p-8">
              <div className="bg-neutral-900/90 dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                <h1 className="text-2xl font-bold text-white dark:text-white mb-4">
                  Donor's form
                </h1>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-white dark:text-white mb-2">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-white dark:text-white mb-1">
                        First Name
                      </label>
                      <input required
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-white dark:text-white mb-1">
                        Last Name
                      </label>
                      <input required
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-white dark:text-white mb-1">
                      Email
                    </label>
                    <input required
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="phoneNo" className="block text-white dark:text-white mb-1">
                      Phone Number
                    </label>
                    <input required
                      type="text"
                      id="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="address" className="block text-white dark:text-white mb-1">
                      Address
                    </label>
                    <input required
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="city" className="block text-white dark:text-white mb-1">
                      City
                    </label>
                    <input required
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="state" className="block text-white dark:text-white mb-1">
                      State
                    </label>
                    <input required
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="postalCode" className="block text-white dark:text-white mb-1">
                      Postal Code
                    </label>
                    <input required
                      type="text"
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col-reverse gap-y-4 md:gap-y-0 md:flex-row items-center justify-evenly">
                  <button
                    type="submit"
                    className="bg-purple-600/50 text-white px-12 md:px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-neutral-700/30 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l8 8-8 8"></path>
                    </svg>
                    Pledge
                  </button>
                  <button
                    type="button"
                    className="bg-purple-600/50 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-neutral-700/30 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 flex items-center"
                    onClick={() => alerter("Donate now button clicked")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v4H9a1 1 0 000 2h6a1 1 0 100-2h-1v-4a3 3 0 00-3-3z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V6m0 2a3 3 0 003 3v4a3 3 0 01-3 3H9a3 3 0 01-3-3V11a3 3 0 013-3z"></path>
                    </svg>
                    Donate now
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </ScrollArea>
    </>
  );
}

export default DonationForm;
