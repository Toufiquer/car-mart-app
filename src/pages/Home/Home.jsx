import Divider from "../../components/Divider/Divider";
import Hero from "../../components/Hero/Hero";
import HomeCar from "../../components/HomeCar/HomeCar";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Divider />
      <HomeCar />
    </div>
  );
};

export default Home;
