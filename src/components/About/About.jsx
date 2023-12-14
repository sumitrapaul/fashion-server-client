import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="mb-16">
      <h1 className="text-3xl text-bold text-center mb-8 underline decoration-rose-400">
        About Us
      </h1>
      <div className="flex flex-col w-full lg:flex-row mt-16">
        <div
          data-aos="zoom-in-down"
          className="grid flex-grow h-32 card bg-rose-50 rounded-box place-items-center mb-6"
        >
          <h1 className="text-2xl font-bold">Brand Story</h1>
          <p className="px-4">
            Our journey began with a simple yet powerful idea: to offer our
            customers a unique and <br /> unforgettable fashion experience that
            goals beyond the latest trends.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div
          data-aos="zoom-in-up"
          className="grid flex-grow h-32 card bg-rose-50 rounded-box place-items-center"
        >
          <h1 className="text-2xl font-bold">Brand Mission</h1>
          <p className="px-4">
            Our mission is to empower individuals to embrace their unique style,{" "}
            <br />
            discover their inner confidence,and express themselves through
            fashion.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row mt-12">
        <div
          data-aos="zoom-in-down"
          className="grid flex-grow h-32 card bg-rose-50 rounded-box place-items-center"
        >
          <h1 className="text-2xl font-bold">Core Values</h1>
          <p className="px-4">
            `Quality,sustainability and inclusivity are the heart of our
            brand,crafting fashion thats timeless,responsible and welcoming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
