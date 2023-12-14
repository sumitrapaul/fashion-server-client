import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandDetails = () => {
  const id = useParams();
  console.log(id);
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    fetch(`https://fashion-store-server-nf3cslkv2-sumitra-pauls-projects.vercel.app/products/${id.brand_name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const findBrand=data.find(brand => brand.id == id)
        setBrand(data);
      });
  }, [id]);
  return (
    <div>
      <div className="mb-16">
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item">
            <img
              className="w-[130px] md:w-[245px] lg:w-[410px]"
              src="https://i.ibb.co/gj8NpV2/image.png"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className=" w-[150px] md:w-[250px] lg:w-[425px]"
              src="https://i.ibb.co/MfS8QBV/image.png"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className=" w-[130px] md:w-[245px] lg:w-[410px]"
              src="https://i.ibb.co/mzK5Yqg/image.png"
              alt="Pizza"
            />
          </div>
        </div>
      </div>
      {brand.length == 0 ? (
        <p className="text-2xl text-center text-purple-500">
          NO BRAND ITEM FOUND!!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.map((singleBrand) => (
            <div key={singleBrand._id}>
              <div className="card w-96 bg-base-100 shadow-xl h-[450px] mb-16">
                <figure>
                  <img
                    className="h-[270px]"
                    src={singleBrand.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {singleBrand.brand_name}
                    <h4 className="badge badge-secondary">
                      {singleBrand.name}
                    </h4>
                  </h2>
                  <div className="flex gap-6">
                    <p>Type: {singleBrand.type}</p>
                    <p>Price: {singleBrand.price}</p>
                    <p>Rating: {singleBrand.rating}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <Link to={`/productDetails/${singleBrand._id}`}>
                      <button className="btn bg-gray-200">Details</button>
                    </Link>
                    <Link to={`/updateProduct/${singleBrand._id}`} state={{from:singleBrand.brand_name}}>
                      <button className="btn bg-gray-200">Update</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
