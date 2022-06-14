import React, { useEffect, useState } from "react";

const Local = () => {
  const [dado, setDado] = useState();
  const email = localStorage.getItem("dados");
  const senhas = localStorage.getItem("senha");

  const error = () => {
    window.location.href = "/";
  };

  const deslogar = () => {
    window.location.href = "/";
    localStorage.clear();
  };

  useEffect(() => {
    if (
      email === "Douglasflorentinosantos@gmail.com" &&
      senhas === "celula32"
    ) {
      setDado({
        nome: "Douglas Santos",
        idade: "28",
        imagens:
          "https://pps.whatsapp.net/v/t61.24694-24/153550013_994407594645113_7023637351001422722_n.jpg?ccb=11-4&oh=01_AVwQ-8zv75oke0c44NRR7-pYI28tGdWNWEKsF8IFvo3_Gw&oe=62B73707",
      });
    } else if (
      email === "Nathanferraz@gmail.com" &&
      senhas === "chehouleiteiro"
    ) {
      setDado({
        nome: "Nathan Ferraz",
        idade: "34",
        imagens:
          "https://pps.whatsapp.net/v/t61.24694-24/252414206_1122247044848994_4048493858383801055_n.jpg?ccb=11-4&oh=a0810fc7c725c19e219ddac55e0385ea&oe=62B562A4",
      });
    } else if (email === "eGelinho@gmail.com" && senhas === "gelinhoooooo") {
      setDado({
        nome: "Gelinho",
        idade: "23",
        imagens:
          "https://pps.whatsapp.net/v/t61.24694-24/258199736_750553419439737_4778811596343024871_n.jpg?ccb=11-4&oh=e20672c547ba4f13ef4ff2b87ea07499&oe=62B75F5E",
      });
    } else if (email === "Marcelomorais@gmail.com" && senhas === "123456") {
      setDado({
        nome: "Marcelo Morais",
        idade: "30",
        imagens:
          "https://pps.whatsapp.net/v/t61.24694-24/287453459_439283910904466_3146904450005480309_n.jpg?ccb=11-4&oh=13e557f9d95c70b163e73452c1bed00d&oe=62B7C9CF",
      });
    } else if (
      email === "polyfalamuito@gmail.com" &&
      senhas === "eutenhoumapergunta"
    ) {
      setDado({
        nome: "Poly Paulino",
        idade: "34",
        imagens:
          "https://pps.whatsapp.net/v/t61.24694-24/187807139_718860685919552_8838447497442718700_n.jpg?ccb=11-4&oh=2920a3845bcd46079c1f9c02ce3b6eb5&oe=62B83761",
      });
    } else if (
      email === "Emanuelmedeiros@gmail.com" &&
      senhas === "medaatencao"
    ) {
      setDado({
        nome: "Emanuel Medeiros",
        idade: "27",
        imagens:
          "https://pps.whatsapp.net/v/t61.24694-24/120644582_333088305639052_1388588836000341974_n.jpg?ccb=11-4&oh=88de60a38a450dc8fb04beecf9cf8cf0&oe=62B5B88F",
      });
    } else if (email === "Felipepaulino@gmail.com" && senhas === "cadeomouse") {
      setDado({
        nome: "Felipe Paulino",
        idade: "31",
        imagens:
          "https://pps.whatsapp.net/v/t61.24694-24/127242016_192458679173035_5201425130557706719_n.jpg?ccb=11-4&oh=a96c875ec3a697d225c5dc2747ac4ab6&oe=62B8AEB7",
      });
    } else if (email === "mauriciosouza@gmail.com" && senhas === "acorda") {
      setDado({
        nome: "Mauricio Edson",
        idade: "48",
        imagens:
          "https://pps.whatsapp.net/v/t61.24694-24/160364320_742040903368905_3293031688881443652_n.jpg?ccb=11-4&oh=a39d5aeedd9bbcc1adc6a6ea8a3c8efb&oe=62B84E7E",
      });
    } else {
      error();
    }
  }, [email]);

  return (
    <>
      <h1>{dado && dado.nome}</h1>
      <p>{dado && dado.idade}</p>
      <img src={dado && dado.imagens} />

      <button onClick={() => deslogar()}>Deslogar</button>
    </>
  );
};
export default Local;
