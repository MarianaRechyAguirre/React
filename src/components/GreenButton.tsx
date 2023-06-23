import arrowl from "../images/find/arrowl.png"

export default function GreenButton(props: {value : String}){
    return (
      <div>
        <button className="rounded-full w-[109px] h-[48px] border-solid bg-green-500 text-white font-semibold text-sm flex flex-row items-center justify-center">
        {props.value}
        <div>
            <img src={arrowl} alt="logo"></img>
        </div>
        </button>
      </div>
    );
  }
  