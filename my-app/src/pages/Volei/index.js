import {Esporte} from '../../utils'

function Volei() {
    
    const voleibol = 

    {
       title:"Volei",
       slogan:"o Melhor da quadra",
       banner:"http://img.glimboo.com/recado/volei/volei_52352.jpg"
    }


return (
    <div>
        <h1>{voleibol.title}</h1>
       <h2>{voleibol.slogan}</h2>
       <img src={voleibol.banner} onClick={()=> Esporte("https://www.sulinfoco.com.br/volei-mampituba-estreia-com-vitoria-na-etapa-final-do-cbi-sub-20-no-rio-de-janeiro/")}/>
    </div>
)
}

export default Volei;