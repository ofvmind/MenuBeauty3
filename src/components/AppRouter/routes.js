import { FAVOURITE_PRODUCTS_PATH, MAIN_PATH, MENU_PATH } from "../../consts/consts";
import FavouritesProducts from "../pages/FavouritesProducts";
import Main_Page from "../pages/Main_Page";
import Menu_Page from "../pages/Menu_Page";

export const routes = [
  { path: MAIN_PATH, element: Main_Page },
  { path: MENU_PATH, element: Menu_Page },
  { path: FAVOURITE_PRODUCTS_PATH, element: FavouritesProducts },
  { path: "*", element: Main_Page }
];