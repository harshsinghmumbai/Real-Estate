import { FaTrophy } from "react-icons/fa";

const Award_Section = () => {
  return (
    <>
      <div className="w-full bg-[#122947]">
        <p className="flex flex-col justify-center items-center">
          <p className="font-semibold text-green-400 text-xl mt-8 mb-2">
            Our Awards
          </p>
          <h1 className="text-white text-2xl w-[36rem] tracking-wide text-center">
            Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
          </h1>
        </p>

        <div className="mt-5">
          <p className="text-white text-5xl p-7 rounded-full inline-block bg-[#2a3f5a]">
            <FaTrophy />
          </p>
          <br />
          <h1 className="text-white text-4xl font-bold ml-3 inline-block">
            32M
          </h1>
          <p className="text-gray-500 w-[7.25rem] text-center pr-3">
            Blue Burmin Award
          </p>
        </div>
      </div>
    </>
  );
};

export default Award_Section;
