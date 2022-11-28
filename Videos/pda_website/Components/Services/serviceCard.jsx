import Image from "next/image";
import ReadMore from "../../Assets/read_more.svg";
import Link from "next/link";
import { validateConfig } from "next/dist/server/config-shared";

export default function BasicCard(props) {
  const AndroidData = props.AndroidData;
  return (
    <div className="p-8 m-8 shadow-2xl bg-primary-card text-primary-main hover:bg-primary-text hover:text-primary-dark rounded-2xl">
      <div className="lg:h-60">
        <Image src={AndroidData.img} alt={AndroidData.title} className="mb-2" />
        <p className="lg:text-2xl sm:text-xl text-xl font-bold mb-3">
          {AndroidData.title}
        </p>
        <p className=" lg:text-base xs:text-sm text-sm font-medium">
          {AndroidData.details}
        </p>
      </div>
      <div>
        <Link href={`/features${AndroidData.url}`}>
          <div className="mt-4 w-40 flex flex-row items-center justify-center cursor-pointer font-bold text-sm px-6 py-2 text-primary-main bg-primary-dark hover:bg-primary-card   rounded-xl shadow-xl">
            <Image src={ReadMore} alt="Read More" />
            <p className="text-sm font-semibold ml-4">Read More</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
