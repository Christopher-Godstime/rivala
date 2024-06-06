import React from "react";
import { FaCheck } from "react-icons/fa6";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const Contact = () => {
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[100px] py-[40px]">
      <div className="max-w-[1480px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[10%] 3xl:gap-[15%]">
          <div className="border-[#F2F2F2] border-[1px] rounded-[20px] p-[24px]">
            <h4 className="md:text-[28px] text-[20px] xl:text-[36px] font-[600] text-text text-center">
              Tell Us How We Can Help
            </h4>
            <form className="mt-[24px] lg:mt-[48px] grid grid-cols-1 gap-[24px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[17px]">
                <div className="w-full">
                  <h4 className="text-[14px] font-[500]">
                    First Name <span className="text-red-500">*</span>
                  </h4>
                  <input
                    className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                    placeholder="Enter first name"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <h4 className="text-[14px] font-[500]">
                    Last Name <span className="text-red-500">*</span>
                  </h4>
                  <input
                    className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                    placeholder="Enter last name"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-[14px] font-[500]">
                  Email address <span className="text-red-500">*</span>
                </h4>
                <input
                  className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                  placeholder="Enter email address"
                  type="email"
                />
              </div>
              <div className="w-full">
                <h4 className="text-[14px] font-[500]">
                  Country / Region <span className="text-red-500">*</span>
                </h4>
                <input
                  className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                  placeholder="Enter Country / Region"
                  type="text"
                />
              </div>
              <div className="w-full">
                <h4 className="text-[14px] font-[500]">
                  Company Name <span className="text-red-500">*</span>
                </h4>
                <input
                  className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                  placeholder="Enter company Name"
                  type="text"
                />
              </div>
              <div className="w-full">
                <h4 className="text-[14px] font-[500]">Description</h4>
                <textarea
                  className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                  placeholder="Enter a description..."
                  rows="5"
                />
              </div>
              <button className="bg-[#04040A] w-full px-[20px] py-[12px] text-[14px] md:text-[16px] font-[500] text-white rounded-[8px] hover:bg-gray-800">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h4 className=" text-[20px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-[600] text-text ">
              Here’s what sets us apart
            </h4>
            <div className="mt-[24px] grid grid-cols-1 gap-[16px]">
              <div className="flex items-center space-x-[10px]">
                <div className="w-[24px] h-[24px] rounded-full flex justify-center items-center bg-black">
                  <FaCheck className="text-white text-[14px]" />
                </div>
                <h4 className="text-[18px] font-[500] text-text">
                  Customized Solutions
                </h4>
              </div>
              <div className="flex items-center space-x-[10px]">
                <div className="w-[24px] h-[24px] rounded-full flex justify-center items-center bg-black">
                  <FaCheck className="text-white text-[14px]" />
                </div>
                <h4 className="text-[18px] font-[500] text-text">
                  Proven Track Record
                </h4>
              </div>
              <div className="flex items-center space-x-[10px]">
                <div className="w-[24px] h-[24px] rounded-full flex justify-center items-center bg-black">
                  <FaCheck className="text-white text-[14px]" />
                </div>
                <h4 className="text-[18px] font-[500] text-text">
                  Dedicated Support
                </h4>
              </div>
            </div>

            <h4 className="text-[24px] font-[700] text-text mt-[40px] lg:mt-[80px]">
              Brands we work with
            </h4>
            <div className="flex justify-between space-x-[24px] mt-[24px]">
              <div>
                <img className="" src={logo1} />
              </div>
              <div>
                <img className="" src={logo2} />
              </div>
              <div>
                <img className="" src={logo3} />
              </div>
              <div>
                <img className="" src={logo4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
