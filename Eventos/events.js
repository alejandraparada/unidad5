//document.getElementById("myBtn").addEventListener("click", displayAlert);
function displayAlert(){
    alert("Bienvenido a los juegos del hambre")
}

//document.getElementById("name").addEventListener("focusin", colorIn);
//document.getElementById("name").addEventListener("focusout", colorOut);

//function colorIn(){document.getElementById("name").style.background= 'red'}
//function colorOut(){document.getElementById("name").style.background= 'blue'}

var inputFondo = document.getElementsByTagName('input')[1];
inputFondo.addEventListener('focus', cambioColor);
function cambioColor(){
    inputFondo.style.backgroundColor='yellow'
};
inputFondo.addEventListener('focusout', quitarColor);
function quitarColor(){
    inputFondo.style.backgroundColor=''
};

var inputLetras = document.getElementsByTagName('input')[2];
inputLetras.addEventListener('keydown', vocales);
function vocales (event){
    const vocals= [65,69,79,73,85];
    //if (event.keyCode == 65|| event.keyCode == 69|| event.keyCode ==79|| event.keyCode ==73|| event.keyCode ==85){
    //    inputLetras.style.color='red';
    //}else {inputLetras.style.color='green';}
    //if (vocals.includes(event.KeyCode)===true){
    if(vocals.indexOf(event.KeyCode)!== -1){
        inputLetras.style.color='red';
    }else{
        inputLetras.style.color='green';
    }
    
}