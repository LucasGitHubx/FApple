import Shield from "../../../public/Apple page/shield.png";
import Phone from "../../../public/Apple page/phone.png";
import Car from "../../../public/Apple page/car.png";

export default function ServiceImage({ title }) {
  return (
    <>
      {title === "Security" && <img src={Shield} alt="Security shield" />}
      {title === "Fast delivery" && <img src={Car} alt="Fast delivery car" />}
      {title === "Customer service" && (
        <img src={Phone} alt="Customer service phone" />
      )}
    </>
  );
}
