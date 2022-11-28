import Image from "next/image";

import Star from "../../Assets/star.svg";
export default function BasicCard(props) {
  const data = props.data;
  return (
    <div className="flex flex-col items-center justify-center lg:p-8 sm:p-2 p-2 shadow-2xl lg:m-8 sm:m-2 m-2">
      <div className="flex flex-row items-center justify-center">
        <Image src={Star} alt="rating star" className="m-2" />
        <Image src={Star} alt="rating star" className="m-2" />
        <Image src={Star} alt="rating star" className="m-2" />
        <Image src={Star} alt="rating star" className="m-2" />
        <Image src={Star} alt="rating star" className="m-2" />
      </div>
      <p className="text-primary-dark lg:text-sm sm:text-xs text-xs font-medium">
        {data}
      </p>
    </div>
  );
}
