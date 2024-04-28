import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const MenuPoints = () => {
  const { point, setPoint } = useContext(AppContext);

  return (
    <div className="menuPoints">
        <div onClick={() => setPoint('pizza')} className={ point === "pizza" ? "menuPoint check" : "menuPoint" }>
          <p>Піцца</p>
        </div>
        <div onClick={() => setPoint('juice')} className={ point === "juice" ? "menuPoint check" : "menuPoint" }>
          <p>Соки</p>
        </div>
        <div onClick={() => setPoint('cocktail')} className={ point === "cocktail" ? "menuPoint check" : "menuPoint" }>
          <p>Коктейлі</p>
        </div>
        <div onClick={() => setPoint('alco')} className={ point === "alco" ? "menuPoint check" : "menuPoint" }>
          <p>Алкоголь</p>
        </div>
        <div onClick={() => setPoint('wine')} className={ point === "wine" ? "menuPoint check" : "menuPoint" }>
          <p>Вина</p>
        </div>
        <div onClick={() => setPoint('bar')} className={ point === "bar" ? "menuPoint check" : "menuPoint" }>
          <p>Бар</p>
        </div>
      </div>
  );
};

export default MenuPoints;