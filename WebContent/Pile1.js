/**
 * 
 */

var pile;
var tailleMax;
var indice;

function Init(taille) {	
	pile = [];  // pile = []
	tailleMax = taille;
	indice = 0;
	
}

function Empiler(element){
	
	if(indice < tailleMax) {
			
		pile[indice] = element;
		indice ++;
	} else {
		
		console.log("Pile pleine !");
	}
}

function Depiler() {	
	if(indice > 0) {		
		indice -- ; // redimensionnement brutal !
		return pile[indice];
	} else {
		console.log("Pile vide !");
	}
	
	
}

function Afficher() {
	
	for(let i = 0 ; i < indice ; i++){
		console.log(i + " " + pile[i]);
	}
}

function Taille() {
	
	return indice;
}

//Les tests
//initialiser une pile de taille max = 5
Init(2);
Init(10);
console.log("Taille initiale de la pile: " + Taille());
Empiler("Elephant");
Empiler("Giraffe");
Empiler("Hippo");
Afficher();
console.log("Taille actuelle de la pile: " + Taille());
Depiler();
Afficher();
Depiler();
Afficher();
console.log("Taille actuelle de la pile: " + Taille());
