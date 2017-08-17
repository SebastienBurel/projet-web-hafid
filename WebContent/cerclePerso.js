
/**
 * calcul perimetre et aire d'un cercle
 */

let cercle  = function (rayon){ 
	this.rayon = rayon;
		
	
	
	this.perimetre = function(){
		perimetre = (2 * Math.PI * this.rayon).toFixed(2); //toFixed(2) pour n'avoir que 2 chiffres après la virgule
		console.log("perimetre du cercle : " +perimetre);
	}

	this.aire = function(){
		aire = (Math.PI * Math.pow(this.rayon, 2)).toFixed(2);
		console.log("aire du cercle : " +aire);
	}
	
	
	//return this; 
}



console.log("cercle c1, rayon=2");
let c1 = new cercle(2);
c1.perimetre();
c1.aire();

console.log("cercle c2, rayon=10")
let c2 = new cercle(10)
c2.perimetre();
c2.aire();
