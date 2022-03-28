
function Segundo() {
    return (
        <div>
            <h1> Essa é a Segunda página</h1>
            <ul>
                <li onClick={() => window.location.href = '/'}>Home</li>
                <li onClick={() => window.location.href = '/Primeiro'}>Primeira página</li>
                <li onClick={() => window.location.href = '/Segundo'}>Segunda página</li>
                <li onClick={() => window.location.href = '/Terceiro'}>Terceira página</li>
            </ul>
            <label>segundo</label>
            <input onChange={(e) => window.location.href = `/Primeiro?${e.target.value}` }/>
        </div>
    )
}

export default Segundo;