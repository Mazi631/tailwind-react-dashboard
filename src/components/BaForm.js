import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const BaForm = () => {
  const [businessType, setBusinessType] = useState('Registered Business');
  const [businessCategory, setBusinessCategory] = useState('');
  const steps = [
    "Business Type",
    "Business Information",
    "Payout Account Information",
    "Director's Details",
    "Business Document"
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex items-center justify-center py-5 px-5">
      <div className="bg-white rounded-2xl shadow p-8 w-screen max-w-6xl h-screen flex flex-col">
        {/* Header and Stepper */}
        <div className="flex items-center justify-between w-full mb-2">
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              Activate Your<br />Business Account
            </h1>
          </div>
          <div className="flex items-center flex-1 ml-3">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center flex-1 relative">
                <div
                  className={`h-6 w-6 flex items-center justify-center rounded-full border-2 text-xs font-semibold z-10 bg-white
                    ${i === 0 ? "border-[#2A40F4] text-[#2A40F4]" : "border-gray-300 text-gray-400"}
                  `}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-xs mt-1 text-center font-semibold
                    ${i === 0 ? "text-[#2A40F4]" : "text-gray-400 font-normal"}
                  `}
                >
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full w-full h-0.5 bg-gray-300 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full mb-10 mt-6" />

        { /* Form */ }
        <form className="flex flex-col items-center mt-9">
          <div className="w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Business Type</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Type of Business
              </label>
              <div className="relative">
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-3 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#2A40F4] bg-white text-gray-700"
                >
                  <option>Registered Business</option>
                  <option>Sole Proprietorship</option>
                  <option>Non-Profit</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
              </div>
            </div>
            <div className="mb-12">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Business Category
              </label>
              <div className="relative">
                <select
                  value={businessCategory}
                  onChange={(e) => setBusinessCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-3 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#2A40F4] bg-white text-gray-700"
                >
                  <option value="">Select</option>
                  <option value="Tech">Tech</option>
                  <option value="Retail">Retail</option>
                  <option value="Education">Education</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#B8BFFA] hover:bg-[#a7b2f4] text-white font-bold py-3 rounded-md transition-colors text-base">
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BaForm;