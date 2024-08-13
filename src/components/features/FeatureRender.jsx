import { features } from "../../data/features";
import Feature from "./Feature";
import "./featureRender.css";

export default function FeatureRender() {
  return (
    <div className="features">
      {features.map((feature, index) => {
        return <Feature feature={feature} key={index} />;
      })}
    </div>
  );
}
