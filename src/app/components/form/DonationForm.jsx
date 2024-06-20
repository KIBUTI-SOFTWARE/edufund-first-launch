import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { alerter } from "@/app/utils";
import CountrySelector from "../CountrySelector";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

function DonationForm() {
  const FormSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().nonempty("Phone number is required"),
    address: z.string().nonempty("Address is required"),
    state: z.string().nonempty("State is required"),
    zip: z.string().nonempty("Postal code is required"),
    amount: z.string().nonempty("Amount is required"),
    currency: z.string().nonempty("Currency is required"),
    countryCode: z.string().nonempty("Country code is required"),
  });

  const submitFormData = async (data) => {
    try {
      const response = await axios.post(
        "https://edufunddash.kibuti.co.tz/api/card-payment",
        {
          amount: data.amount,
          currency: data.currency,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNo: data.phone,
          address: data.address,
          countryCode: data.countryCode,
          postalCode: data.zip,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("form submitted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.log("An error occured:", response.error.data);
      throw new Error("Failed to submit form data");
    }
  };
  // Set up useForm hook with zodResolver
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  // Handle form submission
  const onSubmit = async (event, data) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const result = await submitFormData(data);
      alerter(
        "Thank you for your pledge. You can redeem your pledge through this link"
      );
      console.log(result);
      form.reset();
    } catch (error) {
      console.error(error);
      alerter("Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      <ScrollArea className="h-[36rem] border-none w-full rounded-md border">
        <div className="bg-neutral-900/90 dark:bg-gray-900 h-[30%]">
          <div className="w-full outline-none max-w-3xl mx-auto p-4 md:p-8">
            <div className="bg-neutral-900/90 dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
              <h1 className="text-2xl font-bold text-white dark:text-white mb-4">
                Donor's form
              </h1>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-white dark:text-white mb-2">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-white dark:text-white mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        {...form.register("firstName")}
                        className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block text-white dark:text-white mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        {...form.register("lastName")}
                        className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block text-white dark:text-white mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...form.register("email")}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <CountrySelector/>
                  <div className="mt-4">
                    <label
                      htmlFor="phone"
                      className="block text-white dark:text-white mb-1"
                    >
                      Phone number
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      {...form.register("phone")}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="address"
                      className="block text-white dark:text-white mb-1"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      {...form.register("address")}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                    {form.formState.errors.address && (
                      <p className="text-red-500">
                        {form.formState.errors.address.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-white dark:text-white mb-1"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        {...form.register("state")}
                        className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      />
                      {form.formState.errors.state && (
                        <p className="text-red-500">
                          {form.formState.errors.state.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="zip"
                        className="block text-white dark:text-white mb-1"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        {...form.register("zip")}
                        className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      />
                      {form.formState.errors.zip && (
                        <p className="text-red-500">
                          {form.formState.errors.zip.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="amount"
                      className="block text-white dark:text-white mb-1"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      id="amount"
                      {...form.register("amount")}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                    {form.formState.errors.amount && (
                      <p className="text-red-500">
                        {form.formState.errors.amount.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="currency"
                      className="block text-white dark:text-white mb-1"
                    >
                      Currency
                    </label>
                    <input
                      type="text"
                      id="currency"
                      {...form.register("currency")}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                    {form.formState.errors.currency && (
                      <p className="text-red-500">
                        {form.formState.errors.currency.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-col-reverse gap-y-4 md:gap-y-0 md:flex-row items-center justify-evenly">
                  <button
                    className="bg-purple-600/50 text-white px-12 md:px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-neutral-700/30 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 flex items-center"
                    type="submit"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12H4"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4l8 8-8 8"
                      ></path>
                    </svg>
                    Pledge
                  </button>
                  <button
                    className="bg-purple-600/50 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-neutral-700/30 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 flex items-center"
                    type="button"
                    onClick={() =>
                      alerter(
                        "Thank you for your pledge. You can redeem your pledge through this payment link"
                      )
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 1.343-3 3v4H9a1 1 0 000 2h6a1 1 0 100-2h-1v-4a3 3 0 00-3-3z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8V6m0 2a3 3 0 003 3v4a3 3 0 01-3 3H9a3 3 0 01-3-3V11a3 3 0 013-3z"
                      ></path>
                    </svg>
                    Donate now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}

export default DonationForm;
