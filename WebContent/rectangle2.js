/**
 * 
 */

let Rectangle = function (long=0, larg=0){
	this.long = long;
	this.larg = larg;
	
	this.perimetre = function(){
		return 2 * (this.long + this.larg);
	}


	this.surface = function (){
		return this.long * this.larg;
	}
	this.afficher = function(){
		console.log("Rect(long:"+this.long+",larg:"+this.larg+")");
	}
}

//Tests
rect1 = new Rectangle(2, 9)
rect1.afficher();
let p1 = rect1.perimetre()
console.log("perimetre rect1: "+ p1)
let s1 = rect1.surface()
console.log("surface rect1: "+ s1)
