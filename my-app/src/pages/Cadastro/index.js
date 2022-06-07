import React, { useState, useEffect } from "react";
import axios from "axios";

const Cadastro = () => {
  const [resposta, setResposta] = useState();
  console.log("=>", resposta);
  const [titulo, setTitulo] = useState();
  const [genero, setGenero] = useState();
  const [imagem, setImagem] = useState();
  const [tipo, setTipo] = useState();
  const [mapear, setMaper] = useState([]);

  useEffect(() => {
    axios
      .get("https://aula-14-133cc-default-rtdb.firebaseio.com/.json")
      .then(function (response) {
        setResposta(response.data);
      });
  }, [mapear]);

  const cadastrar = () => {
    axios
      .post(
        "https://aula-14-133cc-default-rtdb.firebaseio.com/catalogo/.json",
        { titulo: titulo, genero: genero, imagem: imagem, tipo: tipo }
      )
      .then(() => {
        window.location.href = "/";
        alert("seu filme foi cadastrado");
        setMaper(!mapear);
      })
      .catch(() => alert("eu filme não foi cadastrado"));
  };

  const deletar = (id) => {
    axios
      .delete(
        `https://aula-14-133cc-default-rtdb.firebaseio.com/catalogo/${id}.json`,
        {}
      )
      .then(() => {
        window.location.href = "/";
        alert("seu filme foi excluido");
        setMaper(!mapear);
      })
      .catch(() => alert("não foi possivel excluir esse filme"));
  };

  const editar = (id) => {
    axios
      .patch(
        `https://aula-14-133cc-default-rtdb.firebaseio.com/catalogo/${id}.json`,
        { titulo: titulo, genero: genero, imagem: imagem }
      )
      .then(() => {
        window.location.href = "/";
        alert("Seu filme foi editado!");
        setMaper(!mapear);
      })
      .catch(() => {
        alert("Não foi possivel editar esse filme");
      });
  };

  console.log("tipo", tipo);
  return (
    <>
      <h2>Cadastro</h2>
      <form>
        <label>Titulo</label>
        <input onChange={(e) => setTitulo(e.target.value)} />
        <br />
        <label>Genero</label>
        <input onChange={(e) => setGenero(e.target.value)} />
        <br />
        <label>Imagem</label>
        <input onChange={(e) => setImagem(e.target.value)} />
        <br />
        <select onChange={(e) => setTipo(e.target.value)}>
          <option>Selecione</option>
          <option value="series">Series</option>
          <option filmes="filmes">Filmes</option>
        </select>
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
        <br />
        <br />
      </form>

      {resposta &&
        Object.entries(resposta?.catalogo).map((assistir, index) => {
          return (
            <div key={index}>
              <label>Titulo</label>
              <input
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
              />
              <label>Genero</label>
              <input
                onChange={(e) => {
                  setGenero(e.target.value);
                }}
              />
              <label>Imagem</label>
              <input
                onChange={(e) => {
                  setImagem(e.target.value);
                }}
              />

              <button onClick={() => editar(assistir[0])}>Editar</button>
              <br />
              <br />
              <button onClick={() => deletar(assistir[0])}>Excluir</button>
              <br />
              <br />
            </div>
          );
        })}
    </>
  );
};

export default Cadastro;
