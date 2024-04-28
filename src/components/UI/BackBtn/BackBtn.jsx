import { Link } from "react-router-dom";
import icon from "../../../assets/images/icons/back.png";
import cl from "./BackBtn.module.css";

export const BackBtn = (props) => (
  <Link to={props.link}><img {...props} className={cl.btn} src={icon} alt="not found" /></Link>
);