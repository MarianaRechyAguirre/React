
export default function FeatureCard(props: {
  text: string;
  price: string;
  picture: string;
  name: string;
  city: string;
  icon: string;
}) {
  
  return (
    <div className="w-[340px] h-[552px] mt-[25px] mr-[40px]">
      <div className="w-[340px] h-[382px]">
      <img src={props.picture} alt="bg"></img>
      </div>
      <div className="w-[340px] h-[72px] mt-[24px] mb-[24px] flex flex-col justify-between">
        <p className=" text-neutral-900 text-[24px] font-medium">
          {props.text}
        </p>
        <p className=" text-neutral-700 text-[20px] font-medium">
          {props.price}
        </p>
      </div>
      <div className="w-[340px] h-[50px] flex flex-row items-center">
        <div className="w-[40px] h-[40px]">
        <img src={props.icon} alt="icon"></img>
        </div>
        <div className="w-[284px] h-[50px] ml-[16px]">
          <p className="text-neutral-900 text-[18px]">{props.name}</p>
          <p className="text-neutral-500 text-[14px]">{props.city}</p>
        </div>
      </div>
    </div>
  );
}
