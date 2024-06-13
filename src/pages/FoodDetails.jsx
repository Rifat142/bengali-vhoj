import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bg from "../assets/bg4.jpg"
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
// import Swal from 'sweetalert2'




const FoodDetails = () => {
  const {user} = useContext(AuthContext);
  const food = useLoaderData();
  const { name, _id , image ,price, made_by , food_origin, short_details,quantity,category, details ,email} = food;
  console.log( 'food-details',food);
  console.log(email)
  console.log(user.email)


  const handleClick = (event)=>{

    if(email === user.email){
      event.preventDefault()
      Swal.fire({
        title: "You can't buy your own product",
        text: "Thank you",
        icon: "error"
      });
      
    }
    
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
      <br /><br />
      <br />
  
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
          <div className=" text-2xl space-y-2 text-white font-nunito font-bold ">
          <div className="text-3xl">Details:{details}</div>
          <div> Prica: ${price}</div>
          <div>Category:{category}</div>
          <div>made-by: {made_by}</div>
          <div>food Origin:{food_origin}</div>
          <div>Recipe : {short_details}</div>
          <div>quantity:{quantity}</div>
          </div>
          <div className="card-actions justify-end">
            <Link to= {`/order-page/${_id}`}><button 
            onClick={handleClick}
            className="btn btn-warning">Place Order</button></Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FoodDetails;
