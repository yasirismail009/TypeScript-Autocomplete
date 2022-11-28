import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "tailwindcss/tailwind.css";
import PdaLogo from "../../Assets/pda_logo.svg";
import Pligence from "../../Assets/pligence_logo.svg";
import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";
import Drawer from "./LegalDrawer";
import { useRouter } from "next/router";
import styles from "../../styles/Bg.module.css";

export default function LegalNavbar() {
  const router = useRouter();

  return (
    <div>
      <Box sx={{ flexGrow: 1, boxShadow: "none" }}>
        <div
          className={`${styles.navbar} lw-full lg:px-20 lg:py-4 md:px-0 sm:px-10 px-0 md:py-0 sm:py-0 py-0  lg:shadow-none bg-primary-main text-primary-dark`}
          position="static"
        >
          <Toolbar className="w-full justify-between items-center">
            <div className="lg:w-auto full md:w-2/4 sm:w-full w-full lg:block md:block sm:flex flex sm:justify-center justify-between w-full items-center">
              <div className="lg:w-full md:w-3/4 sm:w-full w-2/4 lg:block md:block sm:flex flex sm:justify-center mt-2 sm:mt-0">
                {router.pathname === "/" ? (
                  <LinkS
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    <Image alt="Privacy Defender" src={PdaLogo} />
                  </LinkS>
                ) : (
                  <Link href="/">
                    <Image alt="Privacy Defender" src={PdaLogo} />
                  </Link>
                )}
              </div>
              <Drawer />
            </div>
            <div className="lg:flex lg:w-full md:w-full  lg:px-12 md:px-12  sm:px-0 md:flex  sm:hidden hidden justify-around items-center ">
              {router.pathname === "/privacypolicy" ? (
                <Link href="/privacypolicy">
                  <p className="cursor-pointer font-bold lg:text-lg md:text-base border-b-2 border-[#ffc200]">
                    Privacy Policy
                  </p>
                </Link>
              ) : (
                <Link href="/privacypolicy">
                  <p className="cursor-pointer font-bold lg:text-lg md:text-base">
                    Privacy Policy
                  </p>
                </Link>
              )}

              {router.pathname === "/termsconditions" ? (
                <Link href="/termsconditions">
                  <p className="cursor-pointer lg:text-lg md:text-base text-lg font-bold border-b-2 border-[#ffc200]">
                    Terms & Conditions
                  </p>
                </Link>
              ) : (
                <Link href="/termsconditions">
                  <p className="cursor-pointer lg:text-lg md:text-base text-lg font-bold">
                    Terms & Conditions
                  </p>
                </Link>
              )}

              {router.pathname === "/License" ? (
                <Link href="/License">
                  <p className="cursor-pointer lg:text-lg md:text-base  font-bold border-b-2 border-[#ffc200]">
                    License
                  </p>
                </Link>
              ) : (
                <Link href="/License">
                  <p className="cursor-pointer lg:text-lg md:text-base  font-bold">
                    License
                  </p>
                </Link>
              )}
              {router.pathname === "/cookiespolicy" ? (
                <Link href="/cookiespolicy">
                  <p className="cursor-pointer  lg:text-lg md:text-base  font-bold border-b-2 border-[#ffc200]">
                    Cookies Policy
                  </p>
                </Link>
              ) : (
                <Link href="/cookiespolicy">
                  <p className="cursor-pointer  lg:text-lg md:text-base  font-bold">
                    Cookies Policy
                  </p>
                </Link>
              )}
            </div>
            <div className="lg:w-auto md:w-1/4 lg:block md:block sm:hidden hidden">
              <Image src={Pligence} alt="pligence" />
            </div>
          </Toolbar>
        </div>
      </Box>
    </div>
  );
}
