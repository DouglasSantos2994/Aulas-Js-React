import './App.css';

function App() {

  const familia = [
    {
      nome: "Douglas",
      idade: 28,
      dataDeNascimento: "29/01/1994",
      telefone: "(11) 93023-4589",
      nomeDaMae: "Edileide",
      nomeDoPai: "Cicero",
    },

    {
      nome: "Diego",
      idade: 31,
      dataDeNascimento: "25/08/1990",
      telefone: "(11) 95566-7788",
      nomeDaMae: "Edileuza",
      nomeDoPai: "",
    },

    {
      nome: "William",
      idade: 30,
      dataDeNascimento: "10/04/1990",
      telefone: "(11) 99876-5432",
      nomeDaMae: "Neide",
      nomeDoPai: "Sidney",
    },

    {
      nome: "Patrick",
      idade: 27,
      dataDeNascimento: "23/07/1996",
      telefone: "(11) 91234-5678",
      nomeDaMae: "Maria",
      nomeDoPai: "",
    },

    {
      nome: "Wilker",
      idade: 26,
      dataDeNascimento: "22/06/1995",
      telefone: "(11) 91020-3040",
      nomeDaMae: "Neide",
      nomeDoPai: "Sidney",
    },

  ]



  return (

    <div className="App">
      {
        familia.map(item => {

          return (
            <div className="box">
              <p> Nome: {item.nome} </p>
              <p> Idade: {item.idade}</p>
              <p> Data de nascimento:{item.dataDeNascimento}</p>
              <p> Telefone: {item.telefone}</p>
              <p> Nome da Mãe: {item.nomeDaMae}</p>
              {item.nomeDoPai &&
                <p> Nome do Pai:{item.nomeDoPai}</p>
              }
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
