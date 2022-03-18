import './App.css';

function App() {

  const futebol = [
    {
      nome: "Messi",
      eBom: true,
      especialidades: [
        {
          dible: "Pedalada",
          chute: "Colocado",
          gols: "Cabeceio",
        }
      ],

      melhorDoMundo: [
        {
          time: "Barcelona",
          ganhouCopa: true
        },

        {
          time: "Argentina",
          ganhouCopa: false
        }
      ],
    },

    {
      nome: "Cristiano Ronaldo",
      eBom: true,
      especialidades: [
        {
          dible: "Pedalada",
          chute: "Forte",
          gols: "Falta",
        }
      ],

      melhorDoMundo: [
        {
          time: "Real Madrid",
          ganhouCopa: true
        },
        {
          time: "Portugal",
          ganhouCopa: false
        }
      ],
    },

    {
      nome: "Ronaldo",
      eBom: true,
      especialidades: [
        {
          dible: "Elastico",
          chute: "Cavadinha",
          gols: "Colocado",
        }
      ],

      melhorDoMundo: [
        {
          time: "Real Madrid",
          ganhouCopa: true
        },

        {
          time: "Brasil",
          ganhouCopa: true
        }
      ],
    },

    {
      nome: "Romario",
      eBom: true,
      especialidades: [
        {
          dible: "Elastico",
          chute: "Forte",
          gols: "Penalty",
        }
      ],

      melhorDoMundo: [
        {
          time: "Barcelona",
          ganhouCopa: true
        },

        {
          time: "Brasil",
          ganhouCopa: true
        }
      ],
    },
  ]


  return (

    <div className="App">
      {
        futebol.map(jogadores => {

          return (
            <div className="box">
              <p> Nome: {jogadores.nome} </p>

              {jogadores.especialidades.map(caracteristicas => {

                return (
                  <>
                    <p> Dible:{caracteristicas.dible} </p>
                    <p> Chute: {caracteristicas.chute} </p>
                    <p> Gols {caracteristicas.gols} </p>
                  </>
                )
              })}

              {jogadores.melhorDoMundo.map(craque => {

                return (
                  <>
                    <p> Time/Seleção:{craque.time} </p>

                  </>
                )
              }
              )}
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
