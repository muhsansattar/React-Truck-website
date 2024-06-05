import HeroSection from "./Components/HeroSection";
import Form from "./Components/Form";
import Map from "./Components/Map";
import CardComp from "./Components/CardCom";
import Companies from "./Components/Companies";
import ImageSlider from "./Components/ImageSlider";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CardComp />
      <Companies />
      <Map />
      <ImageSlider />
      <Form />
    </>
  );
};
export default Home;
