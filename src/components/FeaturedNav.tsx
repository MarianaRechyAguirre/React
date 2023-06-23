
import line from "../images/feature/line.png"
import house from "../images/feature/house.png"
import apartment from "../images/feature/apartment.png"
import villa from "../images/feature/villa.png"
import arrow from "../images/feature/arrow.png"

export default function FeaturedNav() {
  return (
    <div className="w-full h-[94px] flex items-center justify-evenly">
      <div className="ml-[108px]">
        <div className="flex items-center">
        <img src={line} alt="logo" className="w-[32px] h-[1px] mr-[5px]"></img>
        <p className="text-yellow-500 text-[14px] font-medium">Our Recommendation</p>
        </div>
        <p className="font-semibold text-[40px] text-[#1b1c57] ">Featured House</p>
      </div>
      <div className="flex items-center justify-between h-[55px] w-[514px] mr-[111px]">
        <button className="rounded-full w-[135px] h-[52px] border-solid bg-green-100 text-green-500 font-semibold text-sm flex flex-row items-center justify-center">
          <div className="ml-[10px]">
            <img src={house} alt="logo" className="mr-[8px]"></img>
          </div>
          House
        </button>
        <button className="rounded-full border-[1px] border-neutral-300 w-[119px] h-[52px]  border-solid text-neutral-500 font-semibold text-sm flex flex-row items-center justify-center">
          <div className="ml-[10px]">
            <img  src={villa}  alt="logo" className="mr-[8px]"></img>
          </div>
          Villa
        </button>
        <button className="rounded-full border-[1px] border-neutral-300 w-[175px] h-[52px]  border-solid text-neutral-500 font-semibold text-sm flex flex-row items-center justify-center">
          <div className="ml-[10px]">
            <img  src={apartment} alt="logo" className="mr-[8px]"></img>
          </div>
          Apartment
        </button>
      </div>
      <div className="mr-[111.5px]">
      <img src={arrow} alt="hola"></img>
      </div>
    </div>
  );
}
