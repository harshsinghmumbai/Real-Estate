const Explore_Section = () => {
  return (
    <>
      <div className="">
        <p className="flex flex-col justify-center items-center">
          <span className="text-4xl font-bold mt-11 mb-2">
            Explore By Location
          </span>
          <p className="text-gray-500 w-[33.5rem] text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </p>

        {/* -----------------------------------All Image------------------------ */}
        <div className=" w-[90%] grid grid-rows-3  gap-7 h-[49rem] grid-cols-3 m-auto mt-6">
          <div className=" w-[22rem] h-[15rem]  box-border ">
            <img
              className="w-full h-full object-contain rounded-lg cursor-pointer hover:object-cover"
              src="https://funny-daffodil-350bc9.netlify.app/images/location/city-1.png"
              alt=""
            />
          </div>

          <div className=" w-[22rem] h-[15rem] box-border ">
            <img
              className="w-full h-full object-contain rounded-lg cursor-pointer hover:object-cover "
              src="https://funny-daffodil-350bc9.netlify.app/images/location/city-2.png"
              alt=""
            />
          </div>

          <div className=" w-[22rem] h-[15rem] box-border ">
            <img
              className="w-full h-full object-contain rounded-lg cursor-pointer hover:object-cover"
              src="https://funny-daffodil-350bc9.netlify.app/images/location/city-3.png"
              alt=""
            />
          </div>

          <div className=" w-[22rem] h-[15rem]   box-border ">
            <img
              className="w-full h-full object-contain rounded-lg cursor-pointer hover:object-cover"
              src="https://funny-daffodil-350bc9.netlify.app/images/location/city-4.png"
              alt=""
            />
          </div>

          <div className=" w-[22rem] h-[15rem] box-border ">
            <img
              className="w-full h-full object-contain rounded-lg cursor-pointer hover:object-cover"
              src="https://funny-daffodil-350bc9.netlify.app/images/location/city-5.png"
              alt=""
            />
          </div>

          <div className=" w-[22rem] h-[15rem] box-border ">
            <img
              className="w-full h-full object-contain rounded-lg cursor-pointer hover:object-cover"
              src="https://funny-daffodil-350bc9.netlify.app/images/location/city-6.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore_Section;
