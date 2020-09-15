
// ES5 solution

function Point(x, y) {
    this.x = x
    this.y = y
  }

  Point.prototype.printLocation = function(){
      console.log("Location: "+this.x + " ," + this.y)
  }

// Shape class
function Shape(color, x, y) {
    this.color = color;
    this.p = new Point(x, y)
}

Shape.prototype = Object.create(Point.prototype)

Shape.prototype.setLocation = function(x, y) {
    this.p = new Point(x, y)
};

Shape.prototype.printShape = function(){
    console.log(this.color)
}

// Circle class
function Circle(color, x, y, r){
    Shape.call(this, color, x, y)
    this.Name = "Circle"
    this.radius = r
    this.area = this.radius * this.radius * 3.14
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.printShape = function(){
    console.log(this.color + " - " + this.Name)
    console.log("Radius: " + this.radius)
    console.log("Area: "+ this.area)
    this.p.printLocation()
}

// Square class
function Square(color, x, y, h){
    Shape.call(this, color, x, y)
    this.Name = "Square"
    this.hight = h
    this.area = this.hight * this.hight
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.printShape = function(){
    console.log(this.color + " - " + this.Name)
    console.log("Hight: " + this.hight)
    console.log("Area: "+ this.area)
    this.p.printLocation()
}

// Rectangle class
function Rectangle(color, x, y, h, w){
    Shape.call(this, color, x, y)
    this.Name = "Rectangle"
    this.hight = h
    this.width = w
    this.area = this.hight * this.width
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.printShape = function(){
    console.log(this.color + " - " + this.Name)
    console.log("Hight: " + this.hight + ", Width: " + this.width)
    console.log("Area: "+ this.area)
    this.p.printLocation()
}

var circle = new Circle("black", 1, 1, 4)
var square = new Square("purple", 1, 1, 8, 8)
var rectangle = new Rectangle("blue", 1, 1, 3, 6)