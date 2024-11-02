import { Outlet } from "react-router-dom";
import AllBooks from "../AllBooks/AllBooks";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-6">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Banner></Banner>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Home;
