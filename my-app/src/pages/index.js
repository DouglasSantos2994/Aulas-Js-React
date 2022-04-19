

 function Home() {
    let valor
    const digite = (valorDigitado) => {
        valor = valorDigitado
    }
    const click = () => {
        window.location.href = `Lojas?loja=${valor}`
    }
    return (
        <div className="box">
            <form>
                <input onChange={(e) => { digite(e.target.value) }} />
                <button onClick={(e) => {
                    e.preventDefault()
                    click()
                }}
                >Enviar</button>
            </form>
        </div>
    )
}
export default Home;