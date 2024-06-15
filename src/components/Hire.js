import React from "react";
import circle from "../assets/circle.png";

const Hire = () => {
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%]   overflow-hidden bg-[#F6F5F2]">
      <div className="max-w-[1480px] mx-auto h-[600px] flex items-center justify-center relative">
        <div className=" flex flex-col justify-center items-center space-y-[24px] lg:w-[625px] z-40">
          <h4 className="text-[36px] font-[700] leading-[44px] tracking-tight text-text">
            Hire a talent
          </h4>
          <h4 className="text-[18px] font-[500] leading-[28px] text-[#56575C] text-center">
            Effortlessly build and scale your dream tech team with precision
            using our AI-powered Talent Solution. Streamline your recruitment
            process, identify top tech talents.
          </h4>
          <button className="bg-[#04040A] px-[20px] py-[12px] rounded-[8px] text-white font-[500] text-[16px] leading-[24px] w-fit hover:bg-gray-800">
            Get started
          </button>
        </div>
        <div className="absolute top-[80px] left-[30%] md:left-[10%]">
          <img
            className="md:w-[80px] md:h-[80px] w-[58px] h-[58px] rounded-full "
            src={circle}
          />
        </div>
        <div className="absolute top-[95px] right-[25%] hidden md:block">
          <img
            className="md:w-[80px] md:h-[80px] w-[58px] h-[58px] rounded-full "
            src={circle}
          />
        </div>
        <div className="absolute md:bottom-[120px] bottom-[50px] md:left-[25%] left-[0px]">
          <img
            className="md:w-[80px] md:h-[80px] w-[58px] h-[58px] rounded-full "
            src={circle}
          />
        </div>
        <div className="absolute bottom-[70px] transform -translate-x-1/2 left-1/2 hidden md:block">
          <img
            className="md:w-[80px] md:h-[80px] w-[58px] h-[58px] rounded-full "
            src={circle}
          />
        </div>
        <div className="absolute bottom-[40px] md:bottom-[150px] md:right-[15%] right-[5%]">
          <img
            className="md:w-[80px] md:h-[80px] w-[58px] h-[58px] rounded-full "
            src={circle}
          />
        </div>
        <div className="w-[48px] h-[48px] rounded-full bg-white absolute top-[130px] left-[40%] "></div>
        <div className="w-[48px] h-[48px] rounded-full bg-white absolute top-[280px] left-[10%] "></div>
        <div className="w-[48px] h-[48px] rounded-full bg-white absolute top-[120px] right-[15%] "></div>
        <div className="w-[48px] h-[48px] rounded-full bg-white absolute bottom-[30px] right-[19%] "></div>
      </div>
    </div>
  );
};

export default Hire;
