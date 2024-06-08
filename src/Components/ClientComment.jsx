import { NavLink } from "react-router-dom";
import Footer2 from "./Footer2";

const ClintComment = () => {
  return (
 <div className="bg-slate-100">

  <div className="text-center font-bold text-black text-3xl" > What our clients   say </div>
      <p className="text-black font-serif text-1xl text-center">Join us at The Evento and let's create unforgettable memories together!</p>
       <div className="grid sm:grid-col  lg:grid-cols-2  text-black bg-slate-100 gap-3 p-8">
      <div className=" border-double border-4 border-sky-500 shadow-2xl">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble text-black bg-gradient-to-r from-blue-200 to-blue-500">
            "What an amazing birthday party! The decorations were stunning, the
            food was delicious, and the entertainment was top-notch. Thank you,
            The Evento, for making my special day truly unforgettable!"
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble text-black  bg-gradient-to-r from-blue-200 to-blue-500">
            Thank you so much for your kind words! We're thrilled to hear that
            you had an amazing birthday party. It was our pleasure to be a part
            of your special day and help create unforgettable memories for you!
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      <div className="border-double border-4 border-sky-500 shadow-2xl ">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble  text-black bg-gradient-to-r from-blue-200 to-blue-500">
            "Our wedding was a dream come true, all thanks to The Evento team!
            From the breathtaking venue to the seamless coordination, everything
            was perfect. We can't thank you enough for making our big day so
            magical
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble  text-black bg-gradient-to-r from-blue-200 to-blue-500">
            "You're very welcome! It was an honor to be a part of your wedding
            day and help bring your dream wedding to life. Wishing you both a
            lifetime of love and happiness together!"
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
    
    </div>
      <div className="mx-auto flex justify-center pb-3">
        <NavLink to='/comment'> <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg ">See more</button></NavLink>
      
      </div>
     
 </div>
  );
};

export default ClintComment;
