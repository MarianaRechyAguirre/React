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
      <div className="w-[612px] h-[249px] absolute bg-white z-10 mt-[-200px] ml-[64px] flex flex-col items-center justify-between p-[32px]">
        <div className="w-[548px] h-[113px] bg-pink-300"></div>
        <div className="w-[548px] h-[48px] bg-purple-200"></div>
      </div>
    </div>
  );
}
