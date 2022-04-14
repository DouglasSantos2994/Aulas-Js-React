import './App.css';
import {Musica, Futebol} from "./utils"


function App() {

  return (
    <div className="box">
      <form>
        <label>Musica</label>
        <input onChange={(e) => { Musica(e.target.value) }} />
        <label>Futebol</label>
        <input  onChange={(e) => {Futebol(e.target.value)}}></input>
      </form>
    </div>
  );
}

export default App;
