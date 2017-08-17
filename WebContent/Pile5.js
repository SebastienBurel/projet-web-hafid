/**
 * Constructeur de Pile
 */
let Pile = function (taille) {
	this.elements = [];  // pile = []
	this.tailleMax = taille;
	
	

	this.empiler = function(element){
		
		if(this.elements.length < this.tailleMax) {
			this.elements.push(element);
		} else {
			
			console.log("Pile pleine !");
		}
	}
	

	this.depiler = function () {	
		if(this.elements.length > 0) {		
			return this.elements.pop();
		} else {
			console.log("Pile vide !");
		}

	}
	

	this.afficher = function () {
		
		for(let i = 0 ; i < this.elements.length ; i++){
			console.log(i + " " + this.elements[i]);
		}
	}
	

	this.taille = function() {
		
		return this.elements.length;
	}

}




//Les tests
//initialiser une pile de taille max = 5
pile1 = new Pile(2);
console.log("Taille initiale de la pile: " + pile1.taille());
pile1.empiler("Elephant");
pile1.empiler("Giraffe");
pile1.empiler("Hippo");
pile1.afficher();
console.log("Taille actuelle de la pile: " +  pile1.taille());
let elem = pile1.depiler();
console.log("elem depile " + elem);
pile1.afficher();
console.log("Taille actuelle de la pile: " + pile1.taille());
pile1.depiler();
pile1.afficher();
console.log("Taille actuelle de la pile: " + pile1.taille());
