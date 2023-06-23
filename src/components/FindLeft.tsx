import React from "react";
import lines from "../images/find/lines.png";
import frame from "../images/find/frame.png";

export default function FindLeft() {
  return (
    <div className="w-[683px] h-[564px]">
      <div className="w-[540px] h-[348px] ml-[44px] mt-[7px]">
        <img src={lines} alt="logo"></img>
      </div>
      <div className="w-[673px] h-[108px] mt-[40px] ml-[10px]">
        <img src={frame} alt="logo" className="w-[859px]"></img>
      </div>
    </div>
  );
}
