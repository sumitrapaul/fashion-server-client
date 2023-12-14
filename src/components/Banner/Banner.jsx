const Banner = () => {
  return (
  <div className="mb-16">
      <div
      className="hero h-[600px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/pfLjD9T/image.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-90 bg-white"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-black">Fashion <span className=" text-rose-700">SALE</span></h1>
          <p className="mb-5 text-black text-2xl">
           Discover your style with <span className=" text-rose-500 font-semibold">fashion and apparel trends</span>
          </p>
          <button className="btn bg-rose-500 text-white">Sale</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
