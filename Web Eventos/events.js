
function displayEvent(){
    var frase = document.getElementsByTagName('input')[0].value;
    var result= document.getElementById("demo");
    if (frase == frase.toLowerCase()){
        result.innerHTML="La frase esta escrita en minúscula"
    }else if(frase == frase.toUpperCase()){
        result.innerHTML="La frase esta escrita en mayúscula".toUpperCase();
    }else{
        result.innerHTML="La frase contiene letras MAYÚSCULAS y minúsculs"
    }
}

