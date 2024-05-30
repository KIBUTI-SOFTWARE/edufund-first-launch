import React, { useState, useEffect } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../utils";
import SkeletonCard from "../components/SkeletonCard"; // Ensure you have this export correctly

function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);
  const TIMEOUT = 60;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, TIMEOUT * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className="text-center my-12 text-3xl font-kingshare font-bold">
        What people are saying about us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: testimonials.length }).map((_, index) => (
              <div className="xs:ml-12 sm:ml-0">
                <SkeletonCard key={index} />
              </div>
            ))
          : testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
      </div>
    </>
  );
}

export default Testimonials;
