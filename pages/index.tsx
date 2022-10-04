import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Intro from "../components/Intro";
import Products from "../components/Products";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Intro />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
