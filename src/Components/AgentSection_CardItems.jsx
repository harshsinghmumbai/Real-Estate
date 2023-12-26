import { TiLocation } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

const AgentSection_CardItems = ({ Agents_CardItems }) => {
  return (
    <>
      {Agents_CardItems.map((curElem) => {
        return (
          <div className="pl-10" key={curElem.id}>
            <div className="w-[300px] rounded-md border mt-12 shadow-2xl">
              <img
                src={curElem.image}
                alt="Laptop"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <p className="flex justify-between">
                            <h1 className="text-lg font-semibold ml-2">{curElem.name }</h1>
                  <button className="border bg-orange-600 text-white  text-xs font-bold p-[0.40rem] rounded-3xl cursor-pointer hover:bg-orange-500">
                    {curElem.list}
                  </button>
                </p>
                <p className="flex mt-1 ml-1">
                  <span className="pt-1 mr-1">
                    <TiLocation />
                  </span>
                  {curElem.location}
                </p>
                <div className="mt-2 flex flex-wrap">
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
        );
      })}
    </>
  );
};

export default AgentSection_CardItems;
