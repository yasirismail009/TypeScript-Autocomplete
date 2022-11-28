import { Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import Thumbnil from "../../Assets/OtherProducts.png";
import Download from "../../Assets/download_dark.svg";
import star from "../../Assets/star_dark.svg";
import PlayStoreIcon from "../../Assets/play_store.svg";

export default function Design() {
  return (
    <div className="lg:py-0 sm:py-0 py-0">
      <Grid container spacing={2} className="justify-center items-center">
        <Grid item lg={6} xs={12}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="lg:text-4xl sm:text-xl text-xl font-bold text-primary-main lg:ml-8 sm:ml-0 ml-0 mb-2">
                Privacy Lock App
              </p>
              <p className="lg:text-xl sm:text-base text-base font-medium text-primary-text lg:ml-16 sm:ml-0 ml-0  lg:mb-8">
                Fast App Lock to protect Apps with passcode, fingerprint, and
                face recognition. Privacy Lock by Pligence protects your privacy
                by locking your Mobile Apps from kids, family, friends, and
                others. Privacy Lock can be used to lock Facebook, WhatsApp,
                Snapchat, Messenger, and any other Apps you choose.
              </p>
              <div className="flex flex-wrap items-center lg:ml-16 sm:ml-0 ml-0 lg:mt-0 sm:mt-8 mt-8">
                <div className="lg:mb-0 sm:mb-8 mb-8">
                  <div className="flex flex-row lg:ml-4 sm:ml-0 ml-0">
                    <Image src={Download} alt="downloads" />
                    <p className="text-[#ffc200] lg:text-3xl sm:text-xl text-xl font-bold ml-4">
                      5K+
                    </p>
                    <p className="text-primary-main font-bold lg:text-base sm:text-xs text-xs mt-4 ml-2">
                      Downloads
                    </p>
                  </div>
                </div>
                <div className="ml-8 lg:mb-0 sm:mb-8 mb-8">
                  <div className="flex flex-row lg:ml-4 sm:ml-0 ml-0">
                    <Image src={star} alt="downloads" />
                    <p className="text-[#ffc200] lg:text-3xl sm:text-xl text-xl  font-bold ml-4">
                      4.9
                    </p>
                    <p className="text-primary-main font-bold lg:text-base sm:text-xs text-xs mt-4 ml-2">
                      Rating
                    </p>
                  </div>
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.pligence.privacyLock"
                  target="_blank"
                >
                  <div className="ml-12 w-52 flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-8 px-8 lg:py-2  sm:py-2 py-2 lg:mb-0 sm:mb-8 mb-8 text-primary-main bg-primary-card hover:bg-primary-dark   rounded-xl shadow-2xl">
                    <Image src={PlayStoreIcon} alt="Privacy Defender App" />
                    <p className="lg:text-lg sm:text-base text-base font-semibold ml-4">
                      Play Store
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <div className="flex justify-center items-center mb-12">
            <Image src={Thumbnil} alt="Privacy Lock" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
