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

  const comida = [

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



  ]

  const filtrando = futebol.filter(jogadores => {
    return jogadores.melhorDoMundo === false
  })

  return (

    <div className="App">
      {
        filtrando.map(jogadores => {

          return (
            <div className="box">
              <p> Nome: {jogadores.nome} </p>
              <p> Idade: {jogadores.idade}</p>
              <p>Time:{jogadores.time}</p>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
