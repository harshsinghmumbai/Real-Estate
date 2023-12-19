const Feature_Section = () => {
  return (
    <>
      <div className="h-screen bg-[#f7f9fc] relative">
        <p className="absolute top-[2rem] left-[26.75rem]">
          <span className="text-4xl font-bold">Featured Property Types</span>
          <br />
          <span className="text-lg">Find All Type of Property.</span>
        </p>
        <div className="">
          <img
            className="w-11 h-6"
            src="https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png"
            alt="image"
          />
          <span>Family House</span>
          <span>122 Property</span>
        </div>
      </div>
    </>
  );
};

export default Feature_Section;
