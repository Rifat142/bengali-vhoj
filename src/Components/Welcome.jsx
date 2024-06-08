import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="">
      <div className="hero h-1/2  bg-slate-300 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src="https://i.ibb.co/vmb98tg/aranxa-esteve-S5-DEUg2y-UVU-unsplash.jpg"
            className=" lg:w-2/4 sm:w-full   shadow-2xl lg:rounded-full ring ring-primary ring-offset-lime-600 ring-offset-2 "
          />
          <div>
            <h1 className="text-5xl font-bold text-black">
              Welcome to The Eventor! 🎉🎉
            </h1>
            <p className="py-6 text-black text-lg font-semibold">
              Certainly! Here's a welcome message for your customers: At The
              Evento, we believe in turning your dreams into unforgettable
              experiences. Whether you're celebrating a milestone, planning a
              special occasion, or hosting a corporate event, we're here to make
              it extraordinary.
            </p>
            <NavLink to="/about-us">
              <button className="btn btn-primary text-white">About us</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
