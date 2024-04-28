import { useSelector } from "react-redux";
import ProductList from "../MenuComponents/ProductList";
import { BackBtn } from "../UI/BackBtn/BackBtn";
import { MENU_PATH } from "../../consts/consts";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const FavouritesProducts = () => {
  const { setShowSearch } = useContext(AppContext);

  useEffect(() => setShowSearch(false));

  const favourites = useSelector((state) => state.favourites);
  console.log(favourites);

  if (!favourites.length) {
    return (
      <>
        <BackBtn link={MENU_PATH} />
        <div className="menu">
          <div className="notFound">
            <p>Додайте улюблені страви</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BackBtn link={MENU_PATH} />
      <div className="menu">
        <ProductList products={favourites} />
      </div>
    </>
  );
};

export default FavouritesProducts;
