import cl from "./Tabs.module.scss";
import STAR from "../../../assets/images/icons/favos.svg";
import { Link } from "react-router-dom";
import { FAVOURITE_PRODUCTS_PATH } from "../../../consts/consts";

export const Tabs = () => {
  return (
    <div className={cl.tabs}>
      <div className={cl.tab}>
        <img src={STAR} className={cl.star} alt="" />
        <Link className={cl.p} to="/">
          <p>Популярне</p>
        </Link>
      </div>
      <div className={cl.tab}>
        <span>&#9829;</span>
        <Link className={cl.p} to={FAVOURITE_PRODUCTS_PATH}>
          <p>Улюблене</p>
        </Link>
      </div>
    </div>
  );
};
