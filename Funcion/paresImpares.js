const numeros = [253, 8575,1,20,562,1233,25,27,258,254,7485,2683]
const pares = numeros.filter(function (numero){
    if (numero === 0) {
        return numero;
    } else if (numero%2==0){
        return numero
    }
});
console.log(pares);

