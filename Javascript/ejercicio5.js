const names = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const longNames = names
    .filter(name=> name.length > 6)
    .map(name=> name.toUpperCase())
const count = longNames.length;
console.log(longNames); 
console.log("Los meses con mas de 7 letras son: ",count)

/*
const longNames = names.filter(function(name) {
    return name.length>6
});
console.log(longNames);
*/