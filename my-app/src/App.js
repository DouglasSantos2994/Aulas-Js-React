import './App.css';
import Herois from './components/Herois';

const filme =
{
  nome: "Marvel",
  Codinome: "MCU",
  maioresBilheterias: true,
  oPrimeiroVingador: [
    {
      nome: "Steven Rogers",
      Codinome: "Capitão America",
      Heroi: true,
    },

    {
      nome: "Thanos de Titã",
      Codinome: "O Titã Louco",
      Heroi: true,
    },

    {
      nome: "Loki",
      Codinome: "Deus da Travessura",
      Heroi: true,
    }
  ],

}

function App() {
  return (
    <>

      {
        filme.oPrimeiroVingador.map(superHerois => {
         
          return (
            <div>
              <Herois nome={superHerois.nome} Codinome={superHerois.Codinome} Heroi={superHerois.Heroi}/> 
             
            </div>
          )
        })
      }
    </>
  )
}

export default App;
