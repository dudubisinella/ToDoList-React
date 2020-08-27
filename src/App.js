import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <Main>
        <input type="text" /> <button>Adicionar</button>
      </Main>
    </>
  );
}

export default App;
