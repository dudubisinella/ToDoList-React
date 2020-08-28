import React, { useState } from "react";

function Main() {

    const [Lista, setLista] = useState([]);
    const [novaTarefa, setnovaTarefa] = useState("");
    const [owner, setOwner] = useState("");

    function addNovaLista() {
        const listas = { novaTarefa, owner, Id: `${Date.now()}` };

        setLista([...Lista, listas]);
        setnovaTarefa("");
        setOwner("");
    }

    return (
        <>
            <input value={novaTarefa} placeholder="Digite aqui!" type="text" onChange={(e) => setnovaTarefa(e.target.value)} />
            <br />
            <input value={owner} placeholder="Digite aqui!" type="text" onChange={(e) => setOwner(e.target.value)} />
            <br />
            <button type="button" onClick={addNovaLista}>
                Adicionar!
            </button>
            <br />

            <h3>{novaTarefa}</h3>
            <h3>{owner}</h3>

            <ul>
                {Lista.map((eachLista) => (

                    <li key={eachLista.simpleId}>
                        <b>{eachLista.owner}: </b>{eachLista.novaTarefa}.
                    </li>

                ))}
            </ul>
        </>
    )
}

export default Main;
