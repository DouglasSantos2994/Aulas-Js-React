
function Primeiro() {
    const pathZ = window.location.href.includes('z')
    const pathY = window.location.href.includes('y')
    return (
        <div>
            <h1> Essa é a Primeira página</h1>
            <ul>
                <li onClick={() => window.location.href = '/'}>Home</li>
                <li onClick={() => window.location.href = '/Primeiro'}>Primeira página</li>
                <li onClick={() => window.location.href = '/Segundo'}>Segunda página</li>
                <li onClick={() => window.location.href = '/Terceiro'}>Terceira página</li>
            </ul>
            <label>primeiro</label>
            <input onChange={(e) => window.location.href = `/Primeiro?${e.target.value}`} />
            {pathZ &&
                <p>O play está chegando</p>
            }

            {pathY &&
                <p>O play 4 vai ser sorteado</p>
            }
        </div>
    )
}

export default Primeiro;