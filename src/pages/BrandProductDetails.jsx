/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";
import toast from "react-hot-toast";


const BrandProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandProductDetails;
