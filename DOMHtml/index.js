
const enlaces= document.getElementsByTagName('a');
console.log(enlaces.length)

const penultimo = enlaces[enlaces.length-2].href;
console.log(penultimo)

const parrafo1 = document.createElement('p')
const contenido1= document.createTextNode(enlaces.length + " " + penultimo)
const contenido2= document.createTextNode(penultimo)

parrafo1.appendChild(contenido1)
document.body.appendChild(parrafo1)

const estilo = document.getElementsByClassName('correcto').style;
console.log(estilo);

//añadir estilo
const subT= document.getElementsByTagName('h2')[1];
subT.style.color='red'
console.log(subT)

//borrar estilo
const subT1= document.getElementsByTagName('h2')[0];
subT1.classList.remove('correcto')

//body.innerHTML = body.innerHTML + "<br/>" + penultimo;


