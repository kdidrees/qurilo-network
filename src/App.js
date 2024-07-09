import "./App.css";
import Features from "./components/Features";
import Implementation from "./components/Implementation";
import NetworkHero from "./components/NetworkHero";
import LogoSlider from "./components/LogoSlider";

function App() {
  return (
    <>
      <NetworkHero />
      <Implementation />
      <Features />
      <LogoSlider />
    </>
  );
}

export default App;
