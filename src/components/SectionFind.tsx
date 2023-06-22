import React from "react";
import Find from "./Find";
import FindLeft from "./FindLeft";


export default function SectionFind() {
  return (
    <div className="w-full h-[610px] mt-[22px] flex flex-row items-center justify-between">
        <Find/>
        <FindLeft/>
    </div>
  );
}
