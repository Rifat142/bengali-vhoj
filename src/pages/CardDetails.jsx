import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Swal from 'sweetalert2'

const CardDetails = () => {
  const handleClick = ()=>{
    Swal.fire({
      title: "Booking completed",
      text: "Thank you",
      icon: "success"
    });
  }

  const events = useLoaderData();
  const { id } = useParams();

  console.log('events',events, id);
  const event = events.find((event) => event.id === parseInt(id));
  console.log("this is event ",event);

  return (
    <div>
   
      <Navbar></Navbar>
      <div>
       
        <div className="hero min-h-screen bg-gradient-to-r from-cyan-200 to-blue-400 ... text-black glass ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={event.image}
              className="max-w-sm rounded-lg shadow-4xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{event.name}</h1>
              <p className="py-6 font-semibold text-lg text-balance">
                {event.bigDescription}.
              </p>
              <p className="font-bold text-3xl text-black">Price:{event.price}</p>
              <br />

              
              <button 
              onClick={handleClick}
              
              className="btn btn-primary text-white">Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CardDetails;
