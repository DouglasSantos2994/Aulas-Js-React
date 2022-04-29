import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const brasil = {
    clube: 'Brasil',
    time: [
      { jogador: 'Alisson ' },
      { jogador: 'Daniel Alves' },
      { jogador: 'Marquinhos' },
      { jogador: 'Thiago Silva' },
      { jogador: 'Guilherme Arana' },
      { jogador: 'Casemiro' },
      { jogador: 'Btuno Guimarães' },
      { jogador: 'Lucas Paquetá' },
      { jogador: 'Neymar' },
      { jogador: 'Matheus Cunha' },
      { jogador: 'Vinicius Junior' }
    ]
  }

  const corinthians = {
    clube: 'Corinthians',
    time: [
      { jogador: 'Cássio ' },
      { jogador: 'Fagner' },
      { jogador: 'Gil' },
      { jogador: 'João Victor' },
      { jogador: 'Fabio Santos' },
      { jogador: 'Maycon' },
      { jogador: 'Giuliano' },
      { jogador: 'Renato Augusto' },
      { jogador: 'Róger Guedes' },
      { jogador: 'Willian' },
      { jogador: 'Jô' }
    ]
  }

  const palmeiras = {
    clube: 'Palmeiras',
    time: [
      { jogador: 'Weverton' },
      { jogador: 'Mayke' },
      { jogador: 'Kuscevic' },
      { jogador: 'Gustavo Gómes' },
      { jogador: 'Jorge' },
      { jogador: 'Danilo' },
      { jogador: 'Atuesta' },
      { jogador: 'Gustavo Scarpa' },
      { jogador: 'Dudu' },
      { jogador: 'Rony' },
      { jogador: 'Rafael Navarro' }
    ]
  }

  const saoPaulo = {
    clube: 'São Paulo',
    time: [
      { jogador: 'Tiago Volpi' },
      { jogador: 'Igor Vinicius' },
      { jogador: 'Arboleda' },
      { jogador: 'Leo' },
      { jogador: 'Reinaldo' },
      { jogador: 'Luan' },
      { jogador: 'Igor Gomes' },
      { jogador: 'Gabriel Sara' },
      { jogador: 'Alisson' },
      { jogador: 'Eder' },
      { jogador: 'Luciano' }
    ]
  }

  const celulas = {
    celula: [
      { membro: 'Douglas' },
      { membro: 'Leyd' },
      { membro: 'Stephanie' },
      { membro: 'Léia' },
      { membro: 'Mayara' },
      { membro: 'Bianca' },
      { membro: 'Marcelo' },
      { membro: 'Diego' },
      { membro: 'Jaqueline' },
      { membro: 'Pamela' },
    ],
    celulaBruno: [
      { membro: 'Bruno' },
      { membro: 'Sandy' },
      { membro: 'Sarinha' },
      { membro: 'Lari' },
      { membro: 'Elisa' },
      { membro: 'Taci' },
      { membro: 'Lisandra' },
      { membro: 'Matheus' },
      { membro: 'Raquel' },
      { membro: 'Rodrigada' },
    ],
    celulaFelipe: [
      { membro: 'Felipe' },
      { membro: 'Prisciane' },
      { membro: 'Vitão' },
      { membro: 'Italo' },
      { membro: 'Bia' },
      { membro: 'Caio' },
      { membro: 'Grazy' },
      { membro: 'Julia' },
      { membro: 'Nathan' },
      { membro: 'Mari' },
    ]
  }

  const [substituir, setsubstituir] = useState(0)
  const [clubes, setClubes] = useState(brasil.clube)
  const [time, setTime] = useState(brasil.time)

  const [alterarCelula, setAlterarCelula] = useState(0)
  const [familia, setFamilia] = useState(celulas.celula)

  useEffect(() => {

    if (substituir === 1) {
      setClubes(corinthians.clube)
      setTime(corinthians.time)
    }

    if (substituir === 2) {
      setClubes(palmeiras.clube)
      setTime(palmeiras.time)
    }

    if (substituir === 3) {
      setClubes(saoPaulo.clube)
      setTime(saoPaulo.time)
    }


  }, [substituir])

  useEffect(() => {
    if (alterarCelula === 0) {
      setFamilia(celulas.celula)
    } else if (alterarCelula === 1) {
      setFamilia(celulas.celulaBruno)
    } else if (alterarCelula === 2) {
      setFamilia(celulas.celulaFelipe)
    } else {
      setAlterarCelula(0)
    }
  }, [alterarCelula])

  return (
    <div className="container">

      <div className='box'>
        <h1>{clubes}</h1>
        {time.map(jogadores => (
          <p>{jogadores.jogador}</p>
        ))}
      </div>

      <div className='botoes'>
        <button onClick={() => setsubstituir(1)}>Corinthians</button>
        <button onClick={() => setsubstituir(2)}>Palmeiras </button>
        <button onClick={() => setsubstituir(3)}>São Paulo</button>
      </div>

      <div className='box'>
        {familia.map(nome => (
          <p>{nome.membro}</p>
        ))}

        <button onClick={() => setAlterarCelula(alterarCelula +1)}>Alterar celula</button>
      </div>
    </div>
  );
}

export default App;