import {Esporte} from '../../utils'

function Surf() {
  const wsl = 

  {
     title:"Surf",
     slogan:"Pegar a melhor onda",
     banner:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zPy6BzbYMho5eSQoT63U-CQUl_HRq5OOxQ&usqp=CAU"
  }




return (
  <div>
      <h1>{wsl.title}</h1>
     <h2>{wsl.slogan}</h2>
     <img src={wsl.banner} onClick={()=> Esporte("https://www.uol.com.br/esporte/colunas/surfe-360/2022/04/09/e-campea-sophia-medina-irma-de-gabriel-conquista-o-titulo-sul-americano.htm")}/>
  </div>
)
  }
  
  export default Surf;