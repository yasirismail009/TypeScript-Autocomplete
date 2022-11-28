import React from "react";
import YoutubeEmbed from "./youtube";
import YoutubeEmbed2 from "./youtube2";
import { AppGuideData } from "../../Store/data";
import clsx from "clsx";
export default function Cards() {
  return (
    <div className="w-full h-full flex flex-col bg-primary-main">
      {AppGuideData.map((val) => (
        <div
          className={clsx(
            "lg:px-32 sm:px-4 px-4 lg:py-20 sm:py-4 py-4 shadow-2xl rounded-2xl lg:m-8 sm:m-4 m-4",
            val.mode === "dark"
              ? "bg-primary-dark text-primary-main"
              : "bg-primary-main text-primary-dark"
          )}
        >
          <p className="lg:text-3xl sm:text-lg text-lg  font-bold mb-2">
            {val.title}
          </p>
          <p className="lg:text-lg sm:text-sm text-sm font-medium mb-8">
            {val.details}
          </p>
          <div className="flex justify-center items-center">
            <div className="lg:block sm:hidden hidden">
              <YoutubeEmbed embedId={val.youtube} />
            </div>
            <div className="lg:hidden sm:block block">
              <YoutubeEmbed2 embedId={val.youtube} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
