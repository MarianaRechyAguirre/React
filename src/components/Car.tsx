import { Carousel } from "@material-tailwind/react";
import ReviewCard from "./ReviewCard";
import best from "../images/review/best.png"
import hounter from "../images/review/hounter.png"
import house from "../images/review/house.png"

 
export default function Car() {
  return (
    <Carousel className="rounded-lg">
    <ReviewCard picture={best}/>
    <ReviewCard picture={hounter}/>
    <ReviewCard picture={house}/>
    </Carousel>
  );
}
