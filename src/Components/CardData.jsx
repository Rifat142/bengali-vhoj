import { useEffect, useState } from "react";
import Card from "./card/Card";
import { NavLink } from "react-router-dom";





const CardData = () => {

    const [foods ,setFoods]= useState([]);
         useEffect(()=>{
          fetch(`http://localhost:5000/foods`)
          .then(res=>res.json())
          .then(data=> setFoods(data))
    
         } ,[])
        //  console.log(services)

    return (
       <div className="">
        
        <h1 className="font-bold text-7xl  text-white font-nunito text-center mb-5 p-4">
        Here we offer
            </h1>
        <div className="grid  sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-3  md:pl-2 lg:pl-8   ">
            {
                foods.slice(0,6).map(food =><Card food={food}></Card> )
            },
          
        </div>
       <NavLink to={'/all-products'}><div className="flex justify-center"> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-amber-400 text-white ">Show all </button></div>
      
       
       </NavLink>
       </div>
    );
};
export default CardData;

