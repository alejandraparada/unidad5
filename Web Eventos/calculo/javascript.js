
function separator(){
    var numeros = document.getElementById("tnum").value;
    /*var numeros = document.getElementById("tnum").value.split(",");*/
    console.log(numeros)
    var str= numeros.toString().split(",");
    str[0] = str[0].replace(/^\+(,\+)*$/g, ",");
    str.join(",");
    console.log(str)
    return str.map(Number);
}

function calcularNumeros(){
    var numeros = separator();
    console.log(numeros.lenght);
    
    var rSuma= document.getElementById("suma");
    var rMedia= document.getElementById("media");
    var rMax= document.getElementById("max");
    var rMin= document.getElementById("min");

    let sumaNum=0;
    let medNum=0;
    let max = 0;
    let min = numeros[0];
    let i=0;
    /*Calculo Suma*/
    for ( let numero of numeros ) {
        sumaNum = sumaNum + numero
        i++
    }
    console.log(sumaNum);
    rSuma.innerHTML=`La suma de los números es: ${sumaNum}`

    /*Calculo Media*/
    medNum = sumaNum / i;
    console.log(medNum);
    rMedia.innerHTML=`La media de los números es: ${medNum}`

    /*Calculo max*/
    

    for ( let numero of numeros ) {
        if (max < numero)
            max = numero;
    }
    console.log(max);
    rMax.innerHTML=`El valor máximo es: ${max}`

    /*Calculo min*/
    for ( let numero of numeros ) {
        if (min > numero)
            min = numero;
    }
    console.log(min);
    rMin.innerHTML=`El valor mínimo es: ${min}`
}
function reiniciar(){
    document.getElementById("suma").innerHTML="";
    document.getElementById("media").innerHTML="";
    document.getElementById("max").innerHTML="";
    document.getElementById("min").innerHTML="";
  
    

}