import './App.css';

function App() {

  const futebol = [
    {
      nome: "Cristiano Ronaldo",
      idade: 37,
      time: "Real Madrid",
      melhorDoMundo: true
    },

    {
      nome: "Toni Kross",
      idade: 32,
      time: "Real Madrid",
      melhorDoMundo: false
    },

    {
      nome: "Lionel Messi",
      idade: 34,
      time: "Paris Saint-Germain",
      melhorDoMundo: true
    },

    {
      nome: "Renato Augusto",
      idade: 34,
      time: "Corinthians",
      melhorDoMundo: false
    }
  ]

  const frutas = [

    {
      citricas: "Abacaxi",
      vermelhas: "Morango",
      exotica: "Lichia ",

    },

    {
      citricas: "Limão",
      vermelhas: "Amora",
      exotica: "Pitaya ",

    },

    {
      citricas: "Abacaxi",
      vermelhas: "Framboesa",
      exotica: "Romã",

    },

  ]

  const craques = futebol.filter(jogadores => {
    return jogadores.melhorDoMundo === false
  })

  const melhoresFrutas = frutas.filter(comida => {
    return comida.citricas === "Abacaxi"
  })

  return (

    <div className="App">
      {
        craques.map(jogadores => {

          return (
            <div className="box">
              <p> Nome: {jogadores.nome} </p>
              <p> Idade: {jogadores.idade}</p>
              <p>Time: {jogadores.time}</p>
            </div>
          )
        })
      }

      {
        melhoresFrutas.map(comida => {

          return (
            <div className="box">
              <p> Frutas Citricas: {comida.citricas} </p>
              <p> Frutas Citricas: {comida.vermelhas} </p>
              <p> Frutas Citricas: {comida.exotica} </p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
