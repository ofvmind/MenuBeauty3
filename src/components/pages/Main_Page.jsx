import { NavLink } from "react-router-dom";
import interior1 from "../../assets/images/interior/1.jpg";
import interior2 from "../../assets/images/interior/2.webp";
import interior3 from "../../assets/images/interior/3.jpg";
import Carousel from "../UI/Carousel/Carousel";
import { FollowBtn } from "../UI/followBtn/FoollowBtn";
import { MENU_PATH } from "../../consts/consts";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useSelector } from "react-redux";

const Main_Page = () => {
  const { point, setPoint, setShowSearch, setShowInput } = useContext(AppContext);

  useEffect(() => {
    setPoint('');
    setShowSearch(false);
    setShowInput(false);
  }, []);

  return (
    <>
      <Carousel />
      <div className="main__page">
        <div className="restoranName">
          <div className="container">
            <p className="restoran">Choko</p>
            <p className="type">Ресторан</p>
          </div>
        </div>
        <div className="p">
          <p>MENU</p>
        </div>
        <div className="container">
          <div className="points">
            <NavLink onClick={() => setPoint('pizza')} to="/menu" className="point"><p>Піцца</p><FollowBtn /></NavLink>
            <NavLink onClick={() => setPoint('juice')} to="/menu" className="point"><p>Соки</p><FollowBtn /></NavLink>
            <NavLink onClick={() => setPoint('cocktail')} to="/menu" className="point"><p>Коктейлі</p><FollowBtn /></NavLink>
            <NavLink onClick={() => setPoint('alco')} to="/menu" className="point"><p>Алкоголь</p><FollowBtn /></NavLink>
            <NavLink onClick={() => setPoint('wine')} to="/menu" className="point"><p>Вина</p><FollowBtn /></NavLink>
            <NavLink onClick={() => setPoint('bar')} to="/menu" className="point"><p>Бар</p><FollowBtn /></NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Page;
