import Bluelogo from "../../Assets/pligence_logo.svg";
import Image from "next/image";
import Error from "../../Assets/error.svg";

export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center lg:p-20 sm:p-8 p-8">
      <div>
        <div className="flex flex-col justify-center items-center pb-8">
          <Image src={Bluelogo} alt="Logo" width={200} />
        </div>

        <div className="w-fll flex flex-col justify-center items-center">
          <div className="lg:w-3/4 sm:w-full w-full pb-8">
            <Image src={Error} alt="Error Image" />
          </div>

          <div>
            <p className="lg:text-6xl sm:text-2xl text-2xl  text-primary-dark font-bold lg:pb-8 sm:pb-2 pb-2 text-center">
              Pligence Security Has Blocked This Page
            </p>
            <p className="lg:text-2xl sm:text-base text-base font-semibold text-primary-dark text-center">
              The website you are trying to access may contain malicious content
              and trackers which could affect your privacy.
            </p>
            <p className="lg:text-2xl sm:text-base text-base font-semibold text-primary-dark text-center">
              If you want to continue just click on{" "}
              <span className="text-[#ffc200] border-b-2 border-primary-dark">
                continue
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
