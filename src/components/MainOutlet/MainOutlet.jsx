import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const MainOutlet = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-6">
      <Home></Home>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainOutlet;
