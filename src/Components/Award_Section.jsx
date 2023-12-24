import { FaTrophy } from "react-icons/fa";

const Award_Section = () => {
  return (
    <>
      <div className="w-full bg-[#122947]">
        <p className="flex flex-col justify-center items-center">
          <p className="font-semibold text-green-400 text-xl mt-3 mb-2">
            Our Awards
          </p>
          <h1 className="text-white text-2xl w-[36rem] tracking-wide text-center">
            Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
          </h1>
        </p>
        <div className="">
          <p className="">
            <FaTrophy />
          </p>
          <span className="">32M</span>
          <span className="">Blue Burmin Award</span>
        </div>
      </div>
    </>
  );
};

export default Award_Section;
