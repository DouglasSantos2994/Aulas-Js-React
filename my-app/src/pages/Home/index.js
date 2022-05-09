import React from "react";
import Links from "../../components/Links";

const Home = () => {
  return (
    <>
      <Links
        texto={"Split - Marvel"}
        link={"/marvel?heroi=capitaoamerica&poder=forca&arma=escudo"}
      />
      <Links
        texto={"Query String - DC "}
        link={
          "/dc?heroi=batman&poder=inteligencia&arma=sinto&nome=bruce&roupa=preta"
        }
      />
    </>
  );
};

export default Home;
