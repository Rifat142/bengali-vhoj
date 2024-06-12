import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";

const OrderPage = () => {
  const food = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log( 'user in order',user.displayName)

  const {
    name,
    _id,
    image,
    price,
    made_by,
    food_origin,
    short_details,
    quantity: defaultQuantity,
    category,
    details,
  } = food;
  // console.log( 'food',food);

  const handlePurchaseItem = (event) => {
    event.preventDefault();

    //    const name = form.name.value;
    //    console.log(name)

    const Items = new FormData(event.currentTarget);
    const name = Items.get("name");
    const quantity = Items.get("quantity");
    const buyer_name = Items.get("buyer_name");
    const email = Items.get("email");
    const price = Items.get("price");
    const date = Items.get("date");

    // product quantity

  




    if (quantity > defaultQuantity) {
      // alert('You cannot buy more than the default quantity.');
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't buy more than default quantity",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    if (quantity <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Quantity must be greater than 0",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    const addItem = { name, quantity, buyer_name, email, price, date };
    console.log( 'additem', addItem);
    // console.log(name , quantity, buyer_name,email,price,type,description )
    
    // sending to server side 

    fetch("http://localhost:5000/food-cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
       if(data.insertedId){
        Swal.fire({
            title: "Good job!",
            text: "Product added sucessfully",
            icon: "success"
          });
       }
      });








  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className=" px-40 py-16 ">
          <h1 className="mx-auto text-5xl font-bold text-center ">
            Purchase this item!
          </h1>
          <br />
          <form onSubmit={handlePurchaseItem}>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 ">
              <div>
                <span className="label-text">Name</span>
                <input
                  defaultValue={name}
                  type="text"
                  placeholder="Type here"
                  name="name"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">Quantity {defaultQuantity}</span>
                <input
                  // defaultValue={defaultQuantity}
                  required
                  type="text"
                  placeholder='type here'
                  name="quantity"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">Date</span>
                <input
                  required
                  type="date"
                  placeholder="Type here"
                  name="date"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">Price</span>
                <input
                  defaultValue={price}
                  type="text"
                  placeholder="Type here"
                  name="price"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">buyer Name</span>
                <input
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Type here"
                  name="buyer_name"
                  className="input input-bordered  w-full max-w-xs "
                  readOnly
                />
              </div>
              <div>
                <span className="label-text">Buyer email</span>
                <input
                  defaultValue={user?.email}
                  type="text"
                  placeholder="Type here"
                  name="email"
                  className="input input-bordered w-full max-w-xs "
                  readOnly
                />
              </div>
            </div>
            <br />

            <br />
            <button className="btn btn-block">Buy this </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderPage;
