import Modal from "../modal/Modal";
import ServiceImage from "./ServiceImage";
import "./service.css";
import { useState } from "react";

export default function Service({ service }) {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <div className="service" onClick={() => setActiveModal(true)}>
        <div className="title">
          <ServiceImage title={service.title} />
          <h2>{service.title}</h2>
        </div>
        <div className="text">
          <p>{service.description}</p>
        </div>
        <button onClick={() => setActiveModal(true)}>Read More</button>
      </div>

      {activeModal ? (
        <Modal service={service} setActive={setActiveModal} />
      ) : undefined}
    </>
  );
}
