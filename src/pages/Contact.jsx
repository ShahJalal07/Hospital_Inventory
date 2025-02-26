import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center text-gray-500">
        <p className="">
          CONTACT <span className="font-medium text-gray-700">US</span>
        </p>
      </div>

      <div className="flex flex-col justify-center gap-10 my-10 text-sm mb-28 md:flex-row ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-lg font-semibold text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            54709, Garden Street, New York <br /> USA
          </p>
          <p className="text-gray-500">
            Tel: 01876920822 <br /> Email: mdshahjalal7299@gmail.com
          </p>
          <p className="text-lg font-semibold text-gray-600">Careers at PRESCRIPTO</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
          <button className="px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
