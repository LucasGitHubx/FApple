import "./comparative.css";

import newMacBook from "../../../public/Apple page/image1.png";
import oldMacBook from "../../../public/Apple page/image2.png";

export default function Comparatives() {
  return (
    <div className="comparatives">
      <div className="new-macbook macbook">
        <img src={newMacBook} alt="New macbook" />
        <div className="text">
          <h2>MacBook 19.5</h2>
          <p>With M5 Chip</p>
        </div>
        <ul>
          <li>2TB Storage</li>
          <li>16GB Unified memory</li>
          <li>16-inch display</li>
        </ul>
      </div>

      <div className="old-macbook macbook">
        <img src={oldMacBook} alt="old macbook" />
        <div className="text">
          <h2>MacBook 19</h2>
          <p>With M4 Chip</p>
        </div>
        <ul>
          <li>1TB Storage</li>
          <li>8GB Unified memory</li>
          <li>14-inch display</li>
        </ul>
      </div>
    </div>
  );
}
