import React from "react";
import AppGuideData from "../Components/AppGuide/index";
import Navbar from "../Components/Navbar/Navbar";
import Pricing from "../Components/Pricing/index";
import FeedbackModule from "../Components/Feedback/index";
import News from "../Components/News/index";

export default function AppGuide() {
  return (
    <div className="w-full bg-primary-main">
      <div className="w-full lg:p-20 sm:p-0 p-0 lg:pt-0 sm:pt-20 pt-20 bg-primary-main">
        <Navbar />
      </div>
      <AppGuideData />
      <Pricing />
      <FeedbackModule />
      <News />
    </div>
  );
}
