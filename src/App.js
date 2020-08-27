import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header title="To do List com React">
        <div>
          <ul></ul>
        </div>
      </Header>

      <Main>
        <input type="text" placeholder="Digite Aqui" />
        <button>Adicionar</button>
      </Main>

      <Footer title="Feito por Dama e Eduardo" />
    </>
  );
}

export default App;
