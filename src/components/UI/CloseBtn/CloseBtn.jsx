import icon from "../../../assets/images/icons/close.png";
import cl from "./CloseBtn.module.css";

export const CloseBtn = (props) => {
  return (
    <img {...props} src={icon} alt="not found" className={cl.icon} />
  );
};