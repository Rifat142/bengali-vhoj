import { useEffect } from "react";

import CardData from "../Components/CardData";

import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "../Components/Slider";

import bg2 from "../assets/food bg 2.jpg"


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 200,
    });
    AOS.refresh();
  }, []);

  return (
    <div 
    style={{
      // backgroundImage: `url(https://i.ibb.co/6B3CxkX/premium-photo-1705056547423-de4ef0f85bf7.jpg)`,
      backgroundImage:`url(${bg2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    

      
      
    }}
    
    >
      <div>
      <Navbar></Navbar>
      <div data-aos="fade-down">
        
        <Slider></Slider>
      </div>

      <div data-aos="zoom-in-down">
        {/* <Welcome></Welcome> */}
      </div>

      <div data-aos="fade-up">
        <CardData></CardData>
      </div>
      <div data-aos="fade-right">
        
      </div>

      <div data-aos="zoom-in">
        <Footer></Footer>
      </div>
      </div>
    </div>
  );
};

export default Home;
