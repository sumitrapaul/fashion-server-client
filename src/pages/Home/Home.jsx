import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Brands from "../../components/Brands/Brands";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
      <About></About>
    </div>
  );
};

export default Home;
