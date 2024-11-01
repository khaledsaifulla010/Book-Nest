import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/book.ico";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex items-center justify-between">
        <div className="navbar-start text-3xl font-black gap-2 items-center">
          <img className="w-6" src={logo} />

          <Link to={"/"}>BookNest</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-bold text-lg ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/listedBooks"}>Listed Books</NavLink>
            <NavLink to={"/pagesToRead"}>Pages To read</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
