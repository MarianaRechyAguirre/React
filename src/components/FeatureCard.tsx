import rectangle from "../images/feature/rectangle.png"

export default function FeatureCard(){
    return (
      <div className="w-[340px] h-[552px] bg-pink-500 ml-[149px] mt-[25px]">
        <div className="w-[340px] h-[382px]">
        <img src={rectangle} alt="logo"></img>
        </div>
        <div className="w-[340px] h-[72px] mt-[24px] bg-pink-300 mb-[24px]"></div>
        <div className="w-[340px] h-[50px] bg-blue-200"></div>
      </div>
    );
  }
  