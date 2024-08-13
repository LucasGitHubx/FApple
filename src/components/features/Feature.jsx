import "./feature.css";

export default function Feature({ feature }) {
  return (
    <div className="feature">
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}
