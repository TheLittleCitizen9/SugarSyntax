// ES6 solution

class Point{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    printLocation(){
        console.log("Location: "+this.x + " ," + this.y)
    }
}

class Shape{
    constructor(color, x, y) {
        this.color = color;
        this.p = new Point(x, y)
    }

    printShape(){}

    setLocation(x, y) {
        this.p = new Point(x, y)
    }
}

class Circle extends Shape{
    constructor(color, x, y, r){
        super(color, x, y)
        this.Name = "Circle"
        this.radius = r
        this.area = this.radius * this.radius * 3.14
    }

    printShape(){
        console.log(this.color + " - " + this.Name)
        console.log("Radius: " + this.radius)
        console.log("Area: "+ this.area)
        this.p.printLocation()
    }
}

class Square extends Shape{
    constructor(color, x, y, h){
        super(color, x, y)
        this.Name = "Square"
        this.hight = h
        this.area = this.hight * this.hight
    }

    printShape(){
        console.log(this.color + " - " + this.Name)
        console.log("Hight: " + this.hight)
        console.log("Area: "+ this.area)
        this.p.printLocation()
    }
}

class Rectangle extends Shape{
    constructor(color, x, y, h, w){
        super(color, x, y)
        this.Name = "Rectangle"
        this.hight = h
        this.width = w
        this.area = this.hight * this.width
    }

    printShape(){
        console.log(this.color + " - " + this.Name)
        console.log("Hight: " + this.hight + ", Width: " + this.width)
        console.log("Area: "+ this.area)
        this.p.printLocation()
    }
}

var circle = new Circle("black", 1, 1, 4)
var square = new Square("purple", 1, 1, 8, 8)
var rectangle = new Rectangle("blue", 1, 1, 3, 6)