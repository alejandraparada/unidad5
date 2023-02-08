class Square {
    constructor(side){
        this.perimetro =side*4;
        this.area = side*side;
        this.showSide = function () {
            console.log('hola', this.side)
        }
    }
};

const pequeno = new Square(2);
console.log(pequeno)