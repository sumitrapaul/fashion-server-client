import { useEffect, useState } from "react";

import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div className="mb-16 mt-16">
      <h1 className="text-3xl text-bold text-center underline decoration-rose-400">
        Our Brands
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-16">
        {brands.map((brand) => (
          <Brand key={brands.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
