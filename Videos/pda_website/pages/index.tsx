import type { NextPage } from "next";
import LandingPage from "../Layouts/HomePage";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";

const Home: NextPage = () => {
  const [showCookies, setShowCookies] = useState("hidden");
  const CookiesAcceptFunction = (Data: boolean) => {
    localStorage.setItem("cookies", Data);
  };
  useEffect(() => {
    const AlreadyAccept = localStorage.getItem("cookies");
    if (AlreadyAccept) {
      setShowCookies("hidden");
    } else {
      setShowCookies("show");
    }
  }, []);
  return (
    <div className="w-full">
      <Head>
        <title>Privacy Defender App</title>
        <meta
          name="description"
          content="Pligence provides secure online use as a Security and Privacy Solutoion Provider. Well known for the Privancy Defender Application. To protect users from online dangers & keeps user information safe and secure."
        />
        <link rel="icon" href="/favicon1.ico" />
        <meta
          name="keywords"
          content="Android Security, Mobile Firewall,Security, Privacy, Privacy Defener, moiblesecurity, mobile threat detection, Mobile Threat Prevention, threat detection, moible protection, security vault, App lock, password manager, Firewall, Mobile App Reputation, Safe Browsing, Vulnerability Management, SIEM, SOAR, Internet security, Security Assessment, Mobile Security Assessment app for privacy
            ,
            android security,
            surveillance,
            mobile security,
            privacy ,
            ad block,
            app lock,
            anti spyware,
            anti malware,
            security apps,
            antivirus  ,     
            anti spy    ,     
            mic block,
            camera block,
            android security app,
            best antivirus for android,
            android antivirus,
            best free antivirus for android,
            free antivirus for android,
            best antivirus for iphone,
            iphone antivirus free,
            best iphone security app,
            free antivirus app,
            antivirus for phones,
            anti spyware android,
            anti spyware ios,
            "
        />
      </Head>
      <div>
        <LandingPage />
      </div>
      <Footer />
      <CookieConsent
        onAccept={(acceptedByScrolling) => {
          CookiesAcceptFunction(acceptedByScrolling);
          if (acceptedByScrolling) {
            setShowCookies("hidden");
          } else {
            setShowCookies("hidden");
          }
        }}
        visible={showCookies}
        debug={true}
        style={{
          background: "#f1f1f1",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          color: "#173371",
          fontWeight: "500",
        }}
        buttonStyle={{
          borderRadius: "5px",
          color: "#fff",
          background: "#173371",
          fontWeight: "600",
        }}
        location="bottom"
        cookieName="myAwesomeCookieName2"
        expires={10}
      >
        This site use Cookies. See our{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "#173371",
            fontWeight: "bold",
          }}
          href="/privacypolicy"
        >
          Privacy & Legal Terms
        </Link>
      </CookieConsent>
    </div>
  );
};

export default Home;
