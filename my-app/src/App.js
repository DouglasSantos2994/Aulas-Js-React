import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [topFilmes, setTopFilmes] = useState();

  const [informacoes, setInformacoes] = useState({
    titulo: "",
    descricao: "",
    diretor: "",
    genero: "",
    personagens: "",
    video: "",
    imagens: "",
  });

  useEffect(() => {
    if (topFilmes === "filme1") {
      setInformacoes({
        titulo: "Velozes e Furiosos",
        descricao: "",
        diretor: "",
        genero: "",
        personagens: "",
        video: "",
        imagens: "",
      });
    } else if (topFilmes === "filme2") {
      setInformacoes({
        titulo: "Viuva Negra",
        descricao: "",
        diretor: "",
        genero: "",
        personagens: "",
        video: "",
        imagens: "",
      });
    } else if (topFilmes === "filme3") {
      setInformacoes({
        titulo: "Harry Potter",
        descricao: "",
        diretor: "",
        genero: "",
        personagens: "",
        video: "",
        imagens: "",
      });
    } else if (topFilmes === "filme4") {
      setInformacoes({
        titulo: "Crepúsculo",
        descricao: "",
        diretor: "Catherine Hardwicke",
        genero: "fantasia, romance",
        personagens: "Bella Swan, Edward Cullen, Jacob Black",
        video: "",
        imagens: "",
      });
    } else if (topFilmes === "filme5") {
      setInformacoes({
        titulo: "Coringa",
        descricao: "",
        diretor: "",
        genero: "",
        personagens: "",
        video: "",
        imagens: "",
      });
    } else if (topFilmes === "filme6") {
      setInformacoes({
        titulo: "Homem-Aranha",
        descricao: "",
        diretor: "",
        genero: "",
        personagens: "",
        video: "",
        imagens: "",
      });
    }
  }, [topFilmes]);

  return (
    <div className="container">
      <div>
        <button onClick={() => setTopFilmes("filme1")}>
          <img src="https://media.fstatic.com/X_AzJVc9TjBw_LphxSQKaRz-Sx8=/290x478/smart/media/movies/covers/2021/06/images_3_18H0te3.jpeg" />
        </button>
      </div>

      <div>
        <button onClick={() => setTopFilmes("filme2")}>
          <img
            className="filmes"
            src="https://br.web.img3.acsta.net/c_310_420/pictures/20/03/09/15/51/4538015.jpg"
          />
        </button>
      </div>

      <div>
        <button onClick={() => setTopFilmes("filme3")}>
          <img
            className="filmes"
            src="https://veja.abril.com.br/wp-content/uploads/2016/06/harry-potter-cartaz-calice-fogo-04-original1.jpeg?quality=70&strip=info&w=395"
          />
        </button>
      </div>

      <div>
        <button onClick={() => setTopFilmes("filme4")}>
          <img
            className="filmes"
            src="https://cdn.ome.lt/vZvPvwbitCjuqVOgmUo2e4s__ZE=/fit-in/837x500/smart/uploads/conteudo/fotos/amanhecer-2_5.jpg"
          />
        </button>
      </div>

      <div>
        <button onClick={() => setTopFilmes("filme5")}>
          <img
            className="filmes"
            src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/63/Joker_%282019%29.jpg/250px-Joker_%282019%29.jpg"
          />
        </button>
      </div>

      <div>
        <button onClick={() => setTopFilmes("filme6")}>
          <img
            className="filmes"
            src="https://timnews.com.br/tagger/images?url=https%3A%2F%2Fportalpopline.com.br%2Fwp-content%2Fuploads%2F2021%2F11%2Fhomem-aranha-trailer-640x800.jpg"
          />
        </button>
      </div>

      <div className="infomacao">
        <h1>{informacoes.titulo}</h1>
        <p>{informacoes.personagens}</p>
      </div>
    </div>
  );
}

export default App;
