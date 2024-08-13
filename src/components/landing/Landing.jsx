import "./landing.css";

import MainMacbook from "../../../public/Apple page/main-macbook.png";

export default function Landing() {
  return (
    <div className="landing">
      <img src={MainMacbook} alt="" />
      <div className="text">
        <div className="product">
          <h2>Mac Book 19.5 pro M5 Chip</h2>
          <p>Pre sale now</p>
        </div>
        <button>Buy</button>
      </div>
    </div>
  );
}
