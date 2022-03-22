import './App.css';

function App() {

  const modalidades = [
    {
      nome: "Messi",
      time: "Paris Saint Germain",
      nacionalidade: "Argentino",
      melhorEsporte: [
        {
          esporte: "Futebol",
          local: "Campo",

        },

        {
          esporte: "Basquete",
          local: "Quadra",
        },

      ],
    },

    {
      nome: "Stephen curry",
      time: "Golden State Warriors",
      nacionalidade: "Americano",
      melhorEsporte: [
        {
          esporte: "Basquete",
          local: "Quadra",
        },

        {
          esporte: "Futebol",
          local: "Campo",
        },
      ],
    },
  ]


  return (

    <div className="App">
      {
        modalidades.map(jogadores => {

          const fifa = jogadores.melhorEsporte.filter(jogador => {
            return jogador.esporte != "Futebol"
          })

          return (
            <div className="box">
              <p> Nome: {jogadores.nome} </p>
              <p>Time: {jogadores.time}</p>
              <p>Nacionalidade: {jogadores.nacionalidade}</p>

              {fifa.map(modalidade => {

                return (
                  <>
                    <p>Esporte: {modalidade.esporte}</p>
                    <p>Local: {modalidade.local}</p>
                  </>
                )
              })}

            </div>
          )
        })
      }

     
    </div>
  );
}

export default App;
