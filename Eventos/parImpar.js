function displayNumber(){
    document.getElementById("demo").innerHTML = "";
    const number= document.getElementById('myNum').value;
    var result= document.getElementById("demo");
    if (number ==1){
        result.innerHTML = "Es impar";
    }else if((number%2)==0 || number==0){
        result.innerHTML = "Es par";
    }else {
        result.innerHTML = "Es impar";
    }
}