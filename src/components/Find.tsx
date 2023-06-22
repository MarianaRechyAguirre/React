import React from "react";

export default function Find() {
  return (
    <div className="w-[523px] h-[449px] flex flex-col justify-between ml-[103px]">
      <div className="w-[496px] h-[230px] bg-yellow-200">
        <p className="text-[40px]">
          Find The Place To <br /> Live <span>Your Dreams</span> <br /> Easily
          Here
        </p>
        <p className="text-[16px] text-[#626687]">
          Everything you need about finding your place to live will be <br />{" "}
          here, where it will be easier for you
        </p>
      </div>
      <div className="w-[496px] h-[56px] text-[#888B97] bg-red-300 flex flex-row">
        <img alt="logo"></img>
        <p>Search for the location you want</p>
        <button className="rounded-full w-28 h-12 border-solid"></button>
      </div>
      <div className="w-[427px] h-[96px] bg-orange-300 flex flex-col justify-between ">
        <p className="text-[#888B97]">Our Partnership</p>
        <div className="flex flex-row">
          <img alt="logo"></img>
          <img alt="logo"></img>
          <img alt="logo"></img>
          <img alt="logo"></img>
        </div>
      </div>
    </div>
  );
}
