import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Table from './Table';

const Cart = () => {
    const [carts , setCart] = useState([]);

    
    useEffect(()=>{
     fetch(`http://localhost:5000/food-cart`)
     .then(res=>res.json())
     .then(data=> setCart(data))

    } ,[])
    return (
        <div>
            <Navbar></Navbar>
            This is my cart 
            <div className="bg-slate-900  text-white">
            {
              carts.map(cart=> <Table cart={cart}
              carts = {carts}
              setCart = {setCart}
              ></Table>)
            }
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;