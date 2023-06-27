import line from "../images/feature/line.png";
import bed from "../images/tour/bed.png";
import linebed from "../images/tour/linebed.png"
import mona from "../images/feature/mona.png"
import tel from "../images/tour/tel.png"
import car from "../images/tour/car.png"
import bath from "../images/tour/bath.png"
import steirs from "../images/tour/steirs.png"

export default function Tour() {
  return (
    <div className="w-[522px] h-[404px] flex flex-col justify-between">
      <div className="flex items-center">
        <img src={line} alt="logo" className="w-[32px] h-[1px] mr-[5px]"></img>
        <p className="text-yellow-500 text-[14px] font-medium">Ready To Sell</p>
      </div>
      <p className="font-semibold text-[32px] text-[#1b1c57] ">
        Let's Tour And See Our House!
      </p>
      <p className=" w-[413px] h-[56px] text-[16px] text-[#626687] font-light opacity-[0.75]">
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </p>
      <p className="text[16px] text-[#1B1C57] font-semibold">House Detail</p>
      <div className="w-[400px] h-[32px] flex flex-row justify-between">
        <div className="flex flex-row">
          <img className="w-[40px] h-[32px] pr-[16px]" src={bed} alt="logo" />
          <p className=" w-[146px] h-[20px]text-[16px] font-medium text-[#3C4563] flex flex-row items-center">
            4 Bedrooms
          </p>
        </div>
        <div className="flex flex-row">
          <img className="w-[40px] h-[32px] pr-[16px]" src={bath} alt="logo" />
          <p className=" w-[146px] h-[20px]text-[16px] font-medium text-[#3C4563] flex flex-row items-center">
          2 Bathrooms
          </p>
        </div>
      </div>
      <div className="w-[400px] h-[32px] flex flex-row justify-between mb-[22px]">
        <div className="flex flex-row">
          <img className="w-[40px] h-[32px] pr-[16px]" src={car} alt="logo" />
          <p className=" w-[146px] h-[20px]text-[16px] font-medium text-[#3C4563] flex flex-row items-center">
            1 Carport
          </p>
        </div>
        <div className="flex flex-row">
          <img className="w-[40px] h-[32px] pr-[16px]" src={steirs} alt="logo" />
          <p className=" w-[146px] h-[20px]text-[16px] font-medium text-[#3C4563] flex flex-row items-center">
           2 Floors
          </p>
        </div>
      </div>
      <img className="mb-[34px]"  src={linebed} alt="logo"/>
      <div className="flex flex-row">
      <div className="w-[340px] h-[50px] flex flex-row items-center">
        <div className="w-[56px] h-[56px]">
        <img className="w-[56px] h-[56px]" src={mona} alt="icon"></img>
        </div>
        <div className="w-[284px] h-[50px] ml-[16px]">
          <p className="text-neutral-900 text-[18px]">Dianne Russell</p>
          <p className="text-neutral-500 text-[14px]">Manager Director</p>
        </div>
      </div>
        <button className=" rounded-full w-[163px] h-[48px] border-solid bg-green-500 text-white font-semibold text-sm flex flex-row items-center justify-center"> <div>
            <img className="mr-[16px]" src={tel} alt="logo"></img>
        </div>Contact Now </button>
      </div>
    </div>
  );
}
