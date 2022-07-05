import React, { useState } from "react";
import { Button } from "hubchain-storybook";
const Home = () => {
  const [dados, setDados] = useState();
  const [senha, setSenha] = useState();

  const enviar = () => {
    localStorage.setItem("dados", dados);
    localStorage.setItem("senha", senha);
    window.location.href = "/local";
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <label>Email:</label>
        <input onChange={(e) => setDados(e.target.value)} />
        <br />
        <br />
        <label>Senha:</label>
        <input onChange={(e) => setSenha(e.target.value)} />
        <button onClick={() => enviar()}>Entrar</button>
        <br />
        <br />
        <Button
          label="Testando"
          size={"large"}
          key="test"
          onClick={enviar()}
          primary={true}
        />
      </div>
    </>
  );
};

export default Home;
