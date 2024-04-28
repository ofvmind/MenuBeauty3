import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FirebaseContext } from "./context/FirebaseContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const firebaseConfig = {
  apiKey: "AIzaSyCiRINm6M5Aq8rDiJSjBVOeka57RcqKY7w",
  authDomain: "realchat-7d337.firebaseapp.com",
  projectId: "realchat-7d337",
  storageBucket: "realchat-7d337.appspot.com",
  messagingSenderId: "729307105780",
  appId: "1:729307105780:web:134bf19be256db190651a1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{ app, auth }}>
      <App />
    </FirebaseContext.Provider>
  </Provider>
);
