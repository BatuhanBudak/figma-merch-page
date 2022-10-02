import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Intro from "../components/Intro";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Intro />
    </div>
  );
};

export default Home;
