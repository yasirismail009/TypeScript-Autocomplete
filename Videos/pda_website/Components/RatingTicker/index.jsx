import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RatingCards from "./ratingCard";
import { ReviewsData } from "../../Store/data";

export default function SimpleSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 350 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full h-full lg:mb-28 sm:mb-28 mb-28 ">
      <Carousel responsive={responsive}>
        {ReviewsData?.map((val) => (
          <RatingCards data={val} />
        ))}
      </Carousel>
    </div>
  );
}
