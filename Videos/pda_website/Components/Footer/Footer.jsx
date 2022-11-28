import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import { useRouter } from "next/router";
import Link from "next/link";
import PdaWhite from "../../Assets/pda_logo_white.svg";
import PligenceWhite from "../../Assets/pligence_logo_white.svg";
import Location from "../../Assets/location.svg";
import Mail from "../../Assets/email.svg";
import Facebook from "../../Assets/facebook.svg";
import Instagram from "../../Assets/instagram.svg";
import Youtube from "../../Assets/youtube.svg";
import Linkdin from "../../Assets/linkedin.svg";
import Twitter from "../../Assets/Twitter.svg";

function Copyright() {
  return (
    <p variant="body" className="font-semibold" color="#173371">
      {"Copyright © "}
      <a color="#173371" className="font-semibold" href="https://pligence.com/">
        Pligence
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

export default function StickyFooter() {
  const router = useRouter();
  const [state, setState] = React.useState(true);
  const [scrollNav, setscrollNav] = useState(false);
  const NavScroll = () => {
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavScroll);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-primary-dark text-white pt-12">
      <div className="lg:px-40 px-10">
        <footer className="w-full">
          <div className="w-full flex flex-wrap justify-between items-center lg:mb-16 sm:mb-8 mb-8">
            <div>
              <p className="font-semibold mb-1">Powered by</p>
              <Image src={PligenceWhite} alt="pligence" className="m-3" />
            </div>
            <Image src={PdaWhite} alt="Pda" className="m-3" />
          </div>
          <Grid container spacing={4}>
            <Grid item lg={3} md={6} sm={6}>
              <div>
                <p className="text-lg text-white">
                  <b>Quick Links</b>
                </p>
                <div className="flex flex-row mt-2">
                  {router.pathname === "/" ? (
                    <LinkS
                      to="products"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-50}
                    >
                      <p className="cursor-pointer font-medium ">
                        <p> Products</p>
                      </p>
                    </LinkS>
                  ) : (
                    <Link href="/">
                      <p className="cursor-pointer font-medium ">
                        <p> Home</p>
                      </p>
                    </Link>
                  )}
                </div>

                <div className="flex flex-row mt-2">
                  {router.pathname === "/privacypolicy" ||
                  router.pathname === "/termsconditions" ||
                  router.pathname === "/License" ||
                  router.pathname === "/cookiespolicy" ? null : (
                    <LinkS
                      to="feedback"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-290}
                    >
                      <p className="cursor-pointer font-medium">
                        <p>Feedback</p>
                      </p>
                    </LinkS>
                  )}
                </div>
                <div className="flex flex-row mt-2">
                  <p className="cursor-pointer font-medium">
                    <Link href="/privacypolicy">
                      <p>Privacy & Legal</p>
                    </Link>
                  </p>
                </div>
                <div className="flex flex-row mt-2">
                  <p className="cursor-pointer font-medium">
                    <Link href="/termsconditions">
                      <p>Terms & Conditions</p>
                    </Link>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <div>
                <p className="text-lg ">
                  <b>Video</b>
                </p>

                <div className="flex flex-row mt-2 item-center cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://www.youtube.com/watch?v=HfbvjjBZfLc"
                      target="_blank"
                      aria-label="Firewall"
                    >
                      <p>Mobile Firewall</p>{" "}
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://www.youtube.com/watch?v=HfbvjjBZfLc"
                      target="_blank"
                      aria-label="Web Guard"
                    >
                      <p>Web Guard</p>{" "}
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://www.youtube.com/watch?v=CHXhkfBW6Rw"
                      target="_blank"
                      aria-label="Surveillance Protection"
                    >
                      <p>Surveillance Protection</p>{" "}
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 font-medium">
                  <p>
                    <a
                      href="https://www.youtube.com/watch?v=Sv0WxbHKCD0"
                      target="_blank"
                      aria-label="App Reputation"
                    >
                      <p>App Reputation</p>
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://www.youtube.com/watch?v=zL0liUNh81w"
                      target="_blank"
                      aria-label="App Lock"
                    >
                      <p>App Lock</p>
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://www.youtube.com/watch?v=zL0liUNh81w"
                      target="_blank"
                      aria-label="Vault"
                    >
                      <p>Secure Vault</p>
                    </a>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <div>
                <p className="text-lg ">
                  <b>Our Products</b>
                </p>
                <div className="flex flex-row mt-2 item-center">
                  <Link href="/">
                    <p className="cursor-pointer font-medium">
                      <p>Privacy Defender Application</p>
                    </p>
                  </Link>
                </div>
                <div className="flex flex-row mt-2">
                  <a
                    href="https://pligence.com/threat-intelligence-platform"
                    target="_blank"
                  >
                    <p className="cursor-pointer font-medium">
                      <p>
                        Manage Threat Intelligence <br />& Assessment Service
                      </p>
                    </p>
                  </a>
                </div>
                <div className="flex flex-row mt-2">
                  <a href="https://grclens.com/" target="_blank">
                    <p className="cursor-pointer font-medium">
                      <p>GRC Lens SaaS Solution</p>
                    </p>
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <div>
                <p className="text-lg ">
                  <b>Our Services</b>
                </p>
                <div className="flex flex-row mt-2 item-center cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://pligence.com/services"
                      target="_blank"
                      aria-label="Services"
                    >
                      <p>Security Incident Management Service</p>
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://pligence.com/services"
                      target="_blank"
                      aria-label="Services"
                    >
                      <p>Security Threat Intelligence Service</p>
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://pligence.com/services"
                      target="_blank"
                      aria-label="Services"
                    >
                      <p>Vulnerability Management Service</p>
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 font-medium">
                  <p>
                    <a
                      href="https://pligence.com/services"
                      target="_blank"
                      aria-label="Services"
                    >
                      <p>Dark Web Monitoring and Advisory Service </p>
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://pligence.com/services"
                      target="_blank"
                      aria-label="Services"
                    >
                      <p>Malware Detection and Analysis Service</p>
                    </a>
                  </p>
                </div>
                <div className="flex flex-row mt-2 cursor-pointer font-medium">
                  <p>
                    <a
                      href="https://pligence.com/services"
                      target="_blank"
                      aria-label="Services"
                    >
                      <p>Mobile Security Assessment Service </p>
                    </a>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="w-full flex flex-row flex-wrap justify-between items-center lg:py-2 sm:py-12 py-12">
            <div className="flex flex-row items-center lg:mb-0 sm:mb-4 mb-4">
              <Image src={Location} alt="location" />
              <p className="ml-1">Wilmington, Delaware, The United States</p>
            </div>
            <div className="flex flex-row items-center  lg:mb-0 sm:mb-4 mb-4">
              <Image src={Mail} alt="location" />
              <p className="ml-1">info@pligence.com</p>
            </div>
            <div className="flex flex-row items-center justify-between lg:p-2">
              <a href="https://www.facebook.com/pligence" target="_blank">
                <Image src={Facebook} alt="Facebook" className="m-2" />
              </a>
              <a
                href="https://www.instagram.com/pligence.official/"
                target="_blank"
              >
                <Image src={Instagram} alt="Instagram" className="m-2" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCaovzTb9Yu4S-_P2BH4ukHg"
                target="_blank"
              >
                <Image src={Youtube} alt="Youtube" className="m-2" />
              </a>
              <a
                href="https://www.linkedin.com/company/pligence"
                target="_blank"
              >
                <Image src={Linkdin} alt="Linkedin" className="m-2" />
              </a>
              <a href="https://twitter.com/pligenceltd" target="_blank">
                <Image src={Twitter} alt="Twitter" className="m-2" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:py-6">
            <Copyright />
          </div>
        </footer>
      </div>
    </div>
  );
}
