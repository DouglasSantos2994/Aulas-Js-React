import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [resposta, setResposta] = useState();
  const [time, setTime] = useState();
  const [nome, setNome] = useState();
  const [posicao, setPosicao] = useState();
  const [mapear, setMaper] = useState([]);

  useEffect(() => {
    axios
      .get("https://aula-metodos-default-rtdb.firebaseio.com/futebol.json")
      .then(function (response) {
        setResposta(response.data);
      });
  }, []);

  const cadastrar = () => {
    axios
      .post(
        "https://aula-metodos-default-rtdb.firebaseio.com/futebol/clubes.json",
        { time: time, nome: nome, posicao: posicao }
      )
      .then(() => {
        alert("seu time foi cadastrado");
        setMaper(!mapear);
      })
      .catch(() => alert("não conseguiu cadastrar esse time"));
  };

  const deletar = (id) => {
    axios
      .delete(
        `https://aula-metodos-default-rtdb.firebaseio.com/futebol/clubes/${id}.json`,
        {}
      )
      .then(() => {
        alert("seu clube foi excluido");
        setMaper(!mapear);
      })
      .catch(() => alert("não foi possivel excluir esse time"));
  };

  const editar = (id) => {
    axios
      .patch(
        `https://aula-metodos-default-rtdb.firebaseio.com/futebol/clubes/${id}.json`,
        { time: time, nome: nome, posicao: posicao }
      )
      .then(() => {
        alert("Seu time foi editado!");
        setMaper(!mapear);
      })
      .catch(() => {
        alert("Não foi possivel editar esse time");
      });
  };

  return (
    <>
      <h2>Cadastramento de jogadores</h2>
      <form>
        <label>Time</label>
        <input onChange={(e) => setTime(e.target.value)} />
        <br />
        <label>Jogador</label>
        <input onChange={(e) => setNome(e.target.value)} />
        <br />
        <label>Posição</label>
        <input onChange={(e) => setPosicao(e.target.value)} />
        <br />
        <br />

        <button
          onClick={(e) => {
            e.preventDefault();
            cadastrar();
          }}
        >
          Cadastrar
        </button>
      </form>

      {resposta &&
        Object.entries(resposta?.clubes).map((futebol, index) => {
          return (
            <div key={index}>
              <div className="box">
                <p>Clube: {futebol[1].time} </p>
                <input
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />

                <button onClick={() => editar(futebol[0])}>Editar</button>

                <p>Jogador: {futebol[1].nome}</p>
                <input
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                />

                <button onClick={() => editar(futebol[0])}>Editar</button>

                <p>Posição: {futebol[1].posicao}</p>
                <input
                  onChange={(e) => {
                    setPosicao(e.target.value);
                  }}
                />

                <button onClick={() => editar(futebol[0])}>Editar</button>
                <br />
                <button onClick={() => deletar(futebol[0])}>Excluir</button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Home;
