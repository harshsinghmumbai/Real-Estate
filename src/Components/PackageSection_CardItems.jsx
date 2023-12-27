import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const PackageSection_CardItems = ({ Package_CardItems }) => {
  // console.log(Package_CardItems)
  return (
    <>
      {Package_CardItems.map((curElem) => {
        return (
          <div
            className="pt-22 relative mx-auto w-[20rem] rounded-lg bg-white px-10 pb-16 border-2 border-black mt-7 mb-14"
            key={curElem.id}
          >
            <span className=" p-1 absolute top-[1rem] left-[2.5rem] text-lg tracking-wide font-bold text-black w-11 h-9 rounded-lg">
              {curElem.tite}
            </span>
            <br />
            <br />
            <span className="flex items-end text-black mt-2 ">
              <span className="text-4xl font-[700] leading-none text-[3rem]">
                {curElem.prices}
              </span>
              <span className="text-lg font-semibold text-gray-400">
                /month
              </span>
            </span>

            <div className="mt-7 border-t border-orange-500 pt-5">
              <ul className="mb-10">
                <li className="mb-6 flex items-center">
                  <span className="text-green-700">
                    <FaCheckCircle />
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                   {curElem.service_1}
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="text-green-700">
                    <FaCheckCircle />
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                  {curElem.service_2}
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="text-green-700">
                    <FaCheckCircle />
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                     {curElem.service_3}
                  </span>
                </li>
                <li className="mb-6 flex items-center">
                  <span className="text-red-700 text-lg">
                    <MdCancel />
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                     {curElem.service_4}
                  </span>
                </li>
                <li className="mb-3 flex items-center">
                  <span className="text-red-700 text-lg">
                    <MdCancel />
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                     {curElem.service_5}
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="w-[75%] h-9 bg-blue-600 text-white font-semibold rounded-lg"
              >
                Choose Plan
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PackageSection_CardItems;
