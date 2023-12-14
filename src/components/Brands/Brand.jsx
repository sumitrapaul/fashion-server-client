/* eslint-disable no-unused-vars */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  const { id, brand_name, brand_image } = brand;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Link to={`/details/${brand_name}`}>
      <div data-aos="zoom-in-down" className="card w-96 shadow-xl">
        <figure className="lg:px-10 pt-10">
          <img src={brand_image} alt="Shoes" className="rounded-xl h-[270px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold">{brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
