import React from "react";
import YoutubeEmbed from "../AppGuide/youtube";
import YoutubeEmbed2 from "../AppGuide/youtube2";
import clsx from "clsx";
export default function MoreDetails(props) {
  const title = props.title;
  const des = props.des;
  const youtube = props.youtube;
  return (
    <div className="w-full h-full flex flex-col bg-primary-dark 0">
      <div className="lg:px-32 sm:px-4 px-4 lg:py-20 sm:py-4 py-4  lg:m-8  text-primary-main">
        <p className="lg:text-3xl sm:text-lg text-lg   font-bold mb-2">
          Want to know more about
          {title}?
        </p>
        <p className="lg:text-lg sm:text-sm text-sm font-medium mb-8">{des}</p>
        <div className="flex justify-center items-center">
          <div className="lg:block sm:hidden hidden">
            <YoutubeEmbed embedId={youtube} />
          </div>
          <div className="lg:hidden sm:block block">
            <YoutubeEmbed2 embedId={youtube} />
          </div>
        </div>
      </div>
    </div>
  );
}
