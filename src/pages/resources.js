import React from "react";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";
import r5 from "../assets/r5.png";
import r6 from "../assets/r6.png";
import { GoArrowUpRight } from "react-icons/go";

const Resources = () => {
  return (
    <div>
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[80px] py-[60px] bg-[#111114]">
        <div className="max-w-[1480px] mx-auto">
          <h4 className="lg:text-[60px] text-[36px] font-[600] md:font-[700] leading-[44px] lg:leading-[72px] text-white text-center tracking-tight lg:w-[768px] mx-auto md:pb-[100px] pb-[60px]">
            Let’s build the future together.
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[26px]">
            <div>
              <img className="rounded-[12px]" src={r1} />
            </div>
            <div>
              <img className="rounded-[12px]" src={r2} />
            </div>
            <div>
              <img className="rounded-[12px]" src={r3} />
            </div>
            <div>
              <img className="rounded-[12px]" src={r4} />
            </div>
            <div>
              <img className="rounded-[12px]" src={r5} />
            </div>
            <div>
              <img className="rounded-[12px]" src={r6} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[100px] py-[80px]">
        <div className="max-w-[1480px] mx-auto">
          <h4
            className="text-text font-[700] 
        text-[36px] leading-[44px] tracking-tight mb-[60px]"
          >
            Current openings
          </h4>
          <div>
            <div className="grid grid-cols-3 gap-[10px] border-b-[1px] border-[#E6E7E7] py-[40px] items-center">
              <h4 className="text-text font-[500] text-[30px] leading-[38px] tracking-tight">
                UX Designer
              </h4>
              <h4 className="text-[#575B5E] font-[500] text-[20px] text-center">
                Remote
              </h4>
              <button className="flex justify-end">
                <GoArrowUpRight className="text-[30px] text-text" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-[10px] border-b-[1px] border-[#E6E7E7] py-[40px] items-center">
              <h4 className="text-text font-[500] text-[30px] leading-[38px] tracking-tight">
                Project manager
              </h4>
              <h4 className="text-[#575B5E] font-[500] text-[20px] text-center">
                Remote
              </h4>
              <button className="flex justify-end">
                <GoArrowUpRight className="text-[30px] text-text" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-[10px] border-b-[1px] border-[#E6E7E7] py-[40px] items-center">
              <h4 className="text-text font-[500] text-[30px] leading-[38px] tracking-tight">
                Cloud engineer
              </h4>
              <h4 className="text-[#575B5E] font-[500] text-[20px] text-center">
                Remote
              </h4>
              <button className="flex justify-end">
                <GoArrowUpRight className="text-[30px] text-text" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-[10px] border-b-[1px] border-[#E6E7E7] py-[40px] items-center">
              <h4 className="text-text font-[500] text-[30px] leading-[38px] tracking-tight">
                Copy writer
              </h4>
              <h4 className="text-[#575B5E] font-[500] text-[20px] text-center">
                Remote
              </h4>
              <button className="flex justify-end">
                <GoArrowUpRight className="text-[30px] text-text" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-[10px] border-b-[1px] border-[#E6E7E7] py-[40px] items-center">
              <h4 className="text-text font-[500] text-[30px] leading-[38px] tracking-tight">
                Project manager
              </h4>
              <h4 className="text-[#575B5E] font-[500] text-[20px] text-center">
                Remote
              </h4>
              <button className="flex justify-end">
                <GoArrowUpRight className="text-[30px] text-text" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
