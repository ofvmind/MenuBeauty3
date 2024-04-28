import { useContext, useEffect, useState } from "react";
import { Burger } from "../UI/Burger/Burger";
import "./Heade.css";
import { AppContext } from "../../context/AppContext";
import { FilterIcon } from "../UI/FilterIcon/FilterIcon";
import { CloseBtn } from "../UI/CloseBtn/CloseBtn";
import { FirebaseContext } from "../../context/FirebaseContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  //firebase API
  const { auth, app } = useContext(FirebaseContext);
  const googleProvider = new GoogleAuthProvider();
  const [user] = useAuthState(auth);
  //-----

  const authorize = async () => {
    const { user } = await signInWithPopup(auth, googleProvider);
    console.log(user);
  };

  const {
    point,
    setPoint,
    searchQuery,
    setSearchQuery,
    showSearch,
    setShowSearch,
    showInput,
    setShowInput,
  } = useContext(AppContext);

  const [showNav, setShowNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const burgerMenu = () => {
    if (showNav) {
      setShowNav(false);
      document.querySelector(".ambient").style.animation = "hide .4s";
      setTimeout(() => setShadow(false), 350);
    } else {
      setShowNav(true);
      document.querySelector(".ambient").style.animation = "show .4s";
      setShadow(true);
    }
  };

  useEffect(() => {
    if (showNav) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [showNav]);

  useEffect(() => {
    if (showInput) document.querySelector("input").focus();
    else setSearchQuery("");
  }, [showInput]);

  return (
    <div className="header">
      <div className="header__items">
        {showSearch && <FilterIcon onClick={() => setShowInput(!showInput)} />}
        {showInput && (
          <input
            className="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
        <Burger show={showNav} onClick={burgerMenu} />
      </div>
      <div className={shadow ? "ambient active" : "ambient"} />
      <div className={showNav ? "header__nav active" : "header__nav"}>
        <div className="containerList">
          {user ? (
            <p className="auth">{user.displayName}</p>
          ) : (
            <p onClick={() => authorize()} className="auth">
              Авторизуватись
            </p>
          )}
          {!user ? (
            <p className="why">
              <span className="accent">Авторизуйтесь</span>, для зручності
              користування, та щоб завжди бути у курсі подій
            </p>
          ) : (
            <p style={{textAlign: "center"}} className="why">
              <span className="accent">Вітаємо вас у ChokoCaffa</span>
            </p>
          )}
          <p className="bPoint">Контакти</p>
          <ul className="headerList">
            <li className="li">Verchniy Val 133</li>
            <li className="li">
              <a href="tel: +38(098)-234-00-31">+38(098)-234-00-31</a>
            </li>
            <li className="li">
              <a href="tel: +38(096)-234-01-31">+38(096)-234-01-31</a>
            </li>
          </ul>
          <p className="bPoint">Пошта</p>
          <ul className="headerList">
            <li className="li">
              <a href="mailto: chokoCaffa@gmail.net">chokoCaffa@gmail.net</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
