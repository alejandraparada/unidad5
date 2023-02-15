function addLista(){
    var texto = document.getElementById("txtl").value;
    //node.innerHTML=texto;
    //node.append(texto);
    //document.querySelector('section').append(node)
    var node = document.createElement('li');
    //node.innerHTML=texto;
    var check= document.createElement('input')
    //check.type='checbox'
    check.setAttribute('type','checkbox')

    node.appendChild(check)
    node.append(texto)

    var listaTarea= document.getElementById('list');
    listaTarea.appendChild(node)

    
    
    //node.appendChild(document.createTextNode(texto));
    //document.querySelector('ul').appendChild(node);
    

   


    document.getElementById("txtl").value="";
}




var input = document.getElementById("txtl");
input.addEventListener('keypress', showText);
function showText(evento){
    if (evento.keyCode === 13){
        addLista();
    }
}
