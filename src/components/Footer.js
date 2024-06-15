import React from "react";
import logo from "../assets/logowhite.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%]  border-b-[1px] border-gray-200 bg-[#04040A] py-[40px]">
      <div className="max-w-[1480px] mx-auto">
        <div className="sm:flex items-center justify-between w-full">
          <div>
            <img className="w-[117px]" src={logo} />
          </div>
          <div className="sm:flex sm:space-x-[24px] mt-[16px] sm:mt-[0px]">
            <input
              className="border-[1px] border-[#9EA0A3] px-[14px] py-[10px] rounded-[8px] sm:w-[200px] w-full bg-[#161618] placeholder:text-[#9EA0A3] text-[14px] text-white"
              placeholder="Email Address"
            />
            <button className="text-white w-full sm:w-[200px] h-[44px] px-[18px] py-[10px] flex justify-center items-center text-[14px] font-[500] border-[1px] border-white whitespace-nowrap rounded-[8px] mt-[24px] sm:mt-[0px]">
              Subscribe to Our Newsletter
            </button>
          </div>
        </div>
        <div className="w-full mt-[30px] pb-[30px] mb-[30px] border-b-[0.5px] border-white sm:flex justify-between items-center">
          <div className="flex flex-wrap justify-between md:space-x-[24px]">
            <NavLink to="/partner">
              <h4 className="text-[14px] font-[600] text-white">Partners</h4>
            </NavLink>
            <NavLink to="/talent">
              <h4 className="text-[14px] font-[600] text-white">Talent</h4>
            </NavLink>
            <NavLink to="/contact">
              <h4 className="text-[14px] font-[600] text-white">Contact Us </h4>
            </NavLink>
            <NavLink to="/blog">
              <h4 className="text-[14px] font-[600] text-white">Blog</h4>
            </NavLink>
            <NavLink to="/contact">
              <h4 className="text-[14px] font-[600] text-white">
                Contact Sales
              </h4>
            </NavLink>
          </div>
          <div className="flex items-center space-x-[30px] mt-[32px] sm:mt-[0px]">
            <RiInstagramFill className="text-white text-[28px]" />
            <FaLinkedin className="text-white text-[28px]" />
            <BsTwitterX className="text-white text-[28px]" />
          </div>
        </div>
        <div className="sm:flex justify-between items-center">
          <div className="flex space-x-[24px] order-2">
            <h4 className="text-[12px] font-[400] text-white">
              Terms of Service
            </h4>
            <h4 className="text-[12px] font-[400] text-white">
              Privacy Police
            </h4>
          </div>
          <h4 className="text-[12px] font-[400] text-white order-1 mt-[24px] sm:mt-[0px]">
            Copyright © 2024 Rivala. All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
