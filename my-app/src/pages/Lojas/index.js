

function Lojas() {
    const SuperLojas = () => {
        if (window.location.href.includes('magazine')) {
            return (
                <>
                    <h1>Magazine</h1>
                    <img src="https://iev.com.br/wp-content/uploads/2019/12/magazine-luiza-2-1200x720-1.jpg" />
                </>
            )
        }
        else if (window.location.href.includes('pernambucanas')) {
            return (
                <>
                    <h1>Pernambucanas</h1>
                    <img src="https://www.tokiomarine.com.br/wp-content/webpc-passthru.php?src=https://www.tokiomarine.com.br/wp-content/uploads/2019/02/pernambucanas.jpg&nocache=1" />
                </>
            )
        }
        else if (window.location.href.includes('darc')) {
            return (
                <>
                    <h1>Darc</h1>
                    <img src="https://cdn.dooca.store/626/files/share-1200x600.jpg?v=1616440684&webp=0" />
                </>
            )
        }

        else if (window.location.href.includes('americanas')) {
            return (
                <>
                    <h1>Americanas</h1>
                    <img src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/657486/regular_4dda1ee4a4f732e5c02a2f06964fa45c.jpg" />
                </>

            )
        }

        else { }
        return (
            <h1>Não tem nenhum conteudo</h1>)
    }

    return (
        <div>
            {SuperLojas()}
        </div>
    )
}

export default Lojas;



