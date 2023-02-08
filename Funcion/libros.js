const books=[
    {title:'El Quijote', age: 30, avg_rating: 4.5},
    {title:'Don Juan', age: 24, avg_rating: 3.8},
    {title:'Cien años de Soledad', age: 36, avg_rating: 4.7},
    {title:'Matar a un ruiseñor', age: 20, avg_rating: 5},
    {title:'El gran gatsby', age: 26, avg_rating: 3.6}
]
console.log(books)
var result = books
    .filter(function(book) {
        return book.avg_rating >= 4
    })
    .map(function(book) {
        return {title: book.title,raiting : book.avg_rating}
    });
console.log(result); 


