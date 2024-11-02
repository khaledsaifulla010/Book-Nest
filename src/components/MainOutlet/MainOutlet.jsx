import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainOutlet = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-6">
     <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
  );
};

export default MainOutlet;
