import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bg from "../assets/food bg.jpg"
import Swal from 'sweetalert2'




const FoodDetails = () => {
  const food = useLoaderData();
  const { name, _id , image ,price, made_by , food_origin, short_details,quantity,category, details } = food;
  console.log(food);


  const handleClick = ()=>{
    Swal.fire({
      title: "Booking completed",
      text: "Thank you",
      icon: "success"
    });
  }

  return (
    
    <div className=""
    style={{
        backgroundImage:`url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
        <Navbar></Navbar>
      
  
      <div className="card lg:card-side bg-transparent backdrop-blur-lg shadow-xl ">
        <figure>
          <img
          className="w-[600px] h-[600px]"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title text-6xl text-white">{name}
            
          
          </h2>
          <div className="border text-2xl space-y-2 text-black font-nunito font-bold ">
          <div>{details}</div>
          <div> Prica: ${price}</div>
          <div>Category:{category}</div>
          <div>made-by: {made_by}</div>
          <div>food Origin:{food_origin}</div>
          <div>Recipe : {short_details}</div>
          <div>quantity:{quantity}</div>
          </div>
          <div className="card-actions justify-end">
            <button 
            onClick={handleClick}
            className="btn btn-warning">Place Order</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FoodDetails;
