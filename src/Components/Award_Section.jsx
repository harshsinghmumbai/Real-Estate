import { FaTrophy } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Award_Section = () => {
  return (
    <>
      <div className="bg-[#122947]">
        <div className="w-full ">
          <p className="flex flex-col justify-center items-center">
            <p className="font-semibold text-green-400 text-xl mt-8 mb-2">
              Our Awards
            </p>
            <h1 className="text-white text-2xl w-[36rem] tracking-wide text-center">
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </h1>
          </p>
        </div>

        {/* -----------------------------------Award_Items----------------------------- */}
        <div className="mt-8 flex justify-between p-10 w-[55rem] m-auto">
          <div className="">
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

          <div className=" bg-[#122947] ">
            <p className="text-white text-5xl p-7 rounded-full inline-block bg-[#2a3f5a]">
              <FaBriefcase />
            </p>
            <br />
            <h1 className="text-white text-4xl font-bold ml-3 inline-block">
              43M
            </h1>
            <p className="text-gray-500 w-[7.25rem] text-center pr-3">
              Mimo X11 Award
            </p>
          </div>

          <div className=" bg-[#122947] ">
            <p className="text-white text-5xl p-7 rounded-full inline-block bg-[#2a3f5a]">
              <FaLightbulb />
            </p>
            <br />
            <h1 className="text-white text-4xl font-bold ml-3 inline-block">
              51M
            </h1>
            <p className="text-gray-500 w-[7.25rem] text-center pr-3">
              Australian UGC Award
            </p>
          </div>

          <div className="bg-[#122947] ">
            <p className="text-white text-5xl p-7 rounded-full inline-block bg-[#2a3f5a]">
              <FaHeart />
            </p>
            <br />
            <h1 className="text-white text-4xl font-bold ml-3 inline-block">
              42M
            </h1>
            <p className="text-gray-500 w-[7.25rem] text-center pr-3">
              IITCA Green Award
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award_Section;
