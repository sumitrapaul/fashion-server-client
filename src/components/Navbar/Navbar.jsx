/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((res) => toast.success("Users logged out successfully"))
      .catch((error) => toast.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="bg-rose-600 text-white mx-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className="bg-rose-600 text-white mx-2">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink to="/carts" className="bg-rose-600 text-white mx-2">
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews" className="bg-rose-600 text-white mx-2">
          My Review
        </NavLink>
      </li>
    
    </>
  );
  return (
    <div className="navbar bg-rose-100 mt-8 mb-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 md:w-24 h-12"
            src="https://i.ibb.co/QNbxm3j/image-3-removebg-preview.png"
            alt=""
          />
          <h4 className="font-semibold text-sm md:text-2xl">FashionFinesse</h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end top-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm mb-1">{user.displayName}</button>
              </li>
              <li>
                <button onClick={handleSignOut} className="btn btn-sm">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn my-4 lg:mx-32">Login</button>
          </Link>
        )}
        <ThemeSwitcher/>
      </div>
      
    </div>
  );
};

export default Navbar;
