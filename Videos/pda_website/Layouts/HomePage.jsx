import Navbar from "../Components/Navbar/Navbar";
import LandingPage from "../Components/Homepage/Landingpage";
import RatingsTickerData from "../Components/RatingTicker";
import Services from "../Components/Services/index";
import Pricing from "../Components/Pricing/index";
import OtherProduct from "../Components/OtherProduct/index";
import FeedbackModule from "../Components/Feedback/index";
import News from "../Components/News/index";

const Landing = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:p-20 sm:p-0 p-0 lg:pt-0 sm:pt-20 pt-20 bg-primary-main">
        <Navbar />
        <LandingPage />
        <p className="ml-8 text-primary-dark text-2xl font-bold text-center">
          Some of our users reviews
        </p>
        <RatingsTickerData />
      </div>
      <div className="pt-40">
        <Services />
      </div>
      <Pricing />
      <OtherProduct />
      <FeedbackModule />
      <News />
    </div>
  );
};

export default Landing;
