import { services } from "../../data/services";
import Service from "./Service";
import "./renderServices.css";

export default function RenderServices() {
  return (
    <div className="services">
      {services.map((service) => {
        return <Service service={service} />;
      })}
    </div>
  );
}
