import { createStore } from "redux";
import { favouriteReducer } from "./favouriteReducer";

export const store = createStore(favouriteReducer);