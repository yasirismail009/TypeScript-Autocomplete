import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";
import Drawer from "./Drawer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/Bg.module.css";

// Assets import
import PdaLogo from "../../Assets/pda_logo.svg";
import PligenceLogo from "../../Assets/pligence_logo.svg";

export default function MainNavbar() {
  const router = useRouter();

  return (
    <div
      className={`${styles.navbar} w-full lg:px-20 lg:py-4 md:px-0 sm:px-10 px-0 md:py-0 sm:py-0 py-0  lg:shadow-none`}
      position="static"
    >
      <Toolbar className="w-full">
        <Grid
          container
          spacing={8}
          className="w-full items-center justify-between "
        >
          <Grid item lg={4} xs={7} className="w-full">
            {" "}
            {router.pathname === "/" ? (
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <Image src={PdaLogo} alt="Privacy Defender App" width="250" />
              </LinkS>
            ) : (
              <Link href="/">
                <Image src={PdaLogo} alt="Privacy Defender App" width="250" />
              </Link>
            )}
          </Grid>

          <Grid
            item
            lg={6}
            xs={0}
            className="w-full flex  justify-between items-center p-0"
          >
            {router.pathname === "/" ? (
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-0}
              >
                <p
                  className="cursor-pointer font-bold lg:text-base md:text-base lg:block  sm:hidden hidden "
                  style={{ color: "#173371" }}
                >
                  Home
                </p>
              </LinkS>
            ) : (
              <Link href="/">
                <p
                  className="cursor-pointer font-bold lg:text-base md:text-base  lg:block  sm:hidden hidden "
                  style={{ color: "#173371" }}
                >
                  Home
                </p>
              </Link>
            )}

            {router.pathname === "/" ? (
              <LinkS
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                <p
                  className="cursor-pointer lg:text-base md:text-base text-base font-bold lg:block  sm:hidden hidden"
                  style={{ color: "#173371" }}
                >
                  Services
                </p>
              </LinkS>
            ) : null}

            {router.pathname === "/" ? (
              <LinkS
                to="pricing"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50}
              >
                <p
                  className="cursor-pointer lg:text-base md:text-base  font-bold lg:block  sm:hidden hidden"
                  style={{ color: "#173371" }}
                >
                  Pricing
                </p>
              </LinkS>
            ) : (
              <LinkS
                to="pricing"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                <p
                  className="cursor-pointer lg:text-base md:text-base  font-bold lg:block  sm:hidden hidden"
                  style={{ color: "#173371" }}
                >
                  Pricing
                </p>
              </LinkS>
            )}
            {router.pathname === "/" ? (
              <Link href="/app_guide">
                <p
                  className="cursor-pointer lg:text-base md:text-base  font-bold lg:block  sm:hidden hidden"
                  style={{ color: "#173371" }}
                >
                  App Guide
                </p>
              </Link>
            ) : router.pathname === "/app_guide" ? null : (
              <Link href="/app_guide">
                <p
                  className="cursor-pointer lg:text-base md:text-base  font-bold lg:block  sm:hidden hidden"
                  style={{ color: "#173371" }}
                >
                  App Guide
                </p>
              </Link>
            )}
            {router.pathname === "/" ? (
              <LinkS
                to="security_news"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50}
              >
                <p
                  className="cursor-pointer text-white lg:text-base md:text-base  font-bold lg:block  sm:hidden hidden"
                  style={{ color: "#173371" }}
                >
                  Security News
                </p>
              </LinkS>
            ) : (
              <LinkS
                to="security_news"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50}
              >
                <p
                  className="cursor-pointer text-white lg:text-base md:text-base  font-semibold lg:block  sm:hidden hidden"
                  style={{ color: "#173371" }}
                >
                  Security News
                </p>
              </LinkS>
            )}

            <LinkS
              to="feedback"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-300}
            >
              <div
                variant="contained"
                className="cursor-pointer font-bold text-sm px-4 py-2 text-primary-main bg-primary-dark rounded lg:block  sm:hidden hidden"
              >
                Feedback
              </div>
            </LinkS>
          </Grid>
          <Grid item lg={2} xs={0}>
            <div className="w-full flex justify-center">
              <Image
                src={PligenceLogo}
                alt="Pligence"
                width="130"
                className="lg:block  sm:hidden hidden"
              />
            </div>
          </Grid>
        </Grid>
        <Drawer />
      </Toolbar>
    </div>
  );
}
