import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./MenuPage.scss";
import {
  pizza,
  cocktail,
  juice,
  wine,
  strongAlco,
  bar_menu,
} from "../MenuComponents/products";
import ProductList from "../MenuComponents/ProductList";
import MenuPoints from "../MenuComponents/MenuPoints";
import { useProductFilter } from "../../hooks/useProductFilter";
import { Link, NavLink } from "react-router-dom";
import { FAVOURITE_PRODUCTS_PATH, MAIN_PATH } from "../../consts/consts";
import { BackBtn } from "../UI/BackBtn/BackBtn";
import { useSelector } from "react-redux";
import { Tabs } from "../UI/Tabs/Tabs";

const stackProducts = [...pizza, ...cocktail, ...juice, ...wine, ...strongAlco];

const Menu_Page = () => {
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

  const searchedProducts = useProductFilter(stackProducts, searchQuery);

  const pizzaRef = useRef();
  const juiceRef = useRef();
  const cocktailRef = useRef();
  const strongAlcoRef = useRef();
  const wineRef = useRef();

  const barRef = useRef();

  const focusOn = (ref) => {
    ref.current.focus();
  };

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  console.log(point);

  useEffect(() => {
    setShowSearch(true);
  }, []);

  useEffect(() => {
    if (searchQuery) setPoint("");
    else if (!point) setPoint("pizza");
  }, [searchQuery, point]);

  return (
    <div className="menu" onClick={() => setShowInput(false)}>
      <BackBtn link={MAIN_PATH} />
      { !showInput && <>
        <Tabs />
        <MenuPoints />
      </> }
      {searchQuery && <ProductList products={searchedProducts} />}
      {point === "pizza" && (
        <ProductList tabIndex={15} reff={pizzaRef} products={pizza} />
      )}
      {point === "juice" && (
        <ProductList tabIndex={16} reff={juiceRef} products={juice} />
      )}
      {point === "cocktail" && (
        <ProductList tabIndex={17} reff={cocktailRef} products={cocktail} />
      )}
      {point === "alco" && (
        <ProductList tabIndex={18} reff={strongAlcoRef} products={strongAlco} />
      )}
      {point === "wine" && (
        <ProductList tabIndex={18} reff={wineRef} products={wine} />
      )}
    </div>
  );
};

export default Menu_Page;
