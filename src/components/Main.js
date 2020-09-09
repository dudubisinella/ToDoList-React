import React, { useState } from "react";
import Li from "./Li";

function Main() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setnovaTarefa] = useState("");
  const [owner, setOwner] = useState("");

  function addNovaLista() {
    const novaTarefa = { novaTarefa, owner, Id: `${Date.now()}` };

    setTarefas([...tarefas, novaTarefa]);
    setnovaTarefa("");
    setOwner("");
  }

  function Delete(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.Id !== id));
  }
  return (
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
        {tarefas.map((Tarefa) => (
          <Li
            id={Tarefa.Id}
            owner={Tarefa.owner}
            novaTarefa={Tarefa.novaTarefa}
            func={() => Delete(Tarefa.Id)}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
