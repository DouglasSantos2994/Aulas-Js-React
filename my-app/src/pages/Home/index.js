import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [resposta, setResposta] = useState();
  console.log(resposta);
  useEffect(() => {
    axios
      .get("https://aula-metodos-default-rtdb.firebaseio.com/futebol.json")
      .then(function (response) {
        setResposta(response.data);
      });
  }, []);

  return (
    <>
      {resposta &&
        Object.values(resposta?.clubes).map((futebol, index) => {
          console.log("fut", futebol);
          return (
            <divclass key={index}>
              <div className="box">
                <p>Clube: {futebol.time} </p>
                <img src={futebol.imagem} />
                <p>Jogador: {futebol.nome}</p>
                <p>Posição: {futebol.posicao}</p>
              </div>
            </divclass>
          );
        })}
    </>
  );
};

export default Home;
