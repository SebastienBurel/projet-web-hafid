/**
 * Rectangle en POP : Programation Orientee Prototype
 */

let Rectangle = function (long=0, larg=0){
	this.long = long;
	this.larg = larg;
}

Rectangle.prototype.perimetre = function(){
	return 2 * (this.long + this.larg);
}

Rectangle.prototype.surface = function (){
	return this.long * this.larg;
}
Rectangle.prototype.toString = function(){
	return "Rect(long:"+this.long+",larg:"+this.larg+")";
}

//affichage du prototype et du constructeur
console.log("Prototype : "+Rectangle.prototype);
console.log("Constructeur : "+Rectangle.prototype.constructor);


//Tests
rect1 = new Rectangle(2, 9)
console.log(rect1.toString());
let p1 = rect1.perimetre()
console.log("perimetre rect1: "+ p1)
let s1 = rect1.surface()
console.log("surface rect1: "+ s1)
console.log("JSON : "+ JSON.stringify(rect1))
