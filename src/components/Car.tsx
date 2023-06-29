import { Carousel } from "@material-tailwind/react";
import ReviewCard from "./ReviewCard";
import best from "../images/review/best.png";
import hounter from "../images/review/hounter.png";
import house from "../images/review/house.png";
import robert from "../images/feature/robert.png";
import mona from "../images/feature/mona.png";
import lisa from "../images/feature/lisa.png";

export default function Car() {
  return (
    <Carousel className="rounded-lg">
      <ReviewCard
        picture={best}
        text="Best! I got the house I wanted through Hounter"
        review="Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want."
        name="Dianne Russell"
        position="Manager Director"
        icon={mona}
        score="4.6"
      />
      <ReviewCard
        picture={hounter}
        text="Through the Hounter, I can get a house for my self"
        review="By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!"
        name="Esther Howard"
        position="Head of Marketing"
        icon={lisa}
        score="4.6"
      />
      <ReviewCard
        picture={house}
        text="My house sold out fast!"
        review="I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!"
        name="Courtney Henry"
        position="CEO Andarafish"
        icon={robert}
        score="4.3"
      />
    </Carousel>
  );
}
