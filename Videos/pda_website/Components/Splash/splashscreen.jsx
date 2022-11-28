import Lottie from "react-lottie";
import SheildAnimation from "../../Assets/Sheidanimation.json";

export default function SplashScreen() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: "#001b56" }}
    >
      <Lottie
        width={250}
        height={250}
        options={{
          loop: false,
          autoplay: true,
          animationData: SheildAnimation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
    </div>
  );
}
