import FeatureCard from "./FeatureCard";
import rectangle from "../images/feature/rectangle.png";
import one from "../images/feature/one.png";
import two from "../images/feature/two.png";
import three from "../images/feature/three.png";
import mona from "../images/feature/mona.png"
import lisa from "../images/feature/lisa.png"
import robert from "../images/feature/robert.png"
import deniro from "../images/feature/deniro.png"

export default function FeaturedCards() {
  return (
    <div className="w-[1291px] h-[585px] ml-[149px] mt-[25px] flex flex-row">
      <FeatureCard
        text="Roselands House"
        price="$35,000.000"
        picture={rectangle}
        name="Dianne Russell"
        city="Manchester, Kentuky"
        icon={mona}
      />
      <FeatureCard
        text="Woodlandside"
        price="$20,000.000"
        picture={one}
        name="Robert Fox"
        city="Dr. San Jose, South Dakota"
        icon={robert}
      />
      <FeatureCard
        text="The Old Ligthouse"
        price="$44,000.000"
        picture={two}
        name="Ronald Richards"
        city="Santa Ana, Illinois"
        icon={deniro}
      />
      <FeatureCard
        text="Cosmo's House"
        price="$22,000.000"
        picture={three}
        name="Jenny Wilson"
        city="Preston Rd. Inglewood, Maine 98380"
        icon={lisa}
      />
    </div>
  );
}
