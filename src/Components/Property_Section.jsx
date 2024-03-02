import Property_CardItems from "./Property_CardItems";
import CardItems from "../API/CardItems";

const Property_Section = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-7">
        <h1 className="text-4xl font-bold tracking-wide inline-block mt-10 mb-2">
          Recent Property Listed
        </h1>
        <p className="w-[29.5rem] text-lg text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 grid-rows-2 pl-24 mt-10 pr-14">
        <Property_CardItems CardItems={CardItems} />
      </div>
    </>
  );
};

export default Property_Section;
