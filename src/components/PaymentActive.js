import React from 'react'
import { FaTachometerAlt, FaHeadphones, FaCogs, FaCreditCard, FaLink, FaWallet, FaExchangeAlt, FaFileInvoice, FaUsers, FaBuilding, FaLaptopCode } from 'react-icons/fa';
import { MdWeb, MdPointOfSale, MdAccountBalanceWallet } from 'react-icons/md';


const Sidebar = () => {
    
  return (
   <div className="w-64 min-h-screen bg-white shadow px-2 py-6 font-sans">
      <div className="flex items-center gap-2 mb-4 ml-4">
        <img src="/paylogo.png" alt="PayZeep" className="h-10" />
      </div>
   <div className="space-y-2.5 text-sm font-bold">
        <button className=" flex items-center gap-3 text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md w-full">
          <FaTachometerAlt /> Dashboard
        </button>

         <p className="text-gray-400 mt-6 mb-1 text-sm font-bold border-t pt-4 space-y-2">Business Tools</p>
         <div className='font-medium'>
        <SidebarItem icon={<MdPointOfSale />} label="Point of Sale" />
        <SidebarItem icon={<FaLink />} label="Payment Links" active />
        <SidebarItem icon={<MdAccountBalanceWallet />} label="Virtual Accounts" />
        </div>

        <p className="text-gray-400 mt-6 mb-1 text-sm font-bold border-t pt-4 space-y-2">Incoming</p>
        <div className='font-medium'>
        <SidebarItem icon={<MdWeb />} label="Web Transactions" />
        <SidebarItem icon={<FaCreditCard />} label="POS Transactions" />
        <SidebarItem icon={<FaFileInvoice />} label="Dispute" />
        </div>

        <p className="text-gray-400 mt-6 mb-1  text-sm border-t pt-4 space-y-2 font-bold">Outgoing</p>
        <div className='font-medium'>
        <SidebarItem icon={<FaWallet />} label="Payout" />
        <SidebarItem icon={<FaExchangeAlt />} label="Transfer" />
        <SidebarItem icon={<FaBuilding />} label="Settlements" />
        <SidebarItem icon={<FaUsers />} label="Sub Accounts" />
        </div>

        <div className="mt-6 border-t pt-4 space-y-2 font-bold">
          <SidebarItem icon={<FaBuilding />} label="Business Profile" />
          <SidebarItem icon={<FaHeadphones />} label="Support" />
          <SidebarItem icon={<FaLaptopCode />} label="Developer Tools" />
          <SidebarItem icon={<FaCogs />} label="Settings" />
        </div>
      </div>
    </div>    
  );
}

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${
        active
          ? "bg-[#2A40F4] text-white"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Sidebar