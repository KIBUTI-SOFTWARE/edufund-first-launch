import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../utils";
function Testimonials() {
  return (
    <>
      <h1 className="text-center my-12 text-3xl font-kingshare font-bold">What people are saying about us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </>
  );
}

export default Testimonials;
