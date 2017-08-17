/**
 * calcul perimetre et aire d'un rectangle
 */

let rectangle  = function (longueur=0,largeur=0){ 
	this.longueur = longueur;
	this.largeur = largeur;
	
	
	
	this.perimetre = function(){
		perimetre = (this.longueur + this.largeur)*2;
		console.log("perimetre du rectangle : " +perimetre);
	}

	this.aire = function(){
		aire = this.longueur * this.largeur;
		console.log("aire du rectangle : " +aire);
	}
	
	
	//return this; 
}



console.log("rectangle r1, longueur=4,largeur=2");
let r1 = new rectangle(4,2);
r1.perimetre();
r1.aire();

console.log("rectangle r2, longueur=10, largeur=5")
let r2 = new rectangle(10,5)
r2.perimetre();
r2.aire();
