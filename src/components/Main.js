import React, { useState } from "react";
// import Li from "./Li";

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

  function Delete(id) {
    setLista(
      Lista.filter((lista) => lista.id !== id),
      ...Lista
    );
      // console.log(Lista.Id);
      // //copy list
      // setLista(
      //   ...Lista,
      //   Lista.filter((lista) => lista.id !== id)
      // Lista.filter((lista) => lista.id !== id),
      //   ...Lista
      // );
      // setProjects(projects.filter((project) => project.id !== projectId));
      // //filter out deleted object
      // //remember that the list (each object) gets assigned a value and id when its added to list
      // const updatedList = list.filter((item) => item.id !== id);

      // //update state
      // this.setState({ Lista: updatedList });
    }
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
            // <Li
            //   id={eachLista.simpleId}
            //   owner={eachLista.owner}
            //   novaTarefa={eachLista.novaTarefa}
            // />

            <li key={eachLista.Id}>
              <h2>
                <b>{eachLista.owner}: </b>
                {eachLista.novaTarefa}.
              </h2>
              <button onClick={() => Delete(eachLista.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Main;
