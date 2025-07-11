import React from 'react';
import { FaCopy, FaEye, FaDownload } from 'react-icons/fa';

const paymentLinks = [
  {
    sn: 1,
    name: "DayCare",
    link: "https://payzeep/cloths",
    date: "28-06-2024 12:30:04",
    expiry: "28-06-2024 12:30:04",
    status: "Active"
  },
  {
    sn: 2,
    name: "Supermarket",
    link: "https://payzeep/food",
    date: "28-06-2024 12:30:04",
    expiry: "Open",
    status: "Active"
  },
  {
    sn: 3,
    name: "Food Payment",
    link: "https://payzeep/shirts",
    date: "28-06-2024 12:30:04",
    expiry: "28-06-2024 12:30:04",
    status: "Active"
  },
  {
    sn: 4,
    name: "Payment",
    link: "https://payzeep/water",
    date: "28-06-2024 12:30:04",
    expiry: "28-06-2024 12:30:04",
    status: "Active"
  },
  {
    sn: 5,
    name: "Payment",
    link: "https://payzeep/fruits",
    date: "28-06-2024 12:30:04",
    expiry: "Open",
    status: "Active"
  },
  {
    sn: 6,
    name: "Payment",
    link: "https://payzeep/cloths",
    date: "28-06-2024 12:30:04",
    expiry: "28-06-2024 12:30:04",
    status: "Active"
  },
  {
    sn: 7,
    name: "Payment",
    link: "https://payzeep/food",
    date: "28-06-2024 12:30:04",
    expiry: "28-06-2024 12:30:04",
    status: "Active"
  },
  {
    sn: 8,
    name: "Payment",
    link: "https://payzeep/food",
    date: "28-06-2024 12:30:04",
    expiry: "28-06-2024 12:30:04",
    status: "Active"
  },
  {
    sn: 9,
    name: "Payment",
    link: "https://payzeep/food",
    date: "28-06-2024 12:30:04",
    expiry: "28-06-2024 12:30:04",
    status: "Active"
  },
  {
    sn: 10,
    name: "Bill Payment",
    link: "https://payzeep/cloths",
    date: "28-06-2024 12:30:04",
    expiry: "28-06-2024 12:30:04",
    status: "Active"
  }
]

const btnInputSize = "h-10 w-30";

const PaView = () => (

    <div className="mt-6 w-full max-w-[80vw] mx-auto bg-white rounded-2xl shadow p-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">All Payment Links</h2>
      {/* Tabs and Actions */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex border border-[#d1d5db] rounded-md overflow-hidden bg-white">
          <button className='w-20 h-10 font-bold text-[#2A40F4] bg-[#f6f8ff] border-r border-[#9ba2dd] focus:outline-none'>Active</button>
          <button className='w-20 h-10 font-semibold text-gray-500 bg-white focus:outline-none'>Inactive</button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className={`ml-2 px-4 py-2 border border-gray-200 rounded-md text-base bg-[#f6f8fc] focus:outline-none ${btnInputSize}`}
        />
        <select className={`ml-2 px-4 py-2 border border-gray-200 rounded-md text-base bg-[#f6f8fc] focus:outline-none ${btnInputSize}`}>
          <option className="text-[#2A40F4] font-semibold">Filter By: Show All</option>
        </select>
        <input
          type="text"
          placeholder="Start Date - End Date"
          className={`ml-2 px-4 py-2 border border-gray-200 rounded-md text-base bg-[#f6f8fc] focus:outline-none ${btnInputSize}`}
        />
        <button className={`ml-2 flex items-center gap-2 bg-[#2A40F4] text-white px-6 py-2 rounded-md text-base font-semibold ${btnInputSize}`}>
          <FaDownload /> Download
        </button>
      </div>
      {/* Table and Pagination with shared border */}
      <div className="overflow-x-hidden rounded-lg border border-gray-300 bg-white">
        <table className="w-full text-md ">
          <thead>
            <tr className="bg-[#f6f8fc] text-gray-500 font-bold">
              <th className="py-6 px-4 text-left">S/N</th>
              <th className="py-6 px-4 text-left">Payment Name</th>
              <th className="py-6 px-4 text-left">Payment Link</th>
              <th className="py-6 px-9 text-left">Date Generated</th>
              <th className="py-6 px-4 text-left">Expiry Date</th>
              <th className="py-6 px-4 text-left">Status</th>
              <th className="py-6 px-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {paymentLinks.map((item) => (
              <tr key={item.sn} className="bg-white">
                <td className="py-6 px-4">{item.sn}</td>
                <td className="py-6 px-4">{item.name}</td>
                <td className="py-6 px-4">
                 <div className="flex items-center w-full">
          <span className="whitespace-normal break-all">{item.link}</span>
          <div className="flex items-center gap-3 ml-8">
            <button className="text-[#2A40F4] hover:text-blue-700" title="Copy">
              <FaCopy />
            </button>
            <button className="text-gray-400 hover:text-[#2A40F4]" title="View">
              <FaEye />
               </button>
            </div>
           </div>
                   </td>  
                <td className="py-6 px-9">{item.date}</td>
                <td className="py-6 px-4.0">{item.expiry}</td>
                <td className="py-6 px-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-semibold">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination inside the border */}
        <div className="flex items-center justify-between mt-4 px-4 pb-4 text-sm bg-red-600">
          <span className="text-gray-700 font-semibold">Page 1 of 30</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 rounded bg-red-900 border text-gray-400" disabled>&lt;</button>
            <button className="px-3 py-1 rounded bg-white border text-gray-700">1</button>
            <button className="px-3 py-1 rounded bg-white border text-gray-700">2</button>
            <button className="px-3 py-1 rounded bg-[#2A40F4] text-white border border-[#2A40F4]">3</button>
            <button className="px-3 py-1 rounded bg-white border text-gray-700">4</button>
            <button className="px-3 py-1 rounded bg-white border text-gray-700">5</button>
            <button className="px-3 py-1 rounded bg-white border text-gray-700">6</button>
            <button className="px-2 py-1 rounded bg-white border text-gray-700">&gt;</button>
          </div>
        </div>
      </div>
  </div>
);

export default PaView;