import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const newProduct = {
      name,
      brand_name,
      type,
      price,
      description,
      rating,
      image,
    };

  

    //send data to the server
    fetch("https://fashion-store-server-three.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Product added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-base-100 p-6">
      <h2 className=" text-center text-4xl font-bold text-purple-700 pt-8 pb-8">
        Add Product
      </h2>
      <form onSubmit={handleAdd}>
        <div className=" md:flex gap-5 justify-center">
          <div className="form-control md:w-1/2 mb-6">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image"
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
                className="select input input-bordered w-full"
              >
                <option>dress</option>
                <option>shoes</option>

                <option>saree</option>
                <option>bag</option>
                <option>jewellery</option>
                <option>watch</option>
                <option>belt</option>
                <option>wallet</option>
                <option>cap</option>
                <option>decoration</option>
                <option>Sunglass</option>
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
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Short Description"
                name="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-block bg-purple-500 text-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
