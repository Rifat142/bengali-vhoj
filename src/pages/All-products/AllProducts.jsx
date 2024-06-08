import React from 'react';
import { useLoaderData } from 'react-router-dom';

import AllProductsCard from './AllProductsCard';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import bg2 from'../../assets/bg3.jpg'

const AllProducts = () => {
    const food = useLoaderData();
    console.log(food);
    
    
    return (
        <div className=''
        
        style={{
            backgroundImage:`url(${bg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <Navbar></Navbar>
           <div className='text-center p-3  w-2/3 mx-auto text-white font-nunito mb-5'>
           <h1 className='text-4xl font-bold mb-4' >Discover Our Exquisite Bengali Delicacies</h1>
           <p className='text-xl  '>Welcome to Bengali Bhoj, where we bring the rich, traditional tastes of Bengal to your table. Savor our delicious fish curries, fragrant biryanis, and sweet delights in a warm, inviting atmosphere.</p>
           </div>
           <div className='grid  sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-3  md:pl-2 lg:pl-8 ' >
           {
                food.map(food=> <AllProductsCard food={food}></AllProductsCard>)
            }

           </div>
           <Footer></Footer>
        </div>
    );
};

export default AllProducts;