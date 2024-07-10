import "./App.css";
import Features from "./components/Features";
import Implementation from "./components/Implementation";
import NetworkHero from "./components/NetworkHero";
import LogoSlider from "./components/LogoSlider";
import Whychoose from "./components/Whychoose";
import Appdevcard from "./components/Card";
import DevelopmentServices from "./container/DevelopmentServices";

function App() {
  return (
    <>
      <NetworkHero />
      <DevelopmentServices/>
      {/* <Implementation />
      <Features />
      <LogoSlider />
      <Whychoose/> */}
    </>
  );
}

export default App;
