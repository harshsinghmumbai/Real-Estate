import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Property_Section = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold tracking-wide inline-block mt-10 mb-2">
          Recent Property Listed
        </h1>
        <p className="w-[29.5rem] text-lg text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>

      {/* --------------------------------Card Items--------------------------------- */}
      <div className="p-20">
        <div className="w-[300px] rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-6">
            <p className="flex justify-between">
              <span className="bg-[#fff5e5] text-[#ff9800] p-1 rounded-md mb-1">
                For Rent
              </span>
              <span className="text-xl text-gray-400 ">
                <FaHeart />
              </span>
            </p>

            <p className="text-lg font-semibold">Red Carpet Real Estate</p>
            <p className="flex">
              <span className="text-gray-500 pt-1 mr-2">
                <FaLocationDot />
              </span>
              <span className="text-gray-500 mb-2">210 Zirak Road, Canada</span>
            </p>
            <hr />
            <div className="flex justify-around mt-4">
              <button className="bg-[#27ae60]  p-1 rounded-md font-semibold text-white">
                $3700 <span className="text-black">/sqft</span>
              </button>
              <span className="text-lg font-semibold">Apartment</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property_Section;
