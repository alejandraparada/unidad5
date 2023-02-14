function enter(){
    var text = document.getElementById("txta").value;
    console.log(text);
    document.getElementById("demo").innerHTML=text;
    document.getElementById("txta").value="";
    //alert("HAZ ENVIADO TU MENSAJE")
}
//var input = document.getElementById("txta");
//input.addEventListener('keypress', showText);
function showText(evento){
    if (evento.keyCode === 13){
        enter();
    }
}