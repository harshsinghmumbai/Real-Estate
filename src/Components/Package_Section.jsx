import PackageSection_CardItems from "./PackageSection_CardItems";
import Package_CardItems from "../API/Package_CardItems";

const Package_Section = () => {
  return (
    <>
      <div className="w-full h-[48rem] mt-7 ">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold mt-10 mb-5">Select Your Package</h1>
          <p className="text-lg font-semibold w-[32.5rem] text-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-1 pl-32 pr-32">
          <PackageSection_CardItems Package_CardItems={Package_CardItems} />
        </div>
      </div>
    </>
  );
};

export default Package_Section;
