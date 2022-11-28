import SecurityNews from "../../Assets/news_feed.svg";
import Image from "next/image";
import { Grid } from "@mui/material";

export default function News() {
  return (
    <div className="lg:px-40 sm:px-8 px-8 lg:py-0 sm:py-20 py-20">
      <Grid container spacing={2} className="justify-center items-center">
        <Grid item lg={6} xs={12}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="lg:text-4xl sm:text-xl text-xl font-bold text-primary-dark lg:ml-8 sm:ml-0 ml-0 mb-2">
                Security News
              </p>
              <p className="lg:text-2xl sm:text-xl text-xl font-semibold text-primary-dark lg:ml-8 sm:ml-0 ml-0 mb-2">
                Stay alert by latest threat attcks
              </p>
              <p className="lg:text-xl sm:text-base text-base font-medium text-primary-dark lg:ml-16 sm:ml-0 ml-0  lg:mb-8">
                Pligence threats is one of the most sought-after employers in
                the industry. Apply now and become a part of the Techvista
                family.
              </p>
              <div className="ml-16 w-60 flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-8 px-8 lg:py-2  sm:py-2 py-2 lg:mb-0 sm:mb-8 mb-8 text-primary-main bg-primary-dark hover:bg-primary-card   rounded-xl shadow-2xl">
                <p className="lg:text-lg sm:text-base text-base font-semibold ml-4">
                  Explore More
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <div className="flex justify-center items-center lg:px-32 sm:px-4 px-4 ">
            <Image src={SecurityNews} alt="Privacy Lock" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
