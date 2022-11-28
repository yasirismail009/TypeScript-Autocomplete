import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ServiceCard from "./serviceCard";
import { ServicesData } from "../../Store/data";
import clsx from "clsx";

export default function Services() {
  const [isActive, setIsActive] = useState("android");
  const [ServiceData, setServiceData] = useState([]);

  const handleClick = (device) => {
    if (device === "android") {
      setServiceData(ServicesData.android);
      setIsActive("android");
    } else {
      setServiceData(ServicesData.ios);
      setIsActive("ios");
    }
  };
  useEffect(() => {
    setServiceData(ServicesData.android);
  }, []);
  return (
    <div
      className="w-full h-full bg-primary-dark lg:p-24 sm:p-4 p-4"
      id="services"
    >
      <div className="w-72 lg:mb-16 sm:mb-8 mb-8 ml-8  lg:pt-0 sm:pt-16 pt-16">
        <ul className="grid grid-flow-col text-center  bg-primary-card rounded-full p-1 ">
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
                  ? "bg-primary-main  text-primary-dark"
                  : "text-primary-main"
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
                  ? "bg-primary-main  text-primary-dark"
                  : "text-primary-main"
              )}
            >
              IOS
            </p>
          </li>
        </ul>
      </div>
      <div>
        <p className="lg:text-4xl sm:text-xl text-xl font-bold text-primary-main lg:ml-8 sm:ml-0 ml-0 mb-2">
          What Services Do We Offer in app?
        </p>
        <p className="lg:text-2xl sm:text-base text-base font-medium text-primary-text lg:ml-16 sm:ml-0 ml-0  lg:mb-16">
          Our services are defined by quality and commitment.
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-full bg-primary-dark ">
        <Grid container className="w-full items-center justify-between ">
          {ServiceData?.map((val) => (
            <Grid item lg={3} xs={12}>
              <ServiceCard AndroidData={val} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
