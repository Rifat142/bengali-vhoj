import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div
        className="text-center "
        style={{
          width: "full",
          height: "384px",
          backgroundImage: `url('https://i.ibb.co/GxTgz4F/first-bg-2.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-center  font-bold   sm:text-5xl   lg:text-6xl text-cyan-50 pt-10">
          Cheers to love! Join us in honoring another year of cherished memories
          and endless love.
        </h1>

        <NavLink to="/register">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-pink-500 hover:to-yellow-500 ... self-center   sm:m-auto  lg:mt-20  ">
            Register Now!
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
