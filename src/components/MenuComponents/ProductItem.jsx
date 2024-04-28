import { useContext, useEffect, useState } from "react";
import ProductModal from "../UI/Modals/ProductModal/ProductModal";
import { AppContext } from "../../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { addFavouriteAction, removeFavouriteAction } from "../../store/favouriteReducer";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites);

  const [openModal, setOpenModal] = useState(false);

  const [addFavourite, setAddFavourite] = useState(false);

  const addToFavourite = item => dispatch(addFavouriteAction(item));
  const dropFromFavourite = item => dispatch(removeFavouriteAction(item));

  useEffect(() => {
    if (openModal) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [openModal]);

  useEffect(() => {
    if (localStorage.getItem(product.title) && !favourites.find(item => item.title == product.title)) {
      setAddFavourite(true);
      addToFavourite(product);
    } else if (localStorage.getItem(product.title)) setAddFavourite(true);
  }, []);

  function favouriteHandler(e) {
    e.stopPropagation();
    setAddFavourite(!addFavourite);
    if (!addFavourite) {
      addToFavourite(product);
      localStorage.setItem(product.title ,product.title);
    } else {
      dropFromFavourite(product);
      localStorage.removeItem(product.title);
    }
  }

  return (
    <>
      <div onClick={() => setOpenModal(true)} className="productItem">
        <div className="about">
          <p className="title">{product.title}</p>
          <p className="quantity">{product.quantity}</p>
          <p className="price">
            {product.price}
            <span>грн</span>
          </p>
          <div onClick={favouriteHandler} className="favourite">
            {addFavourite ? <p>&#9829; Улюблене</p> : <p>&#9825; Вподобайка</p>}
          </div>
        </div>
        <img className="img" src={product.image} alt="not found" />
      </div>
      <ProductModal
        product={product}
        visible={openModal}
        setVisible={setOpenModal}
      />
    </>
  );
};

export default ProductItem;
