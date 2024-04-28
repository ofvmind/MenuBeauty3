import icon from "../../../assets/images/icons/search.svg";
import cl from "./FilterIcon.module.css";

export const FilterIcon = (props) => {
  return (
    <>
      <img {...props} className={cl.icon} src={icon} alt="not found" />
    </>
  );
};