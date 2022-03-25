import './App.css';

let conta = 4
let alerta = "Você conseguiu"

function App() {

  return (
    <div className="box">
      <form>
        <label>Cálculo:</label>
        <input onChange={(e) => { alert(JSON.parse(e.target.value) + conta)}} />
        <div className="frase" onClick={() => {alert(alerta)}}>
         Você consegue?
        </div>
      </form>
    </div>
  );
}

export default App;
