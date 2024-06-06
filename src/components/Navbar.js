import React from "react";
import logo from "../assets/logo.png";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%]  border-b-[1px] border-gray-200">
      <div className="max-w-[1480px] mx-auto h-[80px] flex justify-between items-center">
        <div className="flex items-center space-x-[32px]">
          <div>
            <img className="w-[117px]" src={logo} />
          </div>
          <div className="flex items-center space-x-[6px]">
            <h4 className="text-[14px] font-[600] text-[#101828]">Partners</h4>
            <FiChevronDown className="text-[18px]" />
          </div>
          <div className="flex items-center space-x-[6px]">
            <h4 className="text-[14px] font-[600] text-[#101828]">Talent</h4>
            <FiChevronDown className="text-[18px]" />
          </div>
          <div className="flex items-center space-x-[6px]">
            <h4 className="text-[14px] font-[600] text-[#101828]">Resources</h4>
            <FiChevronDown className="text-[18px]" />
          </div>
        </div>
        <div className="flex items-center space-x-[24px]">
          <h4 className="text-[14px] font-[600] text-[#101828]">Contact us</h4>
          <button className="px-[18px] py-[10px] border-[1px] border-[#E6E7E8] rounded-[8px] text-[14px] font-[500] text-[#101828]">
            Get a job
          </button>
          <button className="px-[18px] py-[10px] rounded-[8px] text-[14px] font-[500] text-white bg-[#04040A]">
            Hire talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
