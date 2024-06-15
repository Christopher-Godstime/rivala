import React, { useEffect, useRef, useState } from "react";
import globe from "../assets/globe.png";
import placebig from "../assets/placebig.png";
import placesmall from "../assets/placesmall.png";
import together from "../assets/together.png";
import globepic from "../assets/globepic.png";
import Hire from "../components/Hire";
import test1 from "../assets/circle.png";
import test2 from "../assets/circle.png";
import test3 from "../assets/circle.png";
import test4 from "../assets/circle.png";
import test5 from "../assets/circle.png";
import white1 from "../assets/white1.png";
import white2 from "../assets/white2.png";
import white3 from "../assets/white3.png";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    image: test1,
    text: "“Ride the wave of success with Rivala, as it empowers you to gain the upper hand in every endeavor. Unleash the potential of cutting-edge technology and strategic advantages, propelling you confidently towards triumph.”",
    name: "John Doe ",
    work: "Cloud Integrated Limited",
  },
  {
    id: 2,
    image: test2,
    text: "“Ride the wave of success with Rivala, as it empowers you to gain the upper hand in every endeavor. Unleash the potential of cutting-edge technology and strategic advantages, propelling you confidently towards triumph.”",
    name: "John Doe ",
    work: "Cloud Integrated Limited",
  },
  {
    id: 3,
    image: test3,
    text: "“Ride the wave of success with Rivala, as it empowers you to gain the upper hand in every endeavor. Unleash the potential of cutting-edge technology and strategic advantages, propelling you confidently towards triumph.”",
    name: "John Doe ",
    work: "Cloud Integrated Limited",
  },
  {
    id: 4,
    image: test4,
    text: "“Ride the wave of success with Rivala, as it empowers you to gain the upper hand in every endeavor. Unleash the potential of cutting-edge technology and strategic advantages, propelling you confidently towards triumph.”",
    name: "John Doe ",
    work: "Cloud Integrated Limited",
  },
  {
    id: 5,
    image: test5,
    text: "“Ride the wave of success with Rivala, as it empowers you to gain the upper hand in every endeavor. Unleash the potential of cutting-edge technology and strategic advantages, propelling you confidently towards triumph.”",
    name: "John Doe ",
    work: "Cloud Integrated Limited",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getTranslateValue = () => {
    if (window.innerWidth >= 1024) {
      return `translateX(${(-activeIndex + 1) * 33.3333}%)`;
    } else {
      return `translateX(${-activeIndex * 100}%)`;
    }
  };

  return (
    <div>
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:pt-[30px] pt-[80px] overflow-hidden">
        <div className="max-w-[1480px] mx-auto">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-y-[100px] 2xl:gap-x-[100px] items-center">
            <div>
              <h4 className="2xl:text-[72px] md:text-[60px] text-[36px] font-[600] 2xl:font-[800] leading-[44px] md:leading-[75px] 2xl:leading-[90px] text-[#101828] tracking-tight xl:text-left text-center">
                Hire from a Global Pool of Tech Talents
              </h4>
              <h4 className="text-[20px] font-[400] leaading-[30px] text-[#667085] mt-[24px] font-ibm md:w-[90%] xl:text-left text-center mx-auto xl:mx-px">
                Access the creativity and diversity of Africa and Latin
                America's in-demand tech experts.
              </h4>
              <div className="flex flex-col md:flex-row md:justify-center xl:justify-start md:space-x-[16px] mt-[24px] space-y-[16px] md:space-y-[0px]">
                <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-white bg-[#04040A]">
                  Get Started
                </button>
                <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] border-[1px] border-[#E6E7E8] rounded-[8px] text-[18px] md:text-[16px] font-[500] text-[#101828]">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="xl:-mr-[350px] relative">
              <img
                className="xl:ml-auto xl:mx-px mx-auto xl:w-[70%] "
                src={globe}
              />
              {/* <div className="absolute right-[28%] top-[330px]">
                <img className="w-1/2" src={globepic} />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  py-[16px] overflow-hidden bg-text mt-[50px]">
        <div className="max-w-[1480px] mx-auto md:flex justify-between items-center space-x-[10px]">
          <h4 className="text-[20px] font-[500] leading-[30px] text-[#F2F2F2]">
            Brands We Work With 
          </h4>
          <div className="flex items-center space-x-[24px] md:space-x-[48px] mt-[20px] md:mt-[0px]">
            <div>
              <img className="w-[123px]" src={white1} />
            </div>
            <div>
              <img className="w-[90px]" src={white2} />
            </div>
            <div>
              <img className="w-[118px]" src={white3} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:pt-[30px] pt-[80px] overflow-hidden">
        <div className="max-w-[1480px] mx-auto">
          <div className="py-[40px] md:my-[80px]">
            <h4 className="text-[36px] leading-[44px] font-[700] text-text mb-[60px] md:mb-[100px] md:font-[600] md:leading-[60px] md:text-[48px] tracking-tight">
              What’s in it for you
            </h4>
            <div>
              <div className=" lg:flex lg:space-x-[30px] mb-[30px] ">
                <div className="2xl:w-[70%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA] h-[720px]  flex flex-col ">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Cut Down on Hiring Cost
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#56575C] mt-[16px]">
                    Discover top tech talents from emerging tech hubs and cut
                    your hiring expenses by over 35%
                  </h4>
                  <button className="text-white hover:bg-gray-800 px-[20px] py-[12px] rounded-[8px]  flex justify-center bg-[#04040A] text-[14px] font-[500] mt-[24px] w-fit">
                    Get started
                  </button>
                  <div className="mt-auto pt-[30px] ">
                    <img className=" mx-auto" src={h1} />
                  </div>
                </div>
                <div className="2xl:w-[30%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA] lg:h-[720px] flex flex-col mt-[30px] lg:mt-[0px]">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Employee cost calculator
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#56575C] mt-[16px]">
                    Get a curated list of qualified candidates within 72 hours
                    and reduce your hiring time by over 40%.
                  </h4>
                  <button className="text-white hover:bg-gray-800 px-[20px] py-[12px] rounded-[8px] w-fit flex justify-center bg-[#04040A] text-[14px] font-[500] mt-[24px]">
                    Try now
                  </button>
                  <div className="mt-auto pt-[30px]">
                    <img className=" mx-auto" src={placesmall} />
                  </div>
                </div>
              </div>
              <div className=" lg:flex ">
                <div className="2xl:w-[70%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA] h-[720px]  flex flex-col order-2">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Cut Down On Hiring Time
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#56575C] mt-[16px]">
                    Get a curated list of qualified candidates within 72 hours
                    and reduce your hiring time by over 40%.
                  </h4>
                  <button className="text-white hover:bg-gray-800 px-[20px] py-[12px] rounded-[8px]  flex justify-center bg-[#04040A] text-[14px] font-[500] mt-[24px] w-fit">
                    Get started
                  </button>
                  <div className="mt-auto pt-[30px] ">
                    <img className=" mx-auto" src={h3} />
                  </div>
                </div>
                <div className="2xl:w-[30%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA] lg:h-[720px] flex flex-col mt-[30px] lg:mt-[0px] order-1 lg:mr-[30px]">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Seamlessly Scale Your Tech Team With Vetted Talents 
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#56575C] mt-[16px]">
                    Grow your tech team conveniently with vetted talents that
                    align with your organizational culture and values.
                  </h4>
                  <button className="text-white hover:bg-gray-800 px-[20px] py-[12px] rounded-[8px] w-fit flex justify-center bg-[#04040A] text-[14px] font-[500] mt-[24px]">
                    Try now
                  </button>
                  <div className="mt-auto pt-[30px]">
                    <img className=" mx-auto" src={h2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[80px] py-[48px] bg-[#161618]">
        <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[115px] items-center">
          <div className="grid grid-cols-1 gap-[24px]">
            <h4 className="text-[48px] text-[#F2F2F2] font-[700] leading-[60px] tracking-tight">
              Transform Your Projects, One Team At A Time
            </h4>
            <h4 className="text-[#9EA0A3] text-[18px] font-[500] leading-[28px]">
              However big or small your project is, our product will ensure that
              it always has a smooth and enjoyable experience when building your
              team, planning your project, or collaborating whatever stack you
              need, Rivala has an experienced talent to match your needs
            </h4>
            <button className="bg-[#F2F2F2] px-[20px] py-[12px] rounded-[8px] text-text font-[500] text-[16px] leading-[24px] w-fit hover:bg-gray-100">
              See how it works
            </button>
          </div>
          <div>
            <img src={h4} />
          </div>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[6%]  xl:py-[80px] py-[48px] ">
        <div className="max-w-[1700px] mx-auto relative">
          <h4 className="text-text text-[30px] font-[700] leading-[38px] lg:text-[36px]  lg:leading-[44px] text-center mb-[20px] lg:mb-[48px]">
            One platform, countless success stories
          </h4>
          <div className=" w-full max-w-[1600px] mx-auto overflow-hidden py-[24px] lg:py-[48px]">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: getTranslateValue(),
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full lg:w-1/3 flex-shrink-0 flex flex-col items-center justify-center  transition-transform duration-300 ${
                    index === activeIndex ? "lg:px-[0%] px-[10%]" : "px-[5%]"
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`mb-4 rounded-full object-cover transition-transform duration-300 ${
                      index === activeIndex
                        ? "w-[60px] h-[60px]"
                        : "w-[32px] h-[32px]"
                    }`}
                  />
                  <p
                    className={`text-center text-text transition-transform duration-300 ${
                      index === activeIndex
                        ? "lg:text-[24px] text-[16px] font-[500] leading-[24px] lg:leading-[32px]"
                        : "text-[16px] font-[500] leading-[24px]"
                    }`}
                  >
                    {testimonial.text}
                  </p>
                  <p
                    className={`text-center mt-[24px] text-text transition-transform duration-300 ${
                      index === activeIndex
                        ? "text-[16px] font-[500] leading-[24px]"
                        : "text-[12px] font-[400] leading-[18px]"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-center mt-[12px] text-text transition-transform duration-300 ${
                      index === activeIndex
                        ? "text-[16px] font-[500] leading-[24px]"
                        : "text-[12px] font-[500] leading-[18px]"
                    }`}
                  >
                    {testimonial.work}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[44px] h-[44px] border-[1px] border-[#C0C2C4] text-text rounded-full flex justify-center items-center"
            >
              <BsChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[44px] h-[44px] border-[1px] border-[#C0C2C4] text-text rounded-full flex justify-center items-center"
            >
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>

      <Hire />
    </div>
  );
};

export default Home;
