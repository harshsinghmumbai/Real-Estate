import { FaMagnifyingGlass } from "react-icons/fa6";
import Feature_Section from "./Feature_Section";
import Property_Section from "./Property_Section";
import Award_Section from "./Award_Section";
import Explore_Section from "./Explore_Section";
import Agents_Section from "./Agents_Section";
import Package_Section from "./Package_Section";
import Question_Component from "./Question_Component";

const Hero_Section = () => {
  return (
    <>
      <div className=" mt-1">
        <div className="">
          <img
            className="w-full h-[40.8rem] object-cover relative"
            src="https://funny-daffodil-350bc9.netlify.app/static/media/banner.1a3c8a0a448e8e24f6a0.png"
            alt="hero_image"
          />

          <div className="absolute top-[15rem] left-[25rem]">
            <h1 className="text-white text-[3.8rem] font-bold">
              Search Your Next <br /> <span className="pl-[10rem]"> Home</span>
            </h1>
            <p className="font-semibold text-white pl-12">
              Find new & featured property located in your local city.
            </p>

            <div className="bg-white w-[49.2rem] h-[6rem] mt-6 rounded-lg absolute top-[13.25rem] left-[-9.25rem] flex shadow-2xl">
              <p className="flex flex-col border-r-[1px] p-4 border-black h-24 w-52">
                <label
                  htmlFor="City/Street"
                  className="font-semibold text-gray-400 ml-1 mb-1"
                >
                  City/Street
                </label>
                <input
                  className="border-[1px] border-black rounded-md w-40 h-8 pl-2 text-black"
                  type="text"
                  name=""
                  id="City/Street"
                  placeholder="Location"
                />
              </p>
              <p className="flex flex-col border-r-[1px] p-4 border-black h-24 w-52">
                <label
                  htmlFor="Property"
                  className="font-semibold text-gray-400 ml-1 mb-1"
                >
                  Property
                </label>
                <input
                  className="border-[1px] border-black rounded-md w-40 h-8 pl-2 text-black"
                  type="text"
                  name=""
                  id="Property"
                  placeholder="Property Type"
                />
              </p>
              <p className="flex flex-col border-r-[1px] p-4 border-black h-24 w-52">
                <label
                  htmlFor="Price Range"
                  className="font-semibold text-gray-400 ml-1 mb-1"
                >
                  Price Range
                </label>
                <input
                  className="border-[1px] border-black rounded-md w-40 h-8 pl-2 text-black"
                  type="text"
                  name=""
                  id="Price Range"
                  placeholder="Price"
                />
              </p>
              <div className="flex">
                <span className="text-lg font-semibold mt-5 ml-3 mr-3">
                  Advance <br /> Filter
                </span>
                <button className="bg-green-500 text-white h-[3rem] w-[3.25rem] mt-6 rounded-lg pl-4 ">
                  <FaMagnifyingGlass />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature_Section />
      <Property_Section />
      <Award_Section />
      <Explore_Section />
      <Agents_Section/>
      <Package_Section />
      <Question_Component/>
    </>
  );
};

export default Hero_Section;
