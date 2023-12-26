import { TiLocation } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

const Agents_Section = () => {
  return (
    <>
      <div className="bg-[#f7f9fc] w-full h-[45rem]">
        <p className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-[650] inline-block mt-7 mb-2 tracking-wide">
            Our Featured Agents
          </h1>
          <p className="text-lg font-semibold inline-block w-[31rem] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </p>

        <div className="pl-10">
          <div className="w-[300px] rounded-md border mt-12 shadow-2xl">
            <img
              src="https://funny-daffodil-350bc9.netlify.app/images/customer/team-1.jpg"
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <p className="flex justify-between">
                <h1 className="text-lg font-semibold">Jenifer Lopez</h1>
                <button className="border bg-orange-600 text-white  text-xs font-bold p-[0.40rem] rounded-3xl cursor-pointer hover:bg-orange-500">
                  51 Listing
                </button>
              </p>
              <h6 className="mt-3 font-medium">Founder and CEO, DevUI</h6>
              <p className="flex mt-1">
                <span className="pt-1 mr-1">
                  <TiLocation />
                </span>
                Liverpool, Canada
              </p>
              <div className="mt-4 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border cursor-pointer border-gray-300 hover:border-gray-400">
                    <p className="text-4xl">
                      <FaFacebook />
                    </p>
                  </div>
                </div>
                <div className="w-auto p-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <p className="text-4xl">
                      <FaSquareInstagram />
                    </p>
                  </div>
                </div>
                <div className="w-auto p-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <p className="text-4xl">
                      <FaSquareXTwitter />
                    </p>
                  </div>
                </div>
                <div className="w-auto p-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <p className="text-4xl">
                      <FaLinkedin />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="flex justify-between mr-7 ml-3 mb-2">
              <button className=" flex border bg-green-600 text-white  text-xs font-bold p-[0.40rem] rounded-3xl cursor-pointer hover:bg-green-500">
                <span className="mr-1 pt-[0.15rem]">
                  <BiSolidMessageDetail />
                </span>
                Message
              </button>
              <button className=" w-[2.50rem] flex justify-center items-center h-[1.75rem] border bg-black text-white  text-xs font-bold p-[0.40rem] rounded-3xl cursor-pointer hover:bg-black">
                <span className="text-sm text-white">
                  <FiPhoneCall />
                </span>
              </button>
          
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agents_Section;
