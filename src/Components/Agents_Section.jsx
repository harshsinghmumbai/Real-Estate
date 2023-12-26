import AgentSection_CardItems from "./AgentSection_CardItems";
import Agents_CardItems from "../API/Agents_CardItems";

const Agents_Section = () => {
  return (
    <>
      <div className="bg-[#f7f9fc] w-full h-[70rem]">
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

        <div className="grid grid-cols-3 grid-rows-3 gap-4 pl-28 pr-28   ">
          <AgentSection_CardItems Agents_CardItems={Agents_CardItems} />
        </div>
      </div>
    </>
  );
};

export default Agents_Section;
