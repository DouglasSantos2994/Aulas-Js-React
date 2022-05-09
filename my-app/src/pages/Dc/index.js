import React from "react";

const params = new URLSearchParams(window.location.search);
let urlParams = undefined;
params.forEach((value, key) => {
  urlParams = Object.assign({}, urlParams, {
    [key]: value.toString(),
  });
});

function Dc() {
  return (
    <div>
      <div>
        <h1>Herois</h1>
        <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg" />
        {urlParams.heroi === "batman" && <h1>Batman</h1>}
        {urlParams.arma === "sinto" && <h1>Arma: Sinto</h1>}
        {urlParams.nome === "bruce" && <h1>Nome: Bruce</h1>}
        {urlParams.poder === "inteligente" && <h1>Poder: inteligente</h1>}
        {urlParams.roupa === "preta" && <h1>Roupa: Preta</h1>}
      </div>
      <div>
        <img src="https://portalpopline.com.br/wp-content/uploads/2022/04/the-flash-8a-temporada-capa.jpg" />
        {urlParams.heroi === "flash" && <h1>flash</h1>}
        {urlParams.arma === "naotem" && <h1>Arma: Não tem arma</h1>}
        {urlParams.nome === "barry" && <h1>Nome: Barry Allen</h1>}
        {urlParams.poder === "velocidade" && <h1>Poder: Velocidade</h1>}
        {urlParams.roupa === "vermelha" && <h1>Roupa: Vermelha</h1>}
      </div>
    </div>
  );
}

export default Dc;
