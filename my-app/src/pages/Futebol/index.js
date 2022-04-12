import {Esporte} from '../../utils'

function Futebol() {
   
    const Cbf = 

        {
           title:"Futebol",
           slogan:" O melhor esporte",
           banner:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNPinC3hZ6qfct3OUY7Ucoa1NafdSvHUgEA&usqp=CAU"
        }
    
     
    

    return (
        <div>
            <h1>{Cbf.title}</h1>
           <h2>{Cbf.slogan}</h2>
           <img src={Cbf.banner} onClick={()=> Esporte("https://www.cbf.com.br/")}/>
        </div>
    )
}

export default Futebol;