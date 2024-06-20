import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "../utils";

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const country = countries.find((country) => country.code === countryCode);
    setSelectedCountry(country);

    // Assuming phoneNumber is stored separately and updated elsewhere
    // Here, we are just logging the country code with the selected country
    console.log("Selected Country Code:", country.code);
  };

  // Function to format phone number with dial code
  const formatPhoneNumber = () => {
    if (selectedCountry) {
      return `+${selectedCountry.dialCode} ${phoneNumber}`;
    }
    return phoneNumber;
  };

  return (
    <div>
      <label htmlFor="country">Select your country: </label>

      <Select
        value={selectedCountry.code}
        onChange={handleCountryChange}
        autoComplete="true"
        className="bg-red-700 outline-none border-none"
      >
        <SelectTrigger className="w-[180px] bg-neutral-700/30">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent className="bg-slate-700/90">
          <SelectGroup className="bg-slate-700/90">
            <SelectLabel>Countries</SelectLabel>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <p>Country Code: {selectedCountry.code}</p>
        <p>Dial Code: +{selectedCountry.dialCode}</p>
      </div>
    </div>
  );
};

export default CountrySelector;
