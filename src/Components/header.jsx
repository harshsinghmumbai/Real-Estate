const Header = () => {
  return (
    <>
      <header className="border-2 border-black flex justify-around">
        {/* -------------------logo of Website------------------ */}
        <img
          className="w-44 h-11 cursor-pointer"
          src="https://funny-daffodil-350bc9.netlify.app/images/logo.png"
          alt="logo"
        />

        {/* -------------------Navigation------------------ */}
        <nav className="border-2 border-black w-[30rem]">
          <ul className="flex justify-between font-semibold font-sans text-lg mt-2">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* ---------------------------Signin Section---------------------------- */}
        <div className="">
          <div className="border-2 border-black">
            <p className="bg-green-500 rounded-full text-white w-3 h-3">
              2
            </p>
            <span>My List</span>
          </div>
          <button className="bg-green-500 p-1 rounded-lg">
            <span></span>
            <span className="text-white font-semibold">Sign In</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
