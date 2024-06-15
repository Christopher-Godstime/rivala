import React from "react";
import partner from "../assets/partner.png";
import Faqs from "../components/Faqs";
import Hire from "../components/Hire";

const Partner = () => {
  return (
    <div>
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[120px] py-[80px] overflow-hidden">
        <div className="max-w-[1480px] mx-auto">
          <h4 className="text-text font-[500] text-[20px] leading-[30px] text-center mb-[32px]">
            How it works
          </h4>
          <h4 className=" md:text-[60px] text-[36px] font-[600] md:font-[700] leading-[44px] md:leading-[75px]  text-[#101828]   text-center lg:w-[800px] mx-auto tracking-tight">
            Hire talents with Rivala in six easy steps
          </h4>
        </div>
      </div>

      <div className=" lg:px-[5%] xl:px-[7%]  py-[16px] lg:py-[24px] overflow-hidden bg-[#F2F2F2]">
        <div className="max-w-[1480px] mx-auto">
          <ol className="list-decimal list-inside flex justify-between space-x-[40px] items-center px-[3%] lg:px-[0px] overflow-x-auto scrollbar-none">
            <li className="text-[20px] xl:text-[25px] 2xl:text-[30px] font-[700] text-text whitespace-nowrap">
              Request
            </li>
            <li className="text-[20px] xl:text-[25px] 2xl:text-[30px] font-[700] text-text whitespace-nowrap">
              Shortlist
            </li>
            <li className="text-[20px] xl:text-[25px] 2xl:text-[30px] font-[700] text-text whitespace-nowrap">
              Interview
            </li>
            <li className="text-[20px] xl:text-[25px] 2xl:text-[30px] font-[700] text-text whitespace-nowrap">
              Choose
            </li>
            <li className="text-[20px] xl:text-[25px] 2xl:text-[30px] font-[700] text-text whitespace-nowrap">
              Background check
            </li>
            <li className="text-[20px] xl:text-[25px] 2xl:text-[30px] font-[700] text-text whitespace-nowrap">
              Hire
            </li>
          </ol>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[50px] py-[40px] overflow-hidden">
        <div className="max-w-[1480px] mx-auto grid grid-cols-1 md:gap-[80px] gap-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-[20%] gap-y-[40px]">
            <div className="grid grid-cols-1 gap-[16px] md:gap-[24px] h-fit lg:w-[476px]">
              <h4 className="text-[36px] font-[700] leading-[44px] tracking-tight text-text">
                Complete a talent request form
              </h4>
              <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3]">
                Tell us your requirements.
              </h4>
              <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-white bg-[#04040A] w-fit">
                Try now
              </button>
            </div>
            <div>
              <img src={partner} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-[20%] gap-y-[40px]">
            <div className="grid grid-cols-1 gap-[16px] md:gap-[24px] h-fit lg:w-[476px] md:order-2">
              <h4 className="text-[36px] font-[700] leading-[44px] tracking-tight text-text">
                Get a Curated Shortlist
              </h4>
              <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3]">
                Within 96 hours, receive a list of qualified candidates tailored
                to meet your specified requirements.
              </h4>
              <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-white bg-[#04040A] w-fit">
                Try now
              </button>
            </div>
            <div className="md:order-1">
              <img src={partner} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-[20%] gap-y-[40px]">
            <div className="grid grid-cols-1 gap-[16px] md:gap-[24px] h-fit lg:w-[476px]">
              <h4 className="text-[36px] font-[700] leading-[44px] tracking-tight text-text">
                Interview Candidates
              </h4>
              <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3]">
                Conduct interviews to choose the best fit for your team.
              </h4>
              <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-white bg-[#04040A] w-fit">
                Try now
              </button>
            </div>
            <div>
              <img src={partner} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-[20%] gap-y-[40px]">
            <div className="grid grid-cols-1 gap-[16px] md:gap-[24px] h-fit lg:w-[476px] md:order-2">
              <h4 className="text-[36px] font-[700] leading-[44px] tracking-tight text-text">
                Choose Your Preferred Candidate
              </h4>
              <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3]">
                Select the candidate who meets your criteria and fits your team
                culture.
              </h4>
              <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-white bg-[#04040A] w-fit">
                Try now
              </button>
            </div>
            <div className="md:order-1">
              <img src={partner} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-[20%] gap-y-[40px]">
            <div className="grid grid-cols-1 gap-[16px] md:gap-[24px] h-fit lg:w-[476px]">
              <h4 className="text-[36px] font-[700] leading-[44px] tracking-tight text-text">
                Background Checks
              </h4>
              <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3]">
                We conduct thorough background checks for your peace of mind
              </h4>
              <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-white bg-[#04040A] w-fit">
                Try now
              </button>
            </div>
            <div>
              <img src={partner} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-[20%] gap-y-[40px]">
            <div className="grid grid-cols-1 gap-[16px] md:gap-[24px] h-fit lg:w-[476px] md:order-2">
              <h4 className="text-[36px] font-[700] leading-[44px] tracking-tight text-text">
                Hire and Onboard
              </h4>
              <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3]">
                Once your preferred candidate passes all checks, hire and
                onboard them seamlessly.
              </h4>
              <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-white bg-[#04040A] w-fit">
                Try now
              </button>
            </div>
            <div className="md:order-1">
              <img src={partner} />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[80px]">
        <Faqs />
      </div>
      <Hire />
    </div>
  );
};

export default Partner;
