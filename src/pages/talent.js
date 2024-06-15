import React from "react";
import talent from "../assets/talent.png";
import placebig from "../assets/placebig.png";
import placesmall from "../assets/placesmall.png";
import talent1 from "../assets/talent1.png";
import talent2 from "../assets/talent2.png";
import Faqs from "../components/Faqs";
import Hire from "../components/Hire";
import pile from "../assets/pile.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";

const Talent = () => {
  return (
    <div>
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:pt-[100px] pt-[80px]">
        <div className="max-w-[1480px] mx-auto">
          <div className="flex flex-col justify-center items-center space-y-[24px] lg:w-[768px] mx-auto md:pb-[100px] pb-[60px]">
            <h4 className="lg:text-[60px] text-[36px] font-[600] md:font-[700] leading-[44px] lg:leading-[72px] text-[#101828] text-center tracking-tight">
              Explore Limitless Opportunities
            </h4>
            <h4 className="text-[20px] font-[400] leaading-[30px] text-[#667085] text-center font-ibm">
              Take a journey where your skills have no limits. Connect with the
              global job market from the comfort of your current location. Your
              next career-defining opportunity is not just within reach; it's
              just a click away!"
            </h4>
            <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-white bg-[#04040A] md:w-fit w-full">
              Get Started
            </button>
          </div>
          <div className="pb-[60px] md:pb-[0px]">
            <img src={talent} />
          </div>
        </div>
      </div>
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[100px] py-[80px]">
        <div className="max-w-[1480px] mx-auto">
          <div className="">
            <h4 className="text-[36px] leading-[44px] font-[600] text-text mb-[60px] md:mb-[100px] md:font-[600] md:leading-[60px] md:text-[48px] tracking-tight ">
              What’s in it for you
            </h4>
            <div>
              <div className=" lg:flex lg:space-x-[30px] mb-[30px] ">
                <div className="2xl:w-[65%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA]  2xl:h-[687px] lg:h-[800px] h-fit  flex flex-col ">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Verified Opportunities
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3] mt-[16px]">
                    Explore curated, verified job listings for meaningful career
                    advancement. Your pathway to success starts here.
                  </h4>
                  <button className="text-text hover:bg-gray-100 px-[20px] py-[12px] rounded-[8px]  flex justify-center bg-white text-[14px] font-[500] mt-[24px] w-fit border-[1px] border-[#9EA0A3]">
                    Get started
                  </button>
                  <div className="mt-auto pt-[30px] ">
                    <img className=" mx-auto" src={t1} />
                  </div>
                </div>
                <div className="2xl:w-[35%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA]   lg:2xl:h-[687px] lg:h-[800px] h-fit flex flex-col mt-[30px] lg:mt-[0px]">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Set your Rates
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3] mt-[16px]">
                    Set your rate to align with your unique skills, expertise,
                    and the value you bring to the table.
                  </h4>
                  <button className="text-text hover:bg-gray-100 px-[20px] py-[12px] rounded-[8px] w-fit flex justify-center bg-white text-[14px] font-[500] mt-[24px] border-[1px] border-[#9EA0A3]">
                    Try now
                  </button>
                  <div className="mt-auto pt-[30px]">
                    <img className=" mx-auto" src={talent2} />
                  </div>
                </div>
              </div>
              <div className=" lg:flex ">
                <div className="2xl:w-[65%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA]  2xl:h-[687px] lg:h-[800px] h-fit  flex flex-col order-2">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Stand Out, Stand Tall
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3] mt-[16px]">
                    Get ahead in the job market with our learning resources
                    designed to help you build a successful career.
                  </h4>

                  <button className="text-text hover:bg-gray-100 px-[20px] py-[12px] rounded-[8px]  flex justify-center bg-white text-[14px] font-[500] mt-[24px] w-fit border-[1px] border-[#9EA0A3]">
                    Get started
                  </button>
                  <div className="mt-auto pt-[30px] ">
                    <img className=" mx-auto" src={t3} />
                  </div>
                </div>
                <div className="2xl:w-[35%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA]   lg:2xl:h-[687px] lg:h-[800px] h-fit flex flex-col mt-[30px] lg:mt-[0px] order-1 lg:mr-[30px]">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Take charge of your career
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3] mt-[16px]">
                    Organize opportunities, Filter opportunities, customize your
                    preferences, and track your applications in real-time.
                    Simplify and personalise your professional journey.
                  </h4>
                  <button className="text-text hover:bg-gray-100 px-[20px] py-[12px] rounded-[8px] w-fit flex justify-center bg-white text-[14px] font-[500] mt-[24px] border-[1px] border-[#9EA0A3]">
                    Try now
                  </button>
                  <div className="mt-auto pt-[30px]">
                    <img className=" mx-auto" src={t2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[100px] py-[80px]">
        <div className="max-w-[1480px] mx-auto">
          <h4 className="lg:text-[60px] text-[36px] font-[600] md:font-[700] leading-[44px] lg:leading-[72px] text-[#101828] md:w-[715px] mx-auto text-center tracking-tight">
            Get started with Rivala in six easy steps
          </h4>
          <div className="grid gid-cols-1 lg:grid-cols-2 mt-[80px] gap-y-[100px] gap-x-[30px] items-center">
            <div className="flex xl:w-[603px]">
              <div className="flex h-fit pl-[24px]">
                <div className="bg-text w-[2px] h-[420px]"></div>
                <div className="flex flex-col justify-between -ml-[24px] ">
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center text-white bg-text text-[24px] font[500] border-[3px] border-white relative">
                    1
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center text-white bg-text text-[24px] font[500] border-[3px] border-white">
                    2
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center text-white bg-text text-[24px] font[500] border-[3px] border-white">
                    3
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center text-white bg-text text-[24px] font[500] border-[3px] border-white">
                    4
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between pl-[20px] lg:h-[472px]">
                <div className="">
                  <h4 className="text-[24px] font-[700] leading-[32px] text-text">
                    Create a profile
                  </h4>
                  <h4 className="text-[18px] font-[400] leading-[28px] text-[#56575C] mt-[8px]">
                    Sign up and complete your profile registration.
                  </h4>
                </div>
                <div className="lg:pt-[20px]">
                  <h4 className="text-[24px] font-[700] leading-[32px] text-text">
                    Get approved
                  </h4>
                  <h4 className="text-[18px] font-[400] leading-[28px] text-[#56575C] mt-[8px]">
                    Join our talent network upon successful verification
                  </h4>
                </div>
                <div className="lg:pt-[20px]">
                  <h4 className="text-[24px] font-[700] leading-[32px] text-text">
                    Get matched with job opportunities
                  </h4>
                  <h4 className="text-[18px] font-[400] leading-[28px] text-[#56575C] mt-[8px]">
                    Receive job alerts that are in line with your preference
                  </h4>
                </div>
                <div className="mt-[20px]">
                  <h4 className="text-[24px] font-[700] leading-[32px] text-text">
                    Get hired
                  </h4>
                  <h4 className="text-[18px] font-[400] leading-[28px] text-[#56575C] mt-[8px]">
                    Successfully move from applicant to employee after
                    satisfying the requirements
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="2xl:w-1/2 mx-auto lg:mx-px">
                <img src={pile} />
              </div>
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

export default Talent;
