import appleLogo from "../../../public/Apple page/Apple.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <h1>
        <img src={appleLogo} alt="apple logo" />
      </h1>
      <h2>Apple</h2>
    </header>
  );
}
