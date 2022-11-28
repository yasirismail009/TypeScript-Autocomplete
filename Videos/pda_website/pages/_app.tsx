import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Splashscreen from "../Components/Splash/splashscreen";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return pageLoading === true ? <Splashscreen /> : <Component {...pageProps} />;
}

export default MyApp;
