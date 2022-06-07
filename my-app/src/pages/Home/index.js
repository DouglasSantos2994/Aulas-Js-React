import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [resposta, setResposta] = useState();

  const [mapear, setMaper] = useState([]);

  useEffect(() => {
    axios
      .get("https://aula-14-133cc-default-rtdb.firebaseio.com/.json")
      .then(function (response) {
        setResposta(response.data);
      });
  }, [mapear]);

  const filmes =
    resposta &&
    Object.values(resposta?.catalogo).filter((item) => {
      console.log("item", item);
      return item.tipo === "Filmes";
    });

  const series =
    resposta &&
    Object.values(resposta?.catalogo).filter((item) => {
      return item.tipo === "series";
    });

  return (
    <>
      <h2>Filmes</h2>
      {filmes &&
        Object.entries(filmes).map((assistir, index) => {
          return (
            <div key={index}>
              <div className="box">
                <p> {assistir[1].titulo} </p>
                <p> {assistir[1].genero} </p>
                <img width="100" src={assistir[1].imagem} />
              </div>
            </div>
          );
        })}

      <h2>Séries</h2>
      {series &&
        Object.entries(series).map((assistir, index) => {
          return (
            <div key={index}>
              <div className="box">
                <p> {assistir[1].titulo} </p>
                <p> {assistir[1].genero} </p>
                <img width="100" src={assistir[1].imagem} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Home;
