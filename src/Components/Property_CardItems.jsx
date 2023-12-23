import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Property_CardItems = ({ CardItems }) => {
  // console.log(CardItems)
  return (
    <>
      {CardItems.map((curElem) => {
        return (
          <div className="p-20" key={curElem.id}>
            <div className="w-[300px] rounded-md border">
              <img
                src={curElem.image}
                alt="Laptop"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-6">
                <p className="flex justify-between">
                  <span className="bg-[#fff5e5] text-[#ff9800] p-1 rounded-md mb-1">
                    {curElem.typeofProperty}
                  </span>
                  <span className="text-xl text-gray-400 ">
                    <FaHeart />
                  </span>
                </p>

                <p className="text-lg font-semibold">{curElem.name}</p>
                <p className="flex">
                  <span className="text-gray-500 pt-1 mr-2">
                    <FaLocationDot />
                  </span>
                  <span className="text-gray-500 mb-2">{curElem.location}</span>
                </p>
                <hr />
                <div className="flex justify-around mt-4">
                  <button className="bg-[#27ae60]  p-1 rounded-md font-semibold text-white">
                    ${curElem.prices} <span className="text-black">/sqft</span>
                  </button>
                  <span className="text-lg font-semibold">
                    {curElem.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Property_CardItems;
