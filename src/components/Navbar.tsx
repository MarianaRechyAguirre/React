import React from "react";
import logo from "../images/header/logo.png";
import WhiteButton from "./WhiteButton";
import arrow from "../images/header/arrow.png"


export default function Navbar() {
  return (
    <div className="h-12 w-full bg-green flex items-center justify-between mt-10">
      <div className="ml-[111px]"> 
        <img src={logo} alt="logo"></img>
      </div>
      <div className="flex items-center h-12 w-[532px] mr-[111px]">
      <div className="w-96 h-12 flex items-center justify-evenly mr-14">
        <WhiteButton value = {"About us"}></WhiteButton>
        <WhiteButton value = {"Article"}></WhiteButton>
        <button
          className="rounded-full border-2 border-white w-32 h-8 border-solid text-white font-semibold text-sm flex flex-row items-center justify-center"
        >
          Property
          <div className="ml-[10px]">
            <img src={arrow} alt="logo"></img>
        </div>
        </button>
      </div>
      <div>
        <button
          className="rounded-full w-28 h-12 border-solid bg-green-100 text-green-700 font-bold text-sm"
        >
          Sign Up!
        </button>
      </div>
      </div>
    </div>
  );
}
