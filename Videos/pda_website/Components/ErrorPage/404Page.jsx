import Link from "next/link";
import Lottie from "react-lottie";
import Mockups from "../../Assets/noData.json";

export default function Error() {
  return (
    <div className="w-full">
      <p className="lg:text-6xl sm:text-4xl text-4xl text-center text-primary-dark font-bold lg:py-10">
        Error Page
      </p>

      <div className="lg:block sm:hidden hidden">
        <Lottie
          width={650}
          height={500}
          options={{
            loop: true,
            autoplay: true,
            animationData: Mockups,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
      <div className="lg:hidden sm:block block lg:py-0 sm:py-12 py-12">
        {" "}
        <Lottie
          width={300}
          height={220}
          options={{
            loop: true,
            autoplay: true,
            animationData: Mockups,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>

      <div className="flex items-center h-full justify-center lg:px-20  sm:px-10 px-10 lg:py-20  sm:py-0 py-0">
        <Link href="/">
          <div className="flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-10 sm:px-8 px-8 lg:py-4  sm:py-2 py-2 lg:mb-0 sm:mb-8 mb-8 text-primary-main bg-primary-dark hover:bg-primary-card   rounded-xl shadow-2xl">
            <p className="lg:text-2xl sm:text-base text-base font-semibold ">
              Go To Home
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
