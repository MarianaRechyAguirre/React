
export default function WhiteButton(props: {value : String}){
  return (
    <div>
      <button className="rounded-full border-2 border-white w-24 h-8 border-solid text-white font-semibold text-sm">
      {props.value}
      </button>
    </div>
  );
}
