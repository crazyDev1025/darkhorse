import Link from "next/link";

import React from "react";

export default function Index() {
  return (
    <div className="w-full max-w-[500px]">
      <div className="w-full flex flex-col justify-center items-center p-4">
        <div className="py-12 px-10 flex flex-col items-center">
          <img className="w-26 h-28" src="/imgs/logo.png" alt="logo.png" />
          <div className="font-semibold text-[32px] leading-[43px] text-center text-white bg-[#00204D] p-5 my-10 rounded-lg">
            Welcome to TRYTOPLAYTHAT
          </div>
        </div>
        <Link
          href="point"
          className="mt-10 font-semibold text-[17px] text-white flex justify-center items-center w-full py-5 bg-gradient-to-r from-[#7D4DC2] to-[#008AD8] shadow-md rounded-lg hover:curpointer active:shadow-none"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
