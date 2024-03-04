import { FaArrowRightFromBracket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-around p-3 shadow-2xl w-screen z-10 bg-white fixed top-0 left-0  ">
        {/* -------------------logo of Website------------------ */}
        <img
          className="w-44 h-11 cursor-pointer"
          src="https://funny-daffodil-350bc9.netlify.app/images/logo.png"
          alt="logo"
        />

        {/* -------------------Navigation------------------ */}
        <nav className="w-[35rem]">
          <ul className="flex justify-evenly font-semibold font-sans text-lg mt-2 cursor-pointer ">
                <li className="hover:text-green-500">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
         <li className="hover:text-green-500">
              <NavLink to={"service"}>Service</NavLink>
            </li>
            <li className="hover:text-green-500">
              <NavLink to={"blog"}>Blog</NavLink>
            </li>
            <li className="hover:text-green-500">
              <NavLink to={"pricing"}>Pricing</NavLink>
            </li>
            <li className="hover:text-green-500">
              <NavLink to={"employee"}>Employe</NavLink>e
            </li>
            <li className="hover:text-green-500">
              <NavLink to={"package"}>Package</NavLink>
            </li>
    </ul>
        </nav>

        {/* ---------------------------Signin Section---------------------------- */}
        <div className="flex">
          <div className="flex mr-2 mt-2 justify-center">
            <p className="bg-green-500 rounded-full text-white w-6 h-6 flex justify-center mr-3">
              <span className="font-semibold">2</span>
            </p>
            <p className="">
              <span className="text-lg font-semibold "> My List</span>
            </p>
          </div>

          <button className="bg-green-500 p-2 rounded-lg flex w-[6.5rem] box-border">
            <span className="mt-1 mr-2 ml-2 text-white">
              <FaArrowRightFromBracket />
            </span>
            <span className="text-white font-semibold">Sign In</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
