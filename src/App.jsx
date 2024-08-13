import Comparatives from "./components/comparatives/Comparatives";
import FeatureRender from "./components/features/FeatureRender";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import RenderServices from "./components/service/RenderServices";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Landing />
      <FeatureRender />
      <Comparatives />
      <RenderServices />
      <Footer />
    </div>
  );
}
