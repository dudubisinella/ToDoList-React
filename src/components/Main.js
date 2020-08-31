import React, { useState } from "react";
import Li from "./Li";

function Main() {
  const [Lista, setLista] = useState([]);
  const [novaTarefa, setnovaTarefa] = useState("");
  const [owner, setOwner] = useState("");

  function addNovaLista() {
    const listas = { novaTarefa, owner, Id: `${Date.now()}` };

    setLista([...Lista, listas]);
    setnovaTarefa("");
    setOwner("");
    // console.log(Lista);
  }

  return (
    <>
      <main>
        <input
          className="input"
          value={owner}
          placeholder="Digite aqui!"
          type="text"
          onChange={(e) => setOwner(e.target.value)}
        />
        <br />
        <input
          className="input"
          value={novaTarefa}
          placeholder="Digite aqui!"
          type="text"
          onChange={(e) => setnovaTarefa(e.target.value)}
        />
        <br />
        <button type="button" onClick={addNovaLista}>
          Adicionar!
        </button>
        <br />

        <h2>{owner}</h2>
        <h3>{novaTarefa}</h3>

        <ul>
          {Lista.map((eachLista) => (
            <Li
              id={eachLista.simpleId}
              owner={eachLista.owner}
              novaTarefa={eachLista.novaTarefa}
            />

            // <li key={eachLista.simpleId}>
            //   <h2>
            //     <b>{eachLista.owner}: </b>
            //     {eachLista.novaTarefa}.
            //   </h2>
            // </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Main;
