import React, { useState } from "react";

const Home = () => {
  const [conta, setConta] = useState();

  const enviar = () => {
    localStorage.setItem("nome", "Douglas");
    window.location.href = "/local";
  };

  const session = () => {
    const multiplicacao = conta * 10;
    sessionStorage.setItem("numero", multiplicacao);
    window.location.href = "/session";
  };

  return (
    <>
      <div>
        <p>Veja o nome</p>
        <button onClick={() => enviar()}>Douglas</button>
        <br />
        <br />
      </div>
      <div>
        <input onChange={(e) => setConta(e.target.value)} />

        <button onClick={() => session()}>Calcular</button>
      </div>
    </>
  );
};

export default Home;
