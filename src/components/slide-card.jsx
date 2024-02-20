import React, { useState } from "react";
import { Card } from "./data/info";
import preview from "../assets/icon-prev.svg";
import next from "../assets/icon-next.svg";

const SlideCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0);
  };

  return (
    <div>
      {Card[currentSlide] && (
        <div key={Card[currentSlide]?.id}>
          <div
            className="flex justify-center items-center font-inter max-sm:flex-col-reverse
           md:flex-col-reverse lg:flex-row ">
            <div className="mt-[9.1rem]">
              <div
                className="text-[#202047] font-[300] relative 
                 max-sm:w-[311px] max-sm:h-[144px] max-sm:text-[18px] max-sm:leading-[24px] max-sm:text-center max-sm:m-auto max-sm:mt-[-2.5rem]
                 md:w-[400px] md:text-center md:text-[20px] md:leading-[30px] md:ml-10 md:mt-[-8rem]
                 lg:w-[635px] lg:h-[220px] lg:text-[32px] lg:mr-[-3.7rem] lg:my-10 lg:text-left lg:leading-[44px]">
                &quot; {Card[currentSlide]?.info} &quot;
              </div>
              <div
                className=" flex gap-2  
                    max-sm:leading-[20px] max-sm:flex-col max-sm:mt-10
                     md:mt-[2rem] lg:mt-0 lg:w-[465px] lg:text-[20px] lg:leading-[38px] lg:m-auto lg:ml-10">
                <div className="w-[137px] font-[700] text-[#202047] max-sm:m-auto">
                  {Card[currentSlide]?.name}
                </div>
                <div
                  className=" font-[500] text-[#b9b9ce]
                 max-sm:w-[166px] max-sm:text-center max-sm:m-auto lg:w-[318px]">
                  {Card[currentSlide]?.roll}
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  className=" rounded-[5px] justify-center 
                  max-sm:w-[254px] max-sm:h-[253px] max-sm:my-[5.9rem] 
                  md:w-[400px] md:h-[353px] md:m-auto md:mt-10
                  lg:w-[460px] lg:h-[440px]
                  xl:w-[540px] xl:h-[540px] lg:my-[9.199rem]"
                  src={Card[currentSlide]?.images}
                  alt=""
                />
                <div
                  className="w-[112px] h-[56px] bg-[#FFF] shadow-2xl rounded-full text-center py-[1.2rem]
                  max-sm:mt-[-7.5rem] max-sm:w-[64px] max-sm:h-[40px] max-sm:py-[0.95rem] max-sm:ml-[1rem]
         relative ml-16 md:mt-[-1.8rem] lg:mt-[-11rem] ">
                  <button
                    onClick={handleNext}
                    className=" absolute ml-[-40px] max-sm:ml-[-28px]">
                    <img src={preview} alt="Next" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute ml-7 max-sm:ml-4">
                    <img className="" src={next} alt="Next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideCard;
