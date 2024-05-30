import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PersonalInformation from "./form/PersonalInformation";
import AcademicInformation from "./form/AcademicInformation";

function TabsDemo() {
  const [personalData, setPersonalData] = useState({
    title: "",
    surname: "",
    firstname: "",
    othernames: "",
    sex: "",
    dob: "",
    marital_status: "",
    address: "",
    phone: "",
    email: "",
    disability: "",
    disability_details: "",
  });

  const [academicData, setAcademicData] = useState({
    institution: "",
    level_of_study: "",
    program_of_study: "",
    graduation_date: "",
    support_reason: [],
    part_time_work: "",
    reason_not_working: "",
    support_amount: "",
    payment_deadline: "",
    enrollment_confirmation: null,
    cert_name: "",
    cert_date: "",
  });

  const handlePersonalChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
  };

  const handleAcademicChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAcademicData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
    console.log("academic data:" + JSON.stringify(academicData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedData = { ...personalData, ...academicData };
    console.log(combinedData);
    // Send combinedData to your API or handle it as needed
  };

  return (
    <div className="w-[70%] mx-[15%]">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-full">
          <TabsTrigger value="account" className="ml-2 rounded-full">
            Personal information
          </TabsTrigger>
          <TabsTrigger value="password" className="ml-2 rounded-full">
            Academic information
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <PersonalInformation
            formData={personalData}
            handleChange={handlePersonalChange}
          />
        </TabsContent>
        <TabsContent value="password">
          <AcademicInformation
            formData={academicData}
            handleChange={handleAcademicChange}
          />
        </TabsContent>
      </Tabs>
      <div>
        <div className="mt-4 mx-20">
          <Button onClick={handleSubmit}>Save all changes</Button>
        </div>
      </div>
    </div>
  );
}

export default TabsDemo;
