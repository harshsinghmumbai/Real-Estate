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

            <div className="bg-white w-[40rem] h-16">
              <p className="flex flex-col">
                <label
                  htmlFor="City/Street"
                  className="font-semibold text-gray-400"
                >
                  City/Street
                </label>
                <input
                  className="border-[1px] border-black rounded-md w-36 h-7"
                  type="text"
                  name=""
                  id="City/Street"
                  placeholder="Location"
                />
                          </p>
                          <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_Section;
