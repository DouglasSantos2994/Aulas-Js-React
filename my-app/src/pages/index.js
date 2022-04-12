 import {Esporte} from '../utils'


function Home() {

    return (

        <div>

            <ul>
                <li onClick={() => Esporte('/futebol') }>Futebol</li>
                <li onClick={() => Esporte('/basquete') }>Basquete</li>
                <li onClick={() => Esporte('/volei') }>Volei</li>
                <li onClick={() => Esporte('/surf') }>Surf</li>
            </ul>
        </div>
    )
}

export default Home;