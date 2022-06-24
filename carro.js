//código do carro

//carro1
let xCarros = [420,420,420,420,420,420];
let yCarros = [40,97,150,212,263,318];
let velCarros = [2,2.5,3.2,5,3.3,2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  
  for(let i =0;i< imagemCarros.length; i++){
   image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro(){
  
  for(let i=0; i < imagemCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
 
  for(let i=0; i < imagemCarros.length; i++){
     if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
     }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}



