import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const BaForm = () => {
    const [businessType, setBusinessType] = useState('Registered Business');
    const [businessCategory, setBusinessCategory] = useState('');
    const steps = [
        "Business Type",
        "Business Information",
        "Payout Account Information",
        "Director’s Details",
        "Business Document"
    ];

    return (
      <div className="bg-blue-100 rounded-lg p-8 mx-auto w-full shadow ">
        {/* Flex container for heading and stepper */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl tracking-tight bg-yellow-400 font-bold basis-1/3 text-gray-900">
            Activate Your <br /> Business Account
          </h1>
          
          <div className="flex basis-2/3 items-center bg-orange-600">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center flex-1 relative">
                <div
                  className={`h-7 w-7 flex items-center justify-center rounded-full border-2 text-xs font-semibold z-10 ${
                    i === 0 ? "border-[#2A40F4] text-[#2A40F4]" : "border-gray-300 text-gray-400"
                  } bg-white`}
                >
                  {i + 1}
                </div>
                <p
                  className={`text-xs mt-1 text-center ${
                    i === 0 ? "text-[#2A40F4] font-medium" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
                {i < steps.length - 1 && (
                  <div className="absolute top-3 left-full w-full h-px bg-gray-300 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="mb-6" />

        
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Business Type</h2>
        
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Type of Business
            </label>
            <div className="relative">
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full border rounded-md p-2 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#2A40F4]"
              >
                <option>Registered Business</option>
                <option>Sole Proprietorship</option>
                <option>Non-Profit</option>
              </select>
              <FaChevronDown className="absolute right-3 top-3 text-gray-400 text-sm" />
            </div>
          </div>
        
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Business Category
            </label>
            <div className="relative">
              <select
                value={businessCategory}
                onChange={(e) => setBusinessCategory(e.target.value)}
                className="w-full border rounded-md p-2 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#2A40F4]"
              >
                <option value="">Select</option>
                <option value="Tech">Tech</option>
                <option value="Retail">Retail</option>
                <option value="Education">Education</option>
              </select>
              <FaChevronDown className="absolute right-3 top-3 text-gray-400 text-sm" />
            </div>
          </div>
          <button className="w-full bg-[#B8BFFA] hover:bg-[#a7b2f4] text-white font-semibold py-2 rounded-md">
            Save & Continue
          </button>
        </div>
      </div>
    );
}

export default BaForm;