// imports for services

import AdsBloker from "../Assets/ads_blocker.svg";
import MaliciousTraffic from "../Assets/malicious_traffic.svg";
import UsageAccess from "../Assets/usage_access.svg";
import TrafficControl from "../Assets/traffic_control.svg";
import AppPermission from "../Assets/app_permission.svg";
import MaliciousApp from "../Assets/malicious_app.svg";
import SecurityNews from "../Assets/security_news.svg";
import ApkThreat from "../Assets/apk_threat.svg";
import Surveillance from "../Assets/surveillance.svg";
import WebGuard from "../Assets/web_guard.svg";
import SecureVault from "../Assets/secure_vault.svg";
import AntiVirus from "../Assets/anti_virus.svg";
import PasswordManager from "../Assets/password_manager.svg";
import NotesManager from "../Assets/notes_manager.svg";
import TrafficUsage from "../Assets/traffic_usage.svg";
import Whitelist from "../Assets/whitelist.svg";
import Logs from "../Assets/logs.svg";

// imports for pricing
import Tick from "../Assets/tick.svg";
import Cross from "../Assets/cross.svg";
import AppLock from "../Assets/app__color.svg";
import AntiVirusP from "../Assets/virus_color.svg";
import Vault from "../Assets/vault__color.svg";
import Permission from "../Assets/permission_color.svg";
import Wifi from "../Assets/wifi_grey.svg";
import News from "../Assets/news_grey.svg";
import Usage from "../Assets/usage_color.svg";
import Ad from "../Assets/ads_grey.svg";
import Malware from "../Assets/malware_grey.svg";
import Phishing from "../Assets/phishing_grey.svg";
import Web from "../Assets/web_grey.svg";
import Sp from "../Assets/surveillance_grey.svg";
import MAP from "../Assets/malicious_grey.svg";
import MSP from "../Assets/malicious_site.svg";
import Traffic from "../Assets/traffic_color.svg";
import WhitelistColor from "../Assets/whitelist_color.svg";
import LogsColor from "../Assets/logs_color.svg";
import Pass from "../Assets/pass_color.svg";
import Note from "../Assets/notes_color.svg";

// imports for details
import AdsDetails from "../Assets/ads_details.png";
import MalciousSiteDetails from "../Assets/maliciousSite_details.png";
import UsagePermissionDetails from "../Assets/usageAcces__details.png";
import AppTrafficDetails from "../Assets/apptraffic_details.png";
import MalwareDetails from "../Assets/malware_details.png";
import NewsDetails from "../Assets/news_details.png";
import ApksDetails from "../Assets/apks_details.png";
import SurveillanceDetails from "../Assets/surveillance_details.png";
import WebDetails from "../Assets/web_details.png";
import VaultDetails from "../Assets/vault_details.png";
import AntivirusDetails from "../Assets/antivirus_details.png";

import AdsIosDetails from "../Assets/ads_ios_deatils.png";
import MalciousSiteIosDetails from "../Assets/maliciousSite_ios_details.png";
import PassNotesDetails from "../Assets/pass_notes_details.png";
import UserDefinedDetails from "../Assets/userdefined.png";
import WhitelistDetails from "../Assets/whitelist_details.png";
import LogsDetails from "../Assets/logs_details.png";

export const ServicesData = {
  android: [
    {
      title: "Ads Blocker",
      img: AdsBloker,
      details:
        " Blocks annoying Ads, Ad Trackers, and pop-ups. It can block inApp ads of Chrome, YouTube and all web browsers and Mobile Apps.",
      url: "?id=adsblocker_android",
    },
    {
      title: "Malicious Traffic Block",
      img: MaliciousTraffic,
      details:
        " Provides Behavior Analysis based automated protection for Mobile Phone Users from online dangers. ",
      url: "?id=malicioustraffic_android",
    },
    {
      title: "App Usage Control",
      img: UsageAccess,
      details:
        " User can allow or disallow internet acess for individual apps. This feature can be used for playing offline games and for apps that do not require internet access. ",
      url: "?id=usagecontrol_android",
    },
    {
      title: "App Traffic Control",
      img: TrafficControl,
      details:
        " It monitors and displays traffic of each app. User can control allow or disallow links for each app.  ",
      url: "?id=apptraffic_android",
    },
    {
      title: "App Permissions",
      img: AppPermission,
      details:
        " It shows all permissions and dangerous permissions requested by each app.   ",
      url: "?id=apppermission_android",
    },
    {
      title: "Malicious App Protection",
      img: MaliciousApp,
      details:
        " It provides protection by analyzing mobile application behavior and identifies suspicious and malicious apps.   ",
      url: "?id=maliciousapp_android",
    },
    {
      title: "Security News",
      img: SecurityNews,
      details:
        "  Security news provides latest security and privacy news. So user can stay informed about online security threats & frauds.   ",
      url: "?id=security_news",
    },
    {
      title: "Apks Threat Protection",
      img: ApkThreat,
      details:
        "  It analyzes and detects all apk files that gets downloaded on the mobile phone.   ",
      url: "?id=apk_protection",
    },
    {
      title: "Surveillance Protection",
      img: Surveillance,
      details:
        "  Monitors and blocks Mobile Apps from accessing Mobile phone sensors such as Microphone, Camera, and Location services.   ",
      url: "?id=surveillance_protection",
    },
    {
      title: "Web Guard",
      img: WebGuard,
      details:
        "  Provides a safe browsing experience by blocking dangerous websites that steal personal login credentials and financial data.   ",
      url: "?id=web_guard",
    },
    {
      title: "Secure Vault",
      img: SecureVault,
      details:
        "  Provides additional authentication and encryption to safeguard personal Pictures, Video and Files on your mobile phone. ",
      url: "?id=secure_vault",
    },
    {
      title: "Anti-Virus",
      img: AntiVirus,
      details:
        "  Detects and blocks viruses and harmfull files. Real-time scanning feature detects malicious files when they get downloaded.   ",
      url: "?id=anti_virus",
    },
  ],
  ios: [
    {
      title: "Ads Blocker",
      img: AdsBloker,
      details:
        " Blocks annoying Ads, Ad Trackers, and pop-ups. It can block inApp ads of Chrome, YouTube and all web browsers and Mobile Apps.",
      url: "?id=adsblocker_ios",
    },
    {
      title: "Malicious Traffic Block",
      img: MaliciousTraffic,
      details:
        " Provides Behavior Analysis based automated protection for Mobile Phone Users from online dangers. ",
      url: "?id=malicioustraffic_ios",
    },
    {
      title: "Password Manager",
      img: PasswordManager,
      details:
        " Securely stores your passwords, passphrases and login information. user can access them with the help of master password. ",
      url: "?id=password_manager",
    },
    {
      title: "Notes Manager",
      img: NotesManager,
      details:
        " Secures your personal data such as photos, videos, banking information and business data by securly encrypting them.  ",
      url: "?id=notes_manager",
    },
    {
      title: "Traffic Usage Control",
      img: TrafficUsage,
      details:
        " It monitors and displays traffic of each app. User can control traffic for each app.    ",
      url: "?id=traffic_usage",
    },
    {
      title: "Whitelist Url Management",
      img: Whitelist,
      details:
        " Provides Behavior Analysis based automated protection for Mobile Phone Users from online dangers. With the control to block and unblock such .   ",
      url: "?id=whitelist",
    },
    {
      title: "Logs Monitoring",
      img: Logs,
      details:
        "  It monitors and displays traffic of each app. User can control allow or disallow links for each app.    ",
      url: "?id=logs",
    },
    {
      title: "Security News",
      img: SecurityNews,
      details:
        "  Security news provides latest security and privacy news. So user can stay informed about online security threats & frauds.   ",
      url: "?id=security_news",
    },
  ],
};

export const ReviewsData = [
  "Highly recommend. I've uninstalled all other virus cleaners which are full of ads and time consuming attempts for subscriptions. They don't realize that the harder they try to get you to pay money without doing a valid credible free service upfront makes them seem unreliable and a high risk to keep. I'm extremely happy. Thank you for a great app and being real.",
  "Wow. This new version has amazing aesthetics, great dashboard. I can see the links blocked in real time, access to camera and mic by different apps. blocking Ads and bad sites is the best part. Absolutely love it. The best almost perfect protection for my mobile device, great buy. I had this for some time now and I've always loved it. But got way better now.",
  "Works well for me you can enable any security features. I actively participate in my own cyber security assessments and would recommend it to all. Keep it up, these lads know what they are doing and have made it enjoyable for people who don't really know technology well",
  "APP THAT ACTUALLY WORKS! I tried adguard, blockada and some other adblockers to try to get rid of these annoying ad video popups inside my photo gallery and similar apps, they keep getting disconnected. This privacy defender app truly blocks all of them, without even having to configurate any settings. I hope it continues on like this.",
  "Great fun to use with news on frauds and threats, added bonus you get total protection for your mobile phone and tablet. Best security for my phone. I have been using Privacy Defender for a while now and have no problems. I can highly recommend them to anyone who wants to secure their cell phone and tab.",
  "Privacy Defender is the best software in the genre. Even the free version is great but is limited. I have bought the full version and using all features that are integrated in the App. Need a commission 😉 installed on all my family devices.",
  "I think Privacy Defender is absolutely the best protection one can get for their mobile devices, it is also very cost effective as I'm on a fixed budget. Don't need a lot of other apps, monitors remote connections as well.",
];

export const PricingData = {
  android: {
    free: [
      {
        title: "App Lock",
        img: AppLock,
        pay: Tick,
      },
      {
        title: "Anti Virus",
        img: AntiVirusP,
        pay: Tick,
      },
      {
        title: "Secure Vault",
        img: Vault,
        pay: Tick,
      },
      {
        title: "Wifi Protection",
        img: Wifi,
        pay: Tick,
      },
      {
        title: "App Permission",
        img: Permission,
        pay: Tick,
      },
      {
        title: "Security News",
        img: News,
        pay: Tick,
      },
      {
        title: "App Usage Control",
        img: Usage,
        pay: Tick,
      },
      {
        title: "Ad Blocker",
        img: Ad,
        pay: Cross,
      },
      {
        title: "Anti Malware",
        img: Malware,
        pay: Cross,
      },
      {
        title: "Anti Phishing",
        img: Phishing,
        pay: Cross,
      },
      {
        title: "Safe Online Browsing",
        img: Web,
        pay: Cross,
      },
      {
        title: "Surveillance Protection",
        img: Sp,
        pay: Cross,
      },
      {
        title: "Malicious App Protection",
        img: MAP,
        pay: Cross,
      },
      {
        title: "Malicious Site Protection",
        img: MSP,
        pay: Cross,
      },
    ],
    paid: [
      {
        title: "App Lock",
        img: AppLock,
        pay: Tick,
      },
      {
        title: "Anti Virus",
        img: AntiVirusP,
        pay: Tick,
      },
      {
        title: "Secure Vault",
        img: Vault,
        pay: Tick,
      },
      {
        title: "Wifi Protection",
        img: Wifi,
        pay: Tick,
      },
      {
        title: "App Permission",
        img: Permission,
        pay: Tick,
      },
      {
        title: "Security News",
        img: News,
        pay: Tick,
      },
      {
        title: "App Usage Control",
        img: Usage,
        pay: Tick,
      },
      {
        title: "Ad Blocker",
        img: Ad,
        pay: Tick,
      },
      {
        title: "Anti Malware",
        img: Malware,
        pay: Tick,
      },
      {
        title: "Anti Phishing",
        img: Phishing,
        pay: Tick,
      },
      {
        title: "Safe Online Browsing",
        img: Web,
        pay: Tick,
      },
      {
        title: "Surveillance Protection",
        img: Sp,
        pay: Tick,
      },
      {
        title: "Malicious App Protection",
        img: MAP,
        pay: Tick,
      },
      {
        title: "Malicious Site Protection",
        img: MSP,
        pay: Tick,
      },
    ],
  },
  ios: {
    free: [
      {
        title: "Logs Monitoring",
        img: LogsColor,
        pay: Tick,
      },
      {
        title: "Security News",
        img: News,
        pay: Tick,
      },
      {
        title: "Password Manager",
        img: Pass,
        pay: Tick,
      },
      {
        title: "Notes Manager",
        img: Note,
        pay: Tick,
      },
      {
        title: "Ad Blocker",
        img: Ad,
        pay: Cross,
      },
      {
        title: "Malicious Traffic Protection",
        img: MSP,
        pay: Cross,
      },
      {
        title: "Traffic Usage Control",
        img: Traffic,
        pay: Cross,
      },
      {
        title: "Whitelist Url Management",
        img: WhitelistColor,
        pay: Cross,
      },
    ],
    paid: [
      {
        title: "Logs Monitoring",
        img: LogsColor,
        pay: Tick,
      },
      {
        title: "Security News",
        img: News,
        pay: Tick,
      },
      {
        title: "Password Manager",
        img: Pass,
        pay: Tick,
      },
      {
        title: "Notes Manager",
        img: Note,
        pay: Tick,
      },
      {
        title: "Ad Blocker",
        img: Ad,
        pay: Tick,
      },
      {
        title: "Malicious Traffic Protection",
        img: MSP,
        pay: Tick,
      },
      {
        title: "Traffic Usage Control",
        img: Traffic,
        pay: Tick,
      },
      {
        title: "Whitelist Url Management",
        img: WhitelistColor,
        pay: Tick,
      },
    ],
  },
};

