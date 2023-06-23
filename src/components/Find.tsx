import React from "react";
import find from "../images/find/find.png";
import point from "../images/find/point.png";
import traveloka from "../images/find/traveloka.png";
import tiket from "../images/find/tiket.png";
import air from "../images/find/air.png";
import trip from "../images/find/trip.png";
import GreenButton from "./GreenButton";

export default function Find() {
  return (
    <div className="w-[523px] h-[449px] flex flex-col justify-between ml-[103px]">
      <div className="w-[496px] h-[230px] flex flex-col justify-between">
        <div className="w-[496px] h-[150px]">
          <img src={find} alt="logo"></img>
        </div>
        <p className="text-[16px] text-[#626687] font-normal font-Lexend">
          Everything you need about finding your place to live will be <br />{" "}
          here, where it will be easier for you
        </p>
      </div>
      <div className="w-[496px] h-[56px] flex flex-row items-center justify-between rounded-full border-[1px] border-neutral-300">
        <div className="flex flex-row">
          <img
            src={point}
            alt="logo"
            className="w-[24px] h-[24px] ml-[24px]"
          ></img>
          <p className="ml-[14px] font-medium text-neutral-500">
            Search for the location you want!
          </p>
        </div>
        <div className="mr-[4px]">
        <GreenButton value={"Search"} />
        </div>
      </div>
      <div className="w-[427px] h-[96px] flex flex-col justify-between ">
        <p className="text-neutral-500 font-normal ">Our Partnership</p>
        <div className="flex flex-row items-center justify-between">
          <img src={traveloka} alt="logo"></img>
          <img src={tiket} alt="logo"></img>
          <img src={air} alt="logo"></img>
          <img src={trip} alt="logo"></img>
        </div>
      </div>
    </div>
  );
}
