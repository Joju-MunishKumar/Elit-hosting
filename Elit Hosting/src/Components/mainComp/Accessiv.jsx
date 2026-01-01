import React from "react";
import { assets } from "../../assets/assets";
import { FaCheckCircle } from "react-icons/fa";

const Accessiv = () => {
  return (
    <div className="py-20  bg-gray-50">
      <div className="container mx-auto px-6  grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* LEFT SIDE */}
        <div>
          <img src={assets.supportImg} alt="Support" className="w-full h-auto object-contain" />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10 max-sm:mt-15  w-full md:mt-8">
          <h3 className="font-semibold text-4xl md:text-6xl">
            24/7 Support for Your Success
          </h3>

          <ul className="flex flex-col gap-10  rounded-lg ">
            <li className="flex gap-4 text-[1.2rem] items-center">
              <FaCheckCircle  className="h-6 w-6 text-primary" />
              <div>Ensure support is available 24/7, including weekends and holidays.</div>
            </li>
            <li className="flex gap-4 text-[1.2rem] items-center">
              <FaCheckCircle className="h-6 w-6 text-primary" />
              <div>Implement a CDN to deliver content quickly to users worldwide.</div>
            </li>
            <li className="flex gap-4  items-center">
              <FaCheckCircle className="h-6 w-6 text-primary" />
              <div>Offer various support channels such as live chat, email, phone, and a ticketing system.</div>
            </li>
            <li className="flex gap-4  items-center">
              <FaCheckCircle className="h-6 w-6 text-primary" />
              <div>Aim for rapid response times to customer inquiries to minimize downtime and frustration.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accessiv;
