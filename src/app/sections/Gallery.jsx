import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Gallery() {
  return (
    <>
      <h1 className="text-3xl font-kingshare font-semibold text-center my-12 text-white md:mt-12">
        take a look at our gallery
      </h1>
    <section className="bg-white my-2 md:my-12 md:w-[90%] md:mx-[5%] xl:w-[80%] xl:mx-[10%] rounded-xl">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-xl font-normal text-white absolute top-1 font-redhat left-2 p-1 bg-blue-500/80 rounded-lg xs:text-xl md:text-xl">
                joy
              </h3>
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661775605160-739074fd0011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1Y2Vzc3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-xl font-normal text-white absolute top-1 font-redhat left-2 p-1 bg-blue-500/80 rounded-lg xs:text-xl md:text-xl">
                success
              </h3>
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1573495782715-34f01d853a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1Y2Vzc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-xl font-normal text-white absolute top-1 font-redhat left-2 p-1 bg-blue-500/80 rounded-lg xs:text-xl md:text-xl">
                  family
                </h3>
              </a>
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-xl font-normal text-white absolute top-1 font-redhat left-2 p-1 bg-blue-500/80 rounded-lg xs:text-xl md:text-xl">
                  better life
                </h3>
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbm5lY3Rpb25zfGVufDB8fDB8fHww"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-xl font-normal text-white absolute top-1 font-redhat left-2 p-1 bg-blue-500/80 rounded-lg xs:text-xl md:text-xl">
                connections
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Gallery;
