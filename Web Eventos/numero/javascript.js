var contador = 0;
function incrementCounter(){
    ++contador;
    document.getElementById("cont").innerHTML = contador;
}
function resetCounter(){
    contador=0;
    document.getElementById("cont").innerHTML = contador;
}

function adivinarNumero(){
    var nRandom= Math.ceil(Math.random()*10);
    console.log('random',nRandom);
    var numero = document.getElementById("tnum").value;
    console.log(numero)
    if (numero==nRandom){
        document.getElementById("resultado").innerHTML= `Adivinaste! El número es: ${numero}`
        resetCounter();
    }else{
        document.getElementById("resultado").innerHTML= `Suerte la próxima!`;
        cont= 1;
        incrementCounter();
    }
}