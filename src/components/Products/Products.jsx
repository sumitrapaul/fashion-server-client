import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="mb-16">
      <h1 className="text-3xl text-bold text-center mb-8 underline decoration-rose-400">
        Elegance Unveiled
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        <div
          data-aos="zoom-in-down"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/xqybTLk/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          data-aos="flip-up"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/18ZKp2b/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          data-aos="flip-down"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/FbKY7sK/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          data-aos="fade-up"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/bQFs0Gk/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          data-aos="fade-down"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/VWgFdyV/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          data-aos="fade-up"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/XVgt5pc/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          data-aos="fade-down"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/S0xPJPD/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          data-aos="zoom-in-down"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/V9dcSWC/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          data-aos="zoom-in-up"
          className="card card-compact w-full bg-rose-100 shadow-xl"
        >
          <figure>
            <img
              className="h-[200px]"
              src="https://i.ibb.co/35XG2KD/image.png"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Products;
