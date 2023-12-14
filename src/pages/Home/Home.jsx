import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Brands from "../../components/Brands/Brands";
import Category from "../../components/Category/Category";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
      <Category></Category>
      <About></About>
    </div>
  );
};

export default Home;
