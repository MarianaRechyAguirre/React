import FeaturedCards from "./FeaturedCards";
import FeaturedNav from "./FeaturedNav";

export default function SectionFeatured() {
    return (
      <div className="w-full h-[833px]">
        <div className="w-full h-[702px] mt-[133px]">
        <FeaturedNav />
        <FeaturedCards />
        </div>
      </div>
    );
  }
  