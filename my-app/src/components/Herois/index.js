import React from "react";

export default function Herois({ nome, Codinome, Heroi }) {

  return (
    <div className="box">
      <p>{nome}</p>

      {Heroi && <p>{Codinome}</p>

      }
    </div>
  );
}