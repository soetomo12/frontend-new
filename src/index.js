import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
// import App from "./App";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Hasil from "./pages/Hasil";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const { REACT_APP_CLIENT_ID } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cars"
          element={
            <Protected>
              <Cars />
            </Protected>
          }
        />
        {/* <Route path="/Hasil" element={<Hasil />} /> */}
        <Route
          path="/register"  
          element={
            <GoogleOAuthProvider clientId={REACT_APP_CLIENT_ID}>
              <Register />
            </GoogleOAuthProvider>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId={REACT_APP_CLIENT_ID}>
              <Login />
            </GoogleOAuthProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
