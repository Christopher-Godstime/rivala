import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { FiChevronDown } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = ({ show, setShow }) => {
  useEffect(() => {
    setShow(show);

    if (show) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [show]);

  const getAJob = () => {
    window.open("https://app.rivala.io/auth/signin", "_blank");
  };

  const hireTalent = () => {
    window.open("https://app.rivala.io/talent?step=1", "_blank");
  };
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%]  lg:border-b-[1px] border-gray-200">
      <div className="max-w-[1480px] mx-auto h-[80px] lg:flex justify-between items-center hidden ">
        <div className="flex items-center space-x-[32px]">
          <NavLink to="/">
            <div>
              <img className="w-[117px]" src={logo} />
            </div>
          </NavLink>
          <div className="flex items-center space-x-[6px]">
            <NavLink
              to="/partner"
              style={({ isActive }) => {
                return { color: isActive ? "#eab308" : "#101828" };
              }}
            >
              <h4 className="text-[14px] font-[600] ">Partners</h4>
            </NavLink>
            <FiChevronDown className="text-[18px]" />
          </div>
          <div className="flex items-center space-x-[6px]">
            <NavLink
              to="/talent"
              style={({ isActive }) => {
                return { color: isActive ? "#eab308" : "#101828" };
              }}
            >
              <h4 className="text-[14px] font-[600] ">Talent</h4>
            </NavLink>
            <FiChevronDown className="text-[18px]" />
          </div>
          <div className="flex items-center space-x-[6px]">
            <NavLink
              to="/resources"
              style={({ isActive }) => {
                return { color: isActive ? "#eab308" : "#101828" };
              }}
            >
              <h4 className="text-[14px] font-[600] ">Resources</h4>
            </NavLink>
            <FiChevronDown className="text-[18px]" />
          </div>
        </div>
        <div className="flex items-center space-x-[24px]">
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "#eab308" : "#101828" };
            }}
          >
            <h4 className="text-[14px] font-[600] ">Contact us</h4>
          </NavLink>
          <button
            onClick={getAJob}
            className="px-[18px] py-[10px] border-[1px] border-[#E6E7E8] rounded-[8px] text-[14px] font-[500] text-[#101828]"
          >
            Get a job
          </button>
          <button
            onClick={hireTalent}
            className="px-[18px] py-[10px] rounded-[8px] text-[14px] font-[500] text-white bg-[#04040A]"
          >
            Hire talent
          </button>
        </div>
      </div>
      <div className="bg-white lg:py-[16px] py-[20px] flex justify-between items-center lg:hidden">
        <NavLink to="/">
          <div>
            <img className="w-[117px]" src={logo} />
          </div>
        </NavLink>

        <div>
          {show ? (
            <RiCloseLargeLine
              onClick={() => setShow(!show)}
              className="text-[22px]"
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setShow(!show)}
              className="text-[22px]"
            />
          )}
        </div>
      </div>
      <div
        className={`top-0 left-0 z-40 absolute bg-white w-full  overflow-y-auto h-[calc(100vh-60px)] lg:hidden py-[40px] ${
          show ? "translate-y-[60px]" : "-translate-y-[1300px]"
        } ease-in-out duration-500`}
      >
        <div className="flex items-center flex-col space-y-[40px]">
          <div className="flex items-center space-x-[6px]">
            <NavLink
              to="/partner"
              style={({ isActive }) => {
                return { color: isActive ? "#eab308" : "#101828" };
              }}
            >
              <h4
                onClick={() => setShow(!show)}
                className="text-[14px] font-[600] "
              >
                Partners
              </h4>
            </NavLink>
            <FiChevronDown className="text-[18px]" />
          </div>
          <div className="flex items-center space-x-[6px]">
            <NavLink
              to="/talent"
              style={({ isActive }) => {
                return { color: isActive ? "#eab308" : "#101828" };
              }}
            >
              <h4
                onClick={() => setShow(!show)}
                className="text-[14px] font-[600] "
              >
                Talent
              </h4>
            </NavLink>
            <FiChevronDown className="text-[18px]" />
          </div>
          <div className="flex items-center space-x-[6px]">
            <NavLink
              to="/resources"
              style={({ isActive }) => {
                return { color: isActive ? "#eab308" : "#101828" };
              }}
            >
              <h4
                onClick={() => setShow(!show)}
                className="text-[14px] font-[600] "
              >
                Resources
              </h4>
            </NavLink>
            <FiChevronDown className="text-[18px]" />
          </div>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "#eab308" : "#101828" };
            }}
          >
            <h4
              onClick={() => setShow(!show)}
              className="text-[14px] font-[600] "
            >
              Contact us
            </h4>
          </NavLink>
          <button
            onClick={() => {
              setShow(!show);
              getAJob();
            }}
            className="px-[18px] py-[10px] border-[1px] border-[#E6E7E8] rounded-[8px] text-[14px] font-[500] text-[#101828]"
          >
            Get a job
          </button>
          <button
            onClick={() => {
              setShow(!show);
              hireTalent();
            }}
            className="px-[18px] py-[10px] rounded-[8px] text-[14px] font-[500] text-white bg-[#04040A]"
          >
            Hire talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
