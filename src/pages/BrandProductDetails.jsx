/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";


const BrandProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    fetch(`https://fashion-store-server-nf3cslkv2-sumitra-pauls-projects.vercel.app/productDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  const handleCart = () => {
    const cartItem = {
      email: user.email,
      product: product.brand_name,
      price: product.price,
      image: product.image,
      rating: product.rating,
    };

    fetch("https://fashion-store-server-nf3cslkv2-sumitra-pauls-projects.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added successfully!!");
          // n(`/details/${from}`);
          navigate('/carts')
        }
      });
  };

  const handleApply = (_id) => {
     document.getElementById("my_modal_1").showModal();
    
  };

  const onSubmit = (result) => {
    
      result.brand_name= product.brand_name;
      result.price= product.price;
      result.image= product.image,

    fetch("https://fashion-store-server-nf3cslkv2-sumitra-pauls-projects.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review added successfully!!");
          navigate('/reviews')
        }
      });
  };


  return (
    <div className="mb-12 flex justify-center items-center">
      {product && (
        <div className="card card-side bg-base-100 shadow-xl w-[600px] h-[400px]">
          <figure>
            <img
              className="h-[350px] w-[450px]"
              src={product.image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brand_Name: {product.brand_name}</h2>
            <div className="flex">
              <p className="mb-8">
                <span className="font-bold">Price:</span> {product.price}
              </p>
              <p>
                <span className="font-bold">Rating:</span> {product.rating}
              </p>
            </div>
            <p>{product.description}</p>
            <div className="card-actions justify-start">
              <button onClick={handleCart} className="btn bg-rose-200">
                Add to Cart
              </button>
              <button onClick={() => handleApply()} className="btn bg-rose-200">
                Add to Review
              </button>
              
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Brand Name
                  </label>

                  <input
                    type="text"
                    defaultValue={product.brand_name}
                    {...register("brand_name")}
                    className="bg-gray-300 px-5 py-2 rounded"
                  />

                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    {...register("name")}
                    readOnly
                    className="bg-gray-300 px-5 py-2 rounded"
                  />
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    defaultValue={user?.email}
                    {...register("email")}
                    readOnly
                    className="bg-gray-300 px-5 py-2 rounded"
                  />

                  
                 
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Review
                  </label>
                  <textarea
                    {...register("message")}
                    type="text"
                    placeholder="message"
                    className="bg-gray-300 px-5 py-2 rounded"
                  />

                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-block bg-gradient-to-r from-cyan-950 to-emerald-900 text-white"
                  />
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandProductDetails;
