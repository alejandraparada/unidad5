function seleccionCiudad(){
    var ciudad = document.getElementById("cde").value;
    console.log(ciudad);
    document.getElementById("demo").innerHTML=`La ciudad seleccionada es: ${ciudad}`

    /*var ciudad = document.getElementById("cde");
    var i = ciudad.selectedIndex;
    ciudad.options[index].text*/
}

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
function reiniciar(){
    document.getElementById("suma").innerHTML="";
    document.getElementById("media").innerHTML="";
    document.getElementById("max").innerHTML="";
    document.getElementById("min").innerHTML="";
  
    

}