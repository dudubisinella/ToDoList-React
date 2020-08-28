import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <Header title="To do List com React" />


      <Main />


      <Footer title="Feito por Dama e Eduardo" />
    </>
  );
}

export default App;
