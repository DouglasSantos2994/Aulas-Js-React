
export  const Musica = (valorDigitado)=> {
   if(valorDigitado === 'Guitarra'){
       console.log('cordas')
   }
   else if(valorDigitado === 'Bateria' ){
    console.log('pedal')
   }
   else if(valorDigitado === 'Microfone' ){
    console.log('tem fios')
   }
   else{  console.log('não existe esse istrumento')}
}

export  const Futebol = (jogador)=> {
   switch(jogador){
       case "Cristiano" : console.log("Melhor jogador"); break;
       case "Messi" : console.log("Um dos melhores jogadores"); break;
       case "Buffon" : console.log(" Melhor goleiro"); break;
      default : console.log("Jogadores estão em falta"); break;
   }
 }



