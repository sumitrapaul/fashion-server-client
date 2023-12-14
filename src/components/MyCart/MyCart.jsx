/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [cart, setCart] = useState([]);
  const navigate=useNavigate()
  // const { _id } = useParams();
  // console.log(_id);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/carts?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    // console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(_id)

        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire("Your product has been deleted.", "success");

              const remaining = cart.filter((pro) => pro._id !== _id);
              setCart(remaining);
             
            }
          });
      }
    });
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl text-center font-bold underline decoration-rose-300">
        My Cart
      </h2>

      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((cartItem) => (
          <div key={cartItem._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <p>Email: {user ? user.email : ""}</p>
              <figure>
                <img className="h-[250px]" src={cartItem.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cartItem.product}</h2>
                <p>{cartItem.price}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(cartItem._id)}
                    className="btn bg-rose-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
