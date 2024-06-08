import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";

const Navbar = () => {

const {user,logOut , setLoading} =useContext(AuthContext);
console.log(user);
const handleSignOut = () => {
  setLoading(true);
  logOut()
    .then(() => {
      setLoading(false);
    })
    .catch((error) => {
      console.error("Sign-out error: ", error);
      setLoading(false);
    });
};




  const navbarTittles = (
    <div className="text-white flex gap-5 text-xl font-semibold">
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        Register
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        About Us
      </NavLink>
    </div>
  );
  return (
    <div>
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow   w-full"
            >
              {navbarTittles}
            </ul>
          </div>
          <a className="btn btn-ghost sm:text-lg lg:text-2xl text-white">Bengali Vhoj</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarTittles}</ul>
        </div>

        <div className="navbar-end">
          <div className=" sm:grid  lg:flex">
          <p className="  sm:m-auto  lg:mr-4 text-white">{user?user.displayName : 'my name'} </p>
          <div className="w-10 ">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
            src={user?user.photoUrl :"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
            />
          </div>
          </div>

          {user ? (
            <button
              onClick={handleSignOut}
              className="ml-2 btn btn-outline btn-warning"
            >
              Sign-out
            </button>
          ) : (
            <Link to="/login">
              <button className="ml-2 btn btn-outline btn-primary">Log-in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
