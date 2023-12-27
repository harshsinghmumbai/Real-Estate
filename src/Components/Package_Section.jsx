import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Package_Section = () => {
  return (
    <>
      <div className="w-full h-96">
        <p className="flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold mt-10 mb-5">Select Your Package</h1>
          <p className="text-lg font-semibold w-[32.5rem] text-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </p>

        <div className="pt-22 relative mx-auto w-[20rem] rounded-lg bg-white px-10 pb-16 border-2 border-black mt-7 ">
          <span className=" p-1 absolute top-[1rem] left-[2.5rem] text-lg tracking-wide font-bold text-black w-11 h-9 rounded-lg">
            Basic
          </span>
          <br />
          <br />
          <span className="flex items-end text-black mt-2 ">
            <span className="text-4xl font-[700] leading-none text-[3rem]">
              $100
            </span>
            <span className="text-lg font-semibold text-gray-400">/month</span>
          </span>

          <div className="mt-7 border-t border-orange-500 pt-5">
            <ul className="mb-10">
              <li className="mb-6 flex items-center">
                <span className="text-green-700">
                  <FaCheckCircle />
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  120GB CDN Bandwidth
                </span>
              </li>
              <li className="mb-6 flex items-center">
                <span className="text-green-700">
                  <FaCheckCircle />
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  99.5% Uptime Guarantee
                </span>
              </li>
              <li className="mb-6 flex items-center">
                <span className="text-green-700">
                  <FaCheckCircle />
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  5GB Cloud Storage
                </span>
              </li>
              <li className="mb-6 flex items-center">
                <span className="text-red-700 text-lg">
                  <MdCancel />
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  Personal Help Support
                </span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="text-red-700 text-lg">
                  <MdCancel />
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  Enterprise SLA
                </span>
              </li>
            </ul>
            <button
              type="button"  
              className="w-[75%] h-9 bg-blue-600 text-white font-semibold rounded-lg">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package_Section;
