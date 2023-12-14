// /* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const location = useLocation()
  const { from } = location.state
  console.log(from)
  console.log(id);
  const navigate=useNavigate()
  const [product, setProduct] = useState({});
  console.log(product);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const updatedProduct = { name, brand_name, type, price, rating, image };

    console.log(updatedProduct);

    //send data to the server
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Product updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(`/details/${from}`)
        }
      });
  };

  return (
    <div className="bg-base-100 p-6">
      <h2 className=" text-center text-4xl font-bold text-purple-700 pt-8 pb-8">
        Update Product
      </h2>
      <form onSubmit={handleUpdate}>
        <div className=" md:flex gap-5 justify-center">
          <div className="form-control md:w-1/2 mb-6">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image"
                defaultValue={product.image || ""}
                name="image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                defaultValue={product.name || ""}
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" md:flex gap-5 justify-center">
          <div className="form-control md:w-1/2 mb-6">
            <label className="label">
              <span className="label-text">Brand_Name</span>
            </label>
            <label className="select-bordered input-group">
              <select
                name="brand_name"
                defaultValue={product.brand_name || ""}
                className="select input input-bordered w-full"
              >
                <option>Nike</option>
                <option>Adidas</option>

                <option>Gucci</option>
                <option>Zara</option>

                <option>H&M</option>
                <option>Levis</option>
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="select-bordered input-group">
              <select
                name="type"
                defaultValue={product.type || ""}
                className="select input input-bordered w-full"
              >
                <option>dress</option>
                <option>shoe</option>

                <option>saree</option>
                <option>bag</option>

                <option>jewellery</option>
                <option>belt</option>
                <option>wallet</option>
              </select>
            </label>
          </div>
        </div>
        <div className=" md:flex gap-5 justify-center">
          <div className="form-control md:w-1/2 mb-6">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                defaultValue={product.price || ""}
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Rating"
                defaultValue={product.rating || ""}
                name="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Submit"
          className="btn btn-block bg-purple-500 text-white"
        />
      </form>
    </div>
  );
};

export default Update;