export const AppGuideData = [
  {
    title: "What is “Anti-Virus”?",
    details:
      "          Anti-Virus provides protection by performing quick and deep Antivirus & Anti Malware scan to detect and delete all files that contain Virus, Malware or Spyware. Real-time scanning feature detects malicious files when they get downloaded.",
    youtube: "zHISM-JJ0cY",
    mode: "light",
  },
  {
    title: "What is “Anti-Malware”?",
    details:
      "          Anti Malware Scan provides app protection by analyzing Mobile Application behavior to identify suspicious and malicious Apps. Anti-Virus scan complements this feature by identifying stored files used by the Malicious App.",
    youtube: "aagcoFdlOVQ",
    mode: "dark",
  },
  {
    title: "What is “Firewall”?",
    details:
      "          Firewall feature monitors and displays traffic of each app. It can block malicious and in-secure mobile traffic. Firewall also contains an Adblocker which blocks annoying Ads, Ad Trackers, and pop-ups. It can block inApp ads of Chrome, YouTube and all web browsers and Mobile Apps.      ",
    youtube: "W1Yl_m65-J0",
    mode: "light",
  },
  {
    title: "What is “Web Guard”?",
    details:
      "          Web Guard provides online privacy protection and safe browsing experience when Mobile User visits dangerous phishing websites which may contain Virus, Malware, Adware or Spyware.",
    youtube: "HfbvjjBZfLc",
    mode: "dark",
  },
  {
    title: "What is “Surveillance Protection”?",
    details:
      "          Surveillance Protection provides privacy protection from Spywares which steals personal and financial data. It protects from malicious apps, which listens in to the conversation, by monitoring and blocking camera and microphone.",
    youtube: "-8OBKgA2uug",
    mode: "light",
  },
  {
    title: "What is “Secure Vault”?",
    details:
      "                    Secure Vault secures your personal data such as photos, videos, banking and business data by securly encrypting them.",
    youtube: "-wzliWkGbsY",
    mode: "dark",
  },
  {
    title: "What is “Security News”?",
    details:
      "          Security news provides latest security and privacy news and awareness campaign. So user can stay informed about online security Threats & Frauds.      ",
    youtube: "Sv0WxbHKCD0",
    mode: "light",
  },
  {
    title: "What is “App Lock”?",
    details:
      "           App Lock stops people from opening your mobile apps when sharing phone with family, friends, and others.      ",
    youtube: "-wzliWkGbsY",
    mode: "dark",
  },
];
export const FeaturesDetails = {
  adsblocker_android: {
    first: "Block",
    sec: "Ads",
    third: " and",
    fourth: "Ad Tracking",
    img: AdsDetails,
    store: "android",
    title: " Ads Blocker",
    details:
      " Blocks annoying Ads, Ad Trackers, and pop-ups. It can block inApp ads of Chrome, YouTube and all web browsers and Mobile Apps.",
    youtube: "8FFIQrD9pYs",
  },
  malicioustraffic_android: {
    first: "Complete Online",
    sec: "Protection",
    third: " Block",
    fourth: "Malicious sites",
    img: MalciousSiteDetails,
    store: "android",
    title: " Malicious Traffic Block",
    details:
      " Provides Behavior Analysis based automated protection for Mobile Phone Users from online dangers. ",
    youtube: "HfbvjjBZfLc",
  },
  usagecontrol_android: {
    first: "Control",
    sec: "Data",
    third: " and",
    fourth: "Wifi Usage",
    img: UsagePermissionDetails,
    store: "android",
    title: " App Usage Control",
    details:
      " User can allow or disallow internet acess for individual apps. This feature can be used for playing offline games and for apps that do not require internet access. ",
    youtube: "tkPU_46326Y",
  },
  apptraffic_android: {
    first: "Control",
    sec: "App Traffic",
    third: " and",
    fourth: "Logs",
    img: AppTrafficDetails,
    store: "android",
    title: " App Traffic Control",
    details:
      " It monitors and displays traffic of each app. User can control allow or disallow links for each app.  ",
    youtube: "aagcoFdlOVQ",
  },
  apppermission_android: {
    first: "Control",
    sec: "Dangerous ",
    third: " Permissions",
    fourth: "",
    img: UsagePermissionDetails,
    store: "android",
    title: " App Permissions",
    details:
      " It shows all permissions and dangerous permissions requested by each app.   ",
    youtube: "tkPU_46326Y",
  },
  maliciousapp_android: {
    first: "Detects",
    sec: "Malicious App",
    third: " &",
    fourth: "Block",
    img: MalwareDetails,
    store: "android",
    title: " Malicious App Protection",
    details:
      " It provides protection by analyzing mobile application behavior and identifies suspicious and malicious apps.   ",
    youtube: "zHISM-JJ0cY",
  },
  security_news: {
    first: "Stay",
    sec: "Alert",
    third: " by",
    fourth: "Threats Attacks",
    img: NewsDetails,
    store: "android",
    title: " Security News",
    details:
      "  Security news provides latest security and privacy news. So user can stay informed about online security threats & frauds.   ",
    youtube: "tkPU_46326Y",
  },
  apk_protection: {
    first: "Detects",
    sec: "Malicious Apks",
    third: " &",
    fourth: "Block",
    img: ApksDetails,
    store: "android",
    title: " Apks Threat Protection",
    details:
      "  It analyzes and detects all apk files that gets downloaded on the mobile phone.   ",
    youtube: "zHISM-JJ0cY",
  },
  surveillance_protection: {
    first: "Block",
    sec: " Spyware",
    third: " &",
    fourth: "Monitor Apps",
    img: SurveillanceDetails,
    store: "android",
    title: " Surveillance Protection",
    details:
      "  Monitors and blocks Mobile Apps from accessing Mobile phone sensors such as Microphone, Camera, and Location services.   ",
    youtube: "YkeReUe14cA",
  },
  web_guard: {
    first: "Browse the web",
    sec: "Safely",
    third: " & block",
    fourth: "Phishing Sites",
    img: WebDetails,
    store: "android",
    title: " Web Guard",
    details:
      "  Provides a safe browsing experience by blocking dangerous websites that steal personal login credentials and financial data.   ",
    youtube: "HfbvjjBZfLc",
  },
  secure_vault: {
    first: "Securely store",
    sec: "Photos, Videos",
    third: " and",
    fourth: "Files",
    img: VaultDetails,
    store: "android",
    title: " Secure Vault",
    details:
      "  Provides additional authentication and encryption to safeguard personal Pictures, Video and Files on your mobile phone. ",
    youtube: "-wzliWkGbsY",
  },
  anti_virus: {
    first: "Detects &",
    sec: "Blocks Viruses",
    third: " and",
    fourth: "Harmfull Files",
    img: AntivirusDetails,
    store: "android",
    title: " Anti-Virus",
    details:
      "  Detects and blocks viruses and harmfull files. Real-time scanning feature detects malicious files when they get downloaded.   ",
    youtube: "zHISM-JJ0cY",
  },
  adsblocker_ios: {
    first: "Block",
    sec: "Ads",
    third: " and",
    fourth: "Ad Tracking",
    img: AdsIosDetails,
    store: "ios",
    title: " Ads Blocker",
    details:
      " Blocks annoying Ads, Ad Trackers, and pop-ups. It can block inApp ads of Chrome, YouTube and all web browsers and Mobile Apps.",
    youtube: "8FFIQrD9pYs",
  },
  malicioustraffic_ios: {
    first: "Complete Online",
    sec: "Protection",
    third: " Block",
    fourth: "Malicious sites",
    img: MalciousSiteIosDetails,
    store: "ios",
    title: " Malicious Traffic Block",
    details:
      " Provides Behavior Analysis based automated protection for Mobile Phone Users from online dangers. ",
    youtube: "HfbvjjBZfLc",
  },
  password_manager: {
    first: "Securely",
    sec: "Store",
    third: "Your",
    fourth: "login Credentials",
    img: PassNotesDetails,
    store: "ios",
    title: " Password Manager",
    details:
      " Securely stores your passwords, passphrases and login information. user can access them with the help of master password. ",
    youtube: "HXYt-08WqTM",
  },
  notes_manager: {
    first: "Securely",
    sec: "Store",
    third: " Your",
    fourth: "Personal Notes",
    img: PassNotesDetails,
    store: "ios",
    title: " Notes Manager",
    details:
      " Secures your personal data such as photos, videos, banking information and business data by securly encrypting them.  ",
    youtube: "aagcoFdlOVQ",
  },
  traffic_usage: {
    first: "Custom",
    sec: "Blockage",
    third: " of",
    fourth: "Domain or Sites",
    img: UserDefinedDetails,
    store: "ios",
    title: " Traffic Usage Control",
    details:
      " It monitors and displays traffic of each app. User can control traffic for each app.    ",
    youtube: "W1Yl_m65-J0",
  },
  whitelist: {
    first: "Custom",
    sec: "Whitelist",
    third: " of",
    fourth: "Ads & Urls",
    img: WhitelistDetails,
    store: "ios",
    title: " Whitelist Url Management",
    details:
      " Provides Behavior Analysis based automated protection for Mobile Phone Users from online dangers. With the control to block and unblock such .   ",
    youtube: "W1Yl_m65-J0",
  },
  logs: {
    first: "Views",
    sec: "Internet Activity",
    third: " of Each",
    fourth: "App",
    img: LogsDetails,
    store: "ios",
    title: " Logs Monitoring",
    details:
      "  It monitors and displays traffic of each app. User can control allow or disallow links for each app.    ",
    youtube: "W1Yl_m65-J0",
  },
};
