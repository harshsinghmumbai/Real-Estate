const Question_Component = () => {
  return (
    <>
      <div className="w-full bg-green-500 h-40">
        <div className="w-[77rem] flex justify-center items-center h-full">
          <p className="mr-28">
            <h1 className="text-5xl font-bold text-white">
              Do You Have Questions ?
            </h1>
            <p className="text-xl font-semibold text-white">
              We'll help you to grow your career and growth.
            </p>
          </p>

          <p>
            <button className="text-green-500 bg-white border rounded-3xl shadow-inner p-4 text-xl font-semibold">
              Contact US Today
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Question_Component;
