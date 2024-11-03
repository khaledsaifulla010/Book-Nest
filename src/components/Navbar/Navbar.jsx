import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/book.ico";
import { IoPersonCircleOutline } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex items-center justify-between">
        <div className="navbar-start text-3xl font-black gap-2 items-center">
          <img className="w-6" src={logo} />

          <Link to={"/"}>BookNest</Link>
        </div>
        <div className="flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-bold text-lg ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/listedBooks"}>Listed Books</NavLink>
            <NavLink to={"/pagesToRead"}>Pages To read</NavLink>
          </ul>
        </div>

        <div className="dropdown dropdown-bottom mr-36">
          <div tabIndex={0} className="text-3xl">
            <IoPersonCircleOutline></IoPersonCircleOutline>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 border-2 rounded-box z-[1] space-y-4 font-bold text-base w-28 text-center p-2 shadow"
          >
            <Link to={"/login"}>Login</Link>
            <Link to={"/signUp"}>SignUp</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
