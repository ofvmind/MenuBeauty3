import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { stackProducts } from "./components/MenuComponents/products";
import { addFavouriteAction } from "./store/favouriteReducer";

function App() {
  

  const dispatch = useDispatch();
  const favourites = useSelector( state => state.favourites );

  useEffect(() => {
    stackProducts.forEach(item => {
      if (localStorage.getItem(item.title)) 
        dispatch(addFavouriteAction(item));
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [point, setPoint] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [isModalOpen]);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        point,
        setPoint,
        searchQuery,
        setSearchQuery,
        showSearch,
        setShowSearch,
        showInput,
        setShowInput
      }}
    >
      <div className="wrapper">
        <Header />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
