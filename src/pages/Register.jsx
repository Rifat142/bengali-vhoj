import { useContext } from "react";
import Footer2 from "../Components/Footer2";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Authprovider/Authprovider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const Register = () => {
  const { createUser, user } = useContext(AuthContext);
  const handleReg = () => {
    Swal.fire({
      title: "Registration completed",
      icon: "success",
      html: `
         <b>go to home page </b>,
        
        
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <a href='/'>Home page </a>
      `,
     
     
    });
  };
  
                  



  const hadleRegister = (e) => {
    e.preventDefault();
    const regForm = new FormData(e.currentTarget);
    const name = regForm.get("name");
    const photo = regForm.get("url");
    const password = regForm.get("password");
    const email = regForm.get("email");
    
    if(password.length<6){
       return Swal.fire("Password is less than 6 characters");

    }
    else if (!/[A-Z]/.test(password)){
       return Swal.fire("password don't have a capital letter");
    }
    else if (!/[^a-zA-Z0-9]/.test(password)){
      return  Swal.fire("password don't have a special character");
    }





    // console.log(name)
    // create user
    createUser(email, password)
      .then((result) => {
        handleReg();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });

        // console.log(result.user);
      })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          
        });
        // console.log(error,errorCode,errorMessage)
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-white ">
        <div className="hero-content grid">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black">Register Here!</h1>
          </div>
          <div className="card  sm:w-full lg:w-96  max-w-sm shadow-2xl bg-blue-300">
            <form onSubmit={hadleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered bg-slate-50"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="url"
                  placeholder="url"
                  className="input input-bordered bg-slate-50"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-slate-50"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-slate-50"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-black"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-black">Register</button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Register;
