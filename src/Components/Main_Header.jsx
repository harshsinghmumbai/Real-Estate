import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer"

const Main_Header = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main_Header;
