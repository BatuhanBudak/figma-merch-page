import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
    </div>
  );
};

export default Home;
