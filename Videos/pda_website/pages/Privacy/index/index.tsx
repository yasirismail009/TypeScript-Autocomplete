import Policy from "../../../Components/PrivacyPolicy/privacy";
import Navbar from "../../../Components/Navbar/LegalNavbar";
import Footer from "../../../Components/Footer/Footer";
import Head from "next/head";

export default function Privacypolicy() {
  return (
    <div>
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
      <Navbar />
      <Policy />
      <Footer />
    </div>
  );
}
