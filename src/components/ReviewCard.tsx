import star from "../images/review/star.png"

export default function ReviewCard(props: {
  text?: string;
  review?: string;
  picture?: string;
  name?: string;
  position?: string;
  icon?: string;
  score?: string;
}) {
  return (
    <div className="w-[740px] h-[505px] ml-[25%] ">
      <div className="w-[740px] h-[400px]">
        <img src={props.picture} alt="bg" className="absolute z-0"></img>
      </div>
      <div className="w-[612px] h-[249px] absolute bg-white z-10 mt-[-200px] ml-[64px] flex flex-col items-center justify-between p-[32px] rounded-lg drop-shadow-md ">
        <div className="w-[548px] h-[113px] flex flex-col justify-between">
          <p className="text-[20px] text-[#1B1C57] font-semibold">{props.text}</p>
          <p className="text-[14px] text-[#626687] opacity-[0.75]">{props.review}</p>
        </div>
        <div className="w-[548px] h-[48px]">
          <div className="w-[548px] flex flex-row justify-between">
            <div className="w-[340px] h-[50px] flex flex-row items-center">
              <div className= "w-[48px] h-[48px]">
                <img
                  className="w-[48px] h-[48px]"
                  src={props.icon}
                  alt="icon"
                ></img>
              </div>
              <div className="w-[284px] h-[50px] ml-[16px] flex flex-col justify-between items-between">
                <p className="text-neutral-900 font-medium text-[14px]">
                  {props.name}
                </p>
                <p className="text-neutral-500 text-[14px] opacity-[0.75]">
                  {props.position}
                </p>
              </div>
            </div>
            <div className="w-[74px] h-[28px] mt-[20px] flex flex-row justify-between">
            <img
                  className="w-[28px] h-[28px]"
                  src={star}
                  alt="star"
                ></img>
              <div className="text-[#3C4563] text-[20px] font-bold">{props.score}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
