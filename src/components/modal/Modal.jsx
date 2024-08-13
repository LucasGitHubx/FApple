import "./modal.css";

export default function Modal({ service, setActive }) {
  return (
    <div className="modal">
      <div className="message">
        <p>{service.text}</p>
        <button onClick={() => setActive(false)}>Close</button>
      </div>
    </div>
  );
}
