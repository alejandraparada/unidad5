const heros =[
    {name: 'Spider-Man'},
    {name: 'Thor'},
    {name: 'Black Panter'},
    {name: 'Captain Marvel'},
    {name: 'Silver Surfer'}
];

var result = heros
    .map(function(hero,index) {
        return {id:index,superhero : hero.name}
    });
console.log(result); 
//var result = heros
//    .map((hero,index) =>({
//        id:index,
//        superhero : hero.name})
//    );
