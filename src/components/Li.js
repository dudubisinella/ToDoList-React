import React from "react";

export default function Li({ Id, owner, novaTarefa }) {
  return (
    <li key={Id}>
      <h2>
        <b>{owner}: </b>
        {novaTarefa}.
      </h2>
    </li>
  );
}
