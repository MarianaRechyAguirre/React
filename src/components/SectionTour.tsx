import Tour from "./Tour";
import back from "../images/tour/back.png";
import armchair from "../images/tour/armchair.png";
import paint from "../images/tour/paint.png";
import photo from "../images/tour/photo.png";

export default function SectionTour() {
  return (
    <div className="w-full h-[560px] flex flex-row justify-center">
      <div className="w-[1200px] h-[459px] flex flex-row justify-between items-center">
        <Tour />
        <div className="back w-[528px] h-[459px]">
          <img src={back} alt="logo" className="ml-[40px] z-0 absolute"></img>
          <img src={armchair} alt="logo" className="z-10 mt-[291px] absolute"></img>
          <img src={paint} alt="logo" className="z-10 mt-[379px] ml-[308px] absolute"></img>
          <img src={photo} alt="logo" className="z-10 mt-[379px] ml-[412px] absolute"></img>
        </div>
      </div>
    </div>
  );
}

