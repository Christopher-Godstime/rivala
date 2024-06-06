import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import pink from "../assets/pink.png";

const Pricing = () => {
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const Dropdown = [
    {
      title: "How can my company become a partner with Rivala?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "What benefits do partners gain from collaborating with Rivala?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "What type of companies does Rivala partner with?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "Can partners choose talents based on specific criteria?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "How does Rivala manage payroll, local compliance for partners?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];

  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[100px] py-[40px]">
      <div className="max-w-[1480px] mx-auto">
        <h4 className="text-[60px] font-[700] leading-[72px] text-[#101828] text-center lg:w-[768px] mx-auto">
          Pricing plans that grow with your business
        </h4>
        <h4 className="text-[20px] font-[400] leaading-[30px] text-[#667085] mt-[24px] text-center font-ibm">
          Our pricing is our vote of confidence in your business’s ability to
          grow with Caretaker
        </h4>
        <div className="mt-[50px]">
          <div className="flex justify-center items-center border-[1px] border-gray-200 rounded-[20px] w-fit mx-auto">
            <button className="text-white bg-[#101828] rounded-[20px] px-[16px] py-[6px] text-[15px] font-[500]">
              Monthly
            </button>
            <button className="text-[#667085] px-[16px] py-[6px] text-[15px] font-[400]">
              Annually
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-[24px] font-ibm md:w-[400px] xl:w-full 2xl:w-[1240px] mx-auto mt-[50px]">
            <div className="bg-[#F9FAFB] rounded-[24px] p-[24px]">
              <h4 className="text-[20px] font-[600] text-text leading-[30px]">
                Starter
              </h4>
              <h4 className="tetx-[16px] font-[400] leading-[24px] text-[#101828]">
                Professional landlords. Early managers
              </h4>
              <h4 className="text-text text-[36px] font-[600] mt-[16px] font-ibm">
                18%{" "}
                <span className="text-[16px] font-[400] text-text">
                  / per month
                </span>
              </h4>
              <button className="py-[12px] px-[20px] rounded-[8px] border-[1px] border-text text-[16px] font-[500] text-text hover:bg-gray-100 w-full flex justify-center mt-[48px]">
                Try starter
              </button>
              <div className="grid grid-cols-1 mt-[48px] gap-[8px]">
                <h4 className="text-text font-[600] text-[18px]">
                  All in Free +
                </h4>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Up to 10 Properties
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    E-signature
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Tenant Portal
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Owner Portal
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Team Management
                  </h4>
                </div>
              </div>
            </div>
            <div className="border-[#EAECF0] border-[1px] rounded-[24px] p-[24px]">
              <h4 className="text-[20px] font-[600] text-text leading-[30px]">
                Professional
              </h4>
              <h4 className="tetx-[16px] font-[400] leading-[24px] text-[#667085]">
                Professional managers. Small Management Firms
              </h4>
              <h4 className="text-text text-[36px] font-[600] mt-[16px] font-ibm">
                18%{" "}
                <span className="text-[16px] font-[400] text-text">
                  / per month
                </span>
              </h4>
              <button className="py-[12px] px-[20px] rounded-[8px] border-[1px] border-text text-[16px] font-[500] text-white bg-text hover:bg-gray-800 w-full flex justify-center mt-[48px]">
                Try professional
              </button>
              <div className="grid grid-cols-1 mt-[48px] gap-[8px]">
                <h4 className="text-text font-[600] text-[18px]">
                  All in Starter +
                </h4>

                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Up to 100 Properties
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Service Charge Accounting
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Reports
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Email Templates
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Bulk Imports
                  </h4>
                </div>
              </div>
            </div>
            <div className="border-[#EAECF0] border-[1px] rounded-[24px] p-[24px]">
              <h4 className="text-[20px] font-[600] text-text leading-[30px]">
                Business
              </h4>
              <h4 className="tetx-[16px] font-[400] leading-[24px] text-[#667085]">
                Medium-Sized Firms. Community Associations
              </h4>
              <h4 className="text-text text-[36px] font-[600] mt-[16px] font-ibm">
                18%{" "}
                <span className="text-[16px] font-[400] text-text">
                  / per month
                </span>
              </h4>
              <button className="py-[12px] px-[20px] rounded-[8px] border-[1px] border-text text-[16px] font-[500] text-white bg-text hover:bg-gray-800 w-full flex justify-center mt-[48px]">
                Try business
              </button>
              <div className="grid grid-cols-1 mt-[48px] gap-[8px]">
                <h4 className="text-text font-[600] text-[18px]">
                  All in Professional +
                </h4>

                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Up to 500 Properties
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Full Customer Support
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Property Inspections
                  </h4>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <IoCheckmark className="text-[25px] " />
                  <h4 className="text-[18px] font-[400] text-[#101828]">
                    Full Maintenance Management
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <h4 className="text-[48px] font-[700] leading-[60px] text-center ">
            Frequently Asked Questions
          </h4>
          <div className=" mt-[24px] xl:w-[846px] mx-auto">
            {Dropdown.map((drop, i) => (
              <div key={i} className="border-b-[1px] border-[#E6E7E8]">
                <div
                  onClick={handleClick(i)}
                  className="py-[16px] flex justify-between items-center "
                >
                  <h4 className="text-[16px] lg:text-[24px] cursor-pointer font-[600]">
                    {drop.title}
                  </h4>
                  <div
                    onClick={handleClick(i)}
                    className={`text-sm duration-300 cursor-pointer ${
                      clickedIndex[i] ? "rotate-180" : "rotate-0"
                    } `}
                  >
                    <FiChevronDown className="text-[28px]" />
                  </div>
                </div>
                {clickedIndex[i] ? (
                  <h4 className="text-[14px] lg:text-[16px] py-[20px] px-[38px] font-light -mt-[20px] mb-[28px]">
                    {drop.content}
                  </h4>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className=" lg:flex lg:space-x-[30px] mt-[140px]">
          <div className="2xl:w-[40%] lg:w-[50%] rounded-[24px] px-[24px] py-[50px] bg-[#DBF5FF] h-[664px]">
            <h4 className="text-[36px] font-[700] text-text leading-[44px]">
              Employee cost calculator
            </h4>
            <h4 className="text-[18px] font-[500] leading-[28px] text-[#56575C] mt-[16px]">
              Get a curated list of qualified candidates within 72 hours and
              reduce your hiring time by over 40%.
            </h4>
            <button className="text-white hover:bg-gray-800 px-[20px] py-[12px] rounded-[8px] w-[91px] flex justify-center bg-[#04040A] text-[14px] font-[500] mt-[24px]">
              Try now
            </button>
          </div>
          <div className="2xl:w-[60%] lg:w-[50%] rounded-[24px] px-[24px] py-[50px] bg-[#EFDCF5] h-[664px] mt-[30px] lg:mt-[0px] flex flex-col">
            <h4 className="text-[36px] font-[700] text-text leading-[44px]">
              Talk to sales
            </h4>
            <h4 className="text-[18px] font-[500] leading-[28px] text-[#56575C] mt-[16px]">
              Discover how we can help your business
            </h4>
            <button className="text-white hover:bg-gray-800 px-[20px] py-[12px] rounded-[8px] w-[91px] flex justify-center bg-[#04040A] text-[14px] font-[500] mt-[24px]">
              Try now
            </button>
            <div className="mt-auto w-full ">
              <img className="xl:w-1/2 mx-auto" src={pink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
