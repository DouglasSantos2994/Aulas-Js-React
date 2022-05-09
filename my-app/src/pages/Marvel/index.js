import React from "react";

const Marvel = () => {
  const url = window.location.href;
  const SplitUrl = url.split("&");
  const SplitHeroi = SplitUrl[0].split("heroi=")[1];
  const SplitPoder = SplitUrl[1].split("poder=")[1];
  const SplitArma = SplitUrl[2].split("arma=")[1];

  return (
    <>
      <h1>Herois</h1>
      {SplitHeroi === "capitaoamerica" && (
        <div>
          <h2>Capitão América</h2>
          <img src="https://upload.wikimedia.org/wikipedia/pt/b/bc/Steven_Rogers_%28Earth-616%29.jpg" />
        </div>
      )}
      ,
      {SplitHeroi === "thor" && (
        <div>
          <h1>Thor</h1>
          <img src="https://br.web.img2.acsta.net/pictures/22/04/18/16/21/2031556.jpg" />
        </div>
      )}
      ,
      {SplitHeroi === "homemdeferro" && (
        <div>
          <h1>Homem de Ferro</h1>
          <img src="https://s2.glbimg.com/R-0yLjwUw39gAkSq5ek4aljsSZE=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/g/7/3EYwBLSXWsBkXoKwfoeA/homem-de-ferro-fortnite.jpg" />
        </div>
      )}
    </>
  );
};

export default Marvel;
