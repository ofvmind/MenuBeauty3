import burger from "../../../assets/images/icons/burger.svg";
import close from "../../../assets/images/icons/close.png";
import cl from "./Burger.module.css";

export const Burger = ({ show, ...props }) => {
  return (
    <>
      {show ? (
        <img {...props} src={close} alt="not found" className={cl.burger} />
      ) : (
        <img {...props} src={burger} alt="not found" className={cl.burger} />
      )}
    </>
  );
};
