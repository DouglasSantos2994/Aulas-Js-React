import {Esporte} from '../../utils'

function Basquete() {
   
    const nba = 

        {
           title:"Basquete",
           slogan:"Forever",
           banner:"https://img.freepik.com/vetores-gratis/slogan-tematico-basquete-t-shirt-impressao-design-grafico_204219-103.jpg"
        }
    
     
    

    return (
        <div>
            <h1>{nba.title}</h1>
           <h2>{nba.slogan}</h2>
           <img src={nba.banner} onClick={()=> Esporte("https://www.nba.com/")}/>
        </div>
    )
}

export default Basquete;