import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { PricingData } from "../../Store/data";
import clsx from "clsx";
import Image from "next/image";

export default function PricingChild() {
  const [isActive, setIsActive] = useState("android");
  const [isActiveButton, setIsActiveButton] = useState("free");
  const [mapData, setMapData] = useState([]);
  const AndroidStore =
    "https://play.google.com/store/apps/details?id=com.pligence.privacydefender";
  const AppleStore =
    "https://apps.apple.com/us/app/privacy-defender/id1588734793";
  const RadioButtonClick = (e) => {
    setIsActiveButton(e);
    // SetDataMap();
  };

  const handleClick = (device) => {
    if (device === "android") {
      setIsActive("android");
      setIsActiveButton("free");
      setMapData(PricingData.android?.free);
    } else {
      setIsActive("ios");
      setIsActiveButton("free");
      setMapData(PricingData.ios?.free);
    }
  };
  useEffect(() => {
    setMapData(PricingData.android?.free);
  }, []);
  useEffect(() => {
    if (isActive === "android") {
      if (isActiveButton === "free") {
        setMapData(PricingData.android?.free);
      } else {
        setMapData(PricingData.android?.paid);
      }
    } else {
      if (isActiveButton === "free") {
        setMapData(PricingData.ios?.free);
      } else {
        setMapData(PricingData.ios?.paid);
      }
    }
  }, [isActiveButton]);
  return (
    <div className="w-full h-full bg-primary-main lg:p-24 sm:p-4 p-4">
      <div className="lg:my-0 sm:my-8 my-8 ">
        <p className="lg:text-4xl sm:text-xl text-xl font-bold text-primary-dark lg:ml-8 sm:ml-0 ml-0 mb-2">
          Choose Our Plan?
        </p>
        <p className="lg:text-2xl sm:text-base text-base font-medium text-primary-dark lg:ml-16 sm:ml-0 ml-0  lg:mb-16">
          Our services are defined by quality and commitment.
        </p>
      </div>
      <div className="w-full shadow-2xl rounded-3xl lg:py-8 sm:py-0 py-0 lg:px-16 sm:px-6 px-6">
        <div className="w-72 lg:mb-8 sm:mb-8 mb-8  lg:pt-0 sm:pt-4 pt-4">
          <ul className="grid grid-flow-col text-center  bg-[#ECECEC] rounded-full p-1 ">
            <li
              className="cursor-pointer"
              onClick={() => {
                handleClick("android");
              }}
            >
              <p
                className={clsx(
                  "cursor-pointer flex justify-center  rounded-full lg:py-6 sm:py-4 py-4 font-bold",
                  isActive === "android"
                    ? "bg-primary-dark  text-primary-main"
                    : "text-primary-dark"
                )}
              >
                Android
              </p>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                handleClick("ios");
              }}
            >
              <p
                className={clsx(
                  "cursor-pointer flex justify-center  rounded-full lg:py-6 sm:py-4 py-4 font-bold",
                  isActive === "ios"
                    ? "bg-primary-dark  text-primary-main"
                    : "text-primary-dark"
                )}
              >
                IOS
              </p>
            </li>
          </ul>
        </div>
        <div className=" w-full h-full bg-primary-main ">
          <Grid container spacing={2}>
            <Grid item lg={5} xs={12}>
              <p className="text-primary-dark text-lg font-bold lg:mb-0 sm:mb-2 mb-2">
                Features
              </p>
              {mapData.map((val, key) => (
                <div className="flex items-center">
                  <div className="w-6">
                    <Image src={val.img} alt={val.title} />
                  </div>
                  <div className="w-72 mb-2">
                    <p className="mx-4 text-lg font-bold">{val.title}</p>
                  </div>
                  <div className="w-8">
                    <Image src={val.pay} alt={val.title} />
                  </div>
                </div>
              ))}
            </Grid>
            <Grid item lg={7} xs={12}>
              <div className="lg:mt-0 sm:mt-20 mt-20">
                <div
                  className={clsx(
                    "cursor-pointer flex flex-wrap justify-between items-center border-4 border-primary-dark  p-4 px-8 rounded-2xl mb-8",
                    isActiveButton === "free"
                      ? "bg-primary-dark"
                      : "bg-primary-main"
                  )}
                >
                  <input
                    checked={isActiveButton === "free" ? true : false}
                    id="free"
                    type="radio"
                    value=""
                    onClick={(e) => {
                      RadioButtonClick("free");
                    }}
                    className="w-8 h-8 text-[#ffc200] bg-gray-100 border-gray-300 focus:ring-[#ffc200] dark:focus:ring-[#ffc200] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <p
                    for="free"
                    className={clsx(
                      "lg:ml-8 lg:text-3xl sm:text-2xl text-2xl font-semibold ",
                      isActiveButton === "free"
                        ? "text-primary-main dark:text-primary-main"
                        : "text-primary-dark dark:text-primary-dark"
                    )}
                  >
                    Free
                    <p className="lg:text-base sm:text-xs text-xs  font-medium">
                      <span className="text-[#ffc200]">7 features </span>you can
                      enjoy
                    </p>
                    <p className="lg:w-28 sm:w-24 w-24 lg:text-base sm:text-xs text-xs font-semibold bg-primary-card text-primary-main p-2 rounded-lg mt-2 text-center lg:mb-0 mb-2 mb-2">
                      Save 100%
                    </p>
                  </p>
                  <p
                    className={clsx(
                      "ml-16 lg:text-3xl sm:text-3xl text-3xl font-semibold lg:mb-0 mb-2 mb-2",
                      isActiveButton === "free"
                        ? "text-primary-main"
                        : "text-primary-dark"
                    )}
                  >
                    0.00$/
                    <span className="lg:text-xl sm:text-xs text-xs">
                      life time
                    </span>
                  </p>
                  <a
                    href={isActive === "android" ? AndroidStore : AppleStore}
                    target="_blank"
                  >
                    <p
                      className={clsx(
                        "ml-16  lg:px-8 sm:px-4 px-4 lg:py-4 sm:py-2 py-2  lg:rounded-xl sm:rounded-lg rounded-lg lg:text-base sm:text-xs text-xs font-bold",
                        isActiveButton === "free"
                          ? "bg-[#ffc200] text-primary-dark"
                          : " bg-primary-dark text-primary-main"
                      )}
                    >
                      Get Started
                    </p>
                  </a>
                </div>
                <div
                  className={clsx(
                    "cursor-pointer flex flex-wrap justify-between items-center border-4 border-primary-dark  p-4 px-8 rounded-2xl mb-8",
                    isActiveButton === "monthly"
                      ? "bg-primary-dark"
                      : "bg-primary-main"
                  )}
                >
                  <input
                    checked={isActiveButton === "monthly" ? true : false}
                    id="monthly"
                    type="radio"
                    value=""
                    onClick={(e) => {
                      RadioButtonClick("monthly");
                    }}
                    className="w-8 h-8 text-[#ffc200] bg-gray-100 border-gray-300 focus:ring-[#ffc200] dark:focus:ring-[#ffc200] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <p
                    for="monthly"
                    className={clsx(
                      "lg:ml-8 lg:text-3xl sm:text-2xl text-2xl font-semibold ",
                      isActiveButton === "monthly"
                        ? "text-primary-main dark:text-primary-main"
                        : "text-primary-dark dark:text-primary-dark"
                    )}
                  >
                    Monthly
                    <p className="lg:text-base sm:text-xs text-xs  font-medium">
                      <span className="text-[#ffc200]">14 features </span>you
                      can enjoy
                    </p>
                    <p className="lg:w-28 sm:w-24 w-24 lg:text-base sm:text-xs text-xs font-semibold bg-primary-card text-primary-main p-2 rounded-lg mt-2 text-center lg:mb-0 mb-2 mb-2">
                      Save 100%
                    </p>
                  </p>
                  <p
                    className={clsx(
                      "ml-16 lg:text-3xl sm:text-3xl text-3xl font-semibold lg:mb-0 mb-2 mb-2",
                      isActiveButton === "monthly"
                        ? "text-primary-main"
                        : "text-primary-dark"
                    )}
                  >
                    1.99$/<span className="text-xl">month</span>
                  </p>
                  <a
                    href={isActive === "android" ? AndroidStore : AppleStore}
                    target="_blank"
                  >
                    <p
                      className={clsx(
                        "ml-16  lg:px-8 sm:px-4 px-4 lg:py-4 sm:py-2 py-2  lg:rounded-xl sm:rounded-lg rounded-lg lg:text-base sm:text-xs text-xs font-bold",
                        isActiveButton === "monthly"
                          ? "bg-[#ffc200] text-primary-dark"
                          : " bg-primary-dark text-primary-main"
                      )}
                    >
                      Get Started
                    </p>
                  </a>
                </div>
                <div
                  className={clsx(
                    "cursor-pointer flex flex-wrap justify-between items-center border-4 border-primary-dark  p-4 px-8 rounded-2xl mb-8",
                    isActiveButton === "yearly"
                      ? "bg-primary-dark"
                      : "bg-primary-main"
                  )}
                >
                  <input
                    checked={isActiveButton === "yearly" ? true : false}
                    id="yearly"
                    type="radio"
                    value=""
                    onClick={(e) => {
                      RadioButtonClick("yearly");
                    }}
                    className="w-8 h-8 text-[#ffc200] bg-gray-100 border-gray-300 focus:ring-[#ffc200] dark:focus:ring-[#ffc200] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <p
                    for="yearly"
                    className={clsx(
                      "lg:ml-8 lg:text-3xl sm:text-2xl text-2xl font-semibold ",
                      isActiveButton === "yearly"
                        ? "text-primary-main dark:text-primary-main"
                        : "text-primary-dark dark:text-primary-dark"
                    )}
                  >
                    Yearly
                    <p className="lg:text-base sm:text-xs text-xs   font-medium">
                      <span className="text-[#ffc200]">14 features </span>you
                      can enjoy
                    </p>
                    <p className="lg:w-28 sm:w-24 w-24 lg:text-base sm:text-xs text-xs font-semibold bg-primary-card text-primary-main p-2 rounded-lg mt-2 text-center lg:mb-0 mb-2 mb-2">
                      Save 100%
                    </p>
                  </p>
                  <p
                    className={clsx(
                      "lg:ml-16 sm:ml-12 ml-12 lg:text-3xl sm:text-3xl text-3xl font-semibold lg:mb-0 mb-2 mb-2",
                      isActiveButton === "yearly"
                        ? "text-primary-main"
                        : "text-primary-dark"
                    )}
                  >
                    19.99$/<span className="text-xl">year</span>
                  </p>
                  <a
                    href={isActive === "android" ? AndroidStore : AppleStore}
                    target="_blank"
                  >
                    <p
                      className={clsx(
                        "lg:ml-16 sm:ml-12 ml-12  lg:px-8 sm:px-4 px-4 lg:py-4 sm:py-2 py-2  lg:rounded-xl sm:rounded-lg rounded-lg lg:text-base sm:text-xs text-xs font-bold",
                        isActiveButton === "yearly"
                          ? "bg-[#ffc200] text-primary-dark"
                          : " bg-primary-dark text-primary-main"
                      )}
                    >
                      Get Started
                    </p>
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
