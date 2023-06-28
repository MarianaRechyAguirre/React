import Car from "./Car";


export default function Review() {
    return (
      <div className="w-full h-[664px]">
        <p className="text-[14px] font-medium text-center text-[#F59E0B]">See Our Review</p>
        <p className="text-[32px] font-semibold text-center mb-[40px]">What Our User Say About Us</p>
        <div className="w-full h-[505px]">
          <Car/>
        </div>
      </div>
    );
  }
  