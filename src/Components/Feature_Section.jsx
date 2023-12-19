const Feature_Section = () => {
  return (
    <>
      <div className="w-full bg-[#f7f9fc] relative h-[30rem]">
        <p className="absolute top-[4rem] left-[26.75rem]">
          <span className="text-4xl font-bold tracking-normal">
            Featured Property Types
          </span>
          <br className="" />
          <span className="text-lg pl-[6rem] text-gray-500">
            Find All Type of Property.
          </span>
        </p>

        <div className="absolute top-[12.5rem] left-[7.75rem] flex justify-between w-[64.75rem]">
          <p className="w-44 h-44 shadow-2xl rounded-lg">
            <img
              className="w-16 h-16 m-auto mt-4 mb-3"
              src="https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png"
              alt="image"
            />
            <span className="text-xl font-semibold ml-6">Family House</span>
            <br />
            <span className="text-gray-500 ml-10">122 Property</span>
          </p>
          <p className="w-44 h-44 shadow-2xl rounded-lg">
            <img
              className="w-16 h-16 m-auto mt-4 mb-3"
              src="https://funny-daffodil-350bc9.netlify.app/images/hero/h2.png"
              alt="image"
            />
            <span className="text-xl font-semibold ml-6">House & Villa</span>
            <br />
            <span className="text-gray-500 ml-10">155 Property</span>
          </p>
          <p className="w-44 h-44 shadow-2xl rounded-lg">
            <img
              className="w-16 h-16 m-auto mt-4 mb-3"
              src="https://funny-daffodil-350bc9.netlify.app/images/hero/h3.png"
              alt="image"
            />
            <span className="text-xl font-semibold ml-10">Apartment</span>
            <br />
            <span className="text-gray-500 ml-10">300 Property</span>
          </p>
          <p className="w-44 h-44 shadow-2xl rounded-lg">
            <img
              className="w-16 h-16 m-auto mt-4 mb-3"
              src="https://funny-daffodil-350bc9.netlify.app/images/hero/h4.png"
              alt="image"
            />
            <span className="text-xl font-semibold ml-6">Office & Studio</span>
            <br />
            <span className="text-gray-500 ml-10">80 Property</span>
          </p>
          <p className="w-44 h-44 shadow-2xl rounded-lg">
            <img
              className="w-16 h-16 m-auto mt-4 mb-3"
              src=" https://funny-daffodil-350bc9.netlify.app/images/hero/h6.png"
              alt="image"
            />
            <span className="text-xl font-semibold ml-6">Villa & Condo</span>
            <br />
            <span className="text-gray-500 ml-10">80 Property</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature_Section;
