import { Carousel } from "@material-tailwind/react";
import ReviewCard from "./ReviewCard";
import best from "../images/review/best.png";
import hounter from "../images/review/hounter.png";
import house from "../images/review/house.png";
import robert from "../images/review/robert.png"

export default function Car() {
  return (
    <Carousel className="rounded-lg">
      <ReviewCard picture={best} />
      <ReviewCard picture={hounter} />
      <ReviewCard
        picture={house}
        text="My house sold out fast!"
        review="I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!"
        name="Courtney Henry"
        position="CEO Andarafish"
        icon={robert}
        score="24.3"
      />
    </Carousel>
  );
}
