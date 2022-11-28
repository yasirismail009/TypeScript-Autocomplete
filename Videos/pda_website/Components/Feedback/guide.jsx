import React from "react";
import ReadMore from "../../Assets/read_more.svg";
import Image from "next/image";

export default function Guide() {
  return (
    <div className="bg-primary-text lg:w-2/4 sm:w-full w-full p-8 px-20 rounded-xl shadow-inner">
      <p className="text-4xl text-primary-dark font-bold mb-8">
        Explore Our App Guide!
      </p>
      <p className="text-xl text-primary-dark font-bold mb-4">
        Stay alert by latest threat attcks
      </p>
      <p className="text-lg mb-8">
        Techvista Systems is one of the most sought-after employers in the
        industry. Apply now and become a part of the Techvista family.
      </p>
      <div className="w-60 flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-8 px-8 lg:py-2  sm:py-2 py-2 lg:mb-0 sm:mb-8 mb-8 text-primary-main bg-primary-dark hover:bg-primary-card   rounded-xl shadow-2xl">
        <p className="lg:text-lg sm:text-base text-base font-semibold ml-4">
          Explore More
        </p>
        <Image src={ReadMore} alt="Explore More" className="w-[10%] ml-4" />
      </div>
    </div>
  );
}
