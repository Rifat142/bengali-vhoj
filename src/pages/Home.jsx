import { useEffect } from "react";

import CardData from "../Components/CardData";
import ClintComment from "../Components/ClientComment";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";
import Welcome from "../Components/Welcome";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "../Components/Slider";
import bg from "../assets/food bg.jpg"
import bg2 from "../assets/food bg 2.jpg"
import bg3 from "../assets/bg3.jpg"
import bg4 from "../assets/bg4.jpg"

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

      <div data-aos="fade-right">
        <CardData></CardData>
      </div>
      <div data-aos="fade-up">
        <ClintComment></ClintComment>
      </div>

      <div data-aos="zoom-in">
        <Footer></Footer>
      </div>
      </div>
    </div>
  );
};

export default Home;
