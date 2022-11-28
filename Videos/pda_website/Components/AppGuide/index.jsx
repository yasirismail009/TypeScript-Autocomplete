import React from "react";
import ComponentCard from "./Cards";
export default function AppGuide() {
  return (
    <div
      id="app_guide"
      className="w-full h-full lg:mb-40 sm:px-8 px-8 bg-primary-main"
    >
      <div className="w-full h-full lg:flex md:flex flex-col sm:block block lg:pt-16 sm:mt-0 mt-0 lg:px-40 bg-primary-main">
        <p className="text-4xl font-bold text-primary-dark text-center lg:pt-20 sm:mt-4 mt-4 bg-primary-main">
          App Guide
        </p>
        <ComponentCard />
      </div>
    </div>
  );
}
