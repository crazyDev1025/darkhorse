"use client";
import { IoWalletOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Point() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true); // Delay the start of the animation
    }, 1); // Adjust delay as needed
  }, []);
  return (
    // <div className={`homee ${isVisible ? "fadeInLeft" : ""}`}>
    <div className="px-8 pb-12">
      <div className="w-full flex flex-col space-y-4 items-center mt-14">
        <div className="w-24 h-24 p-6 bg-[#002A65] border-2 border-[#000B6E] rounded-full flex flex-col justify-center items-center">
          <Image
            width={98}
            height={98}
            className="w-auto h-auto"
            src="/imgs/logo.png"
            alt="logo.png"
          />
        </div>
        <div className="text-white text-2xl">TTPT</div>
        <div className="flex space-x-1 text-[#818181]">
          <IoWalletOutline className="w-[18px] h-[16px]" />
          <div className="text-sm">Balance</div>
        </div>
        <div className="relative">
          <div className=" w-full h-full rounded-[999px] bg-[#DA01AA] blur-3xl absolute top-0 left-0 z-[-1]"></div>
          <div className="font-bold text-[53px] text-white">
            <span>1570</span>
          </div>
        </div>
        <div className="font-semibold text-sm text-white">Points</div>
      </div>
    </div>
    // </div>
  );
}
