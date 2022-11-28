import DesignChild from "./design";
export default function OtherProduct() {
  return (
    <div
      className="w-full h-full bg-primary-dark lg:p-24 sm:p-8 p-8 lg:mt-0 sm:mt-20 mt-20"
      id="products"
    >
      <div className="lg:my-0 sm:my-8 my-8 ">
        <p className="lg:text-4xl sm:text-xl text-xl font-bold text-primary-main lg:ml-8 sm:ml-0 ml-0 mb-2">
          Our Other Product
        </p>
        <p className="lg:text-2xl sm:text-base text-base font-medium text-primary-text lg:ml-16 sm:ml-0 ml-0  lg:mb-16">
          Our services are defined by quality and commitment.
        </p>
      </div>
      <DesignChild />
    </div>
  );
}
