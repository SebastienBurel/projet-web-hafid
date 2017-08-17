/**
 * 
 */

var pile;
var tailleMax;
//var indice;

function Init(taille) {	
	pile = [];  // pile = []
	tailleMax = taille;
	//indice = 0;
	
}

function Empiler(element){
	
	if(pile.length < tailleMax) {
			
		//pile[indice] = element;
		//indice ++;
		
		pile.push(element);
			
		
	} else {
		
		console.log("Pile pleine !");
	}
}

function Depiler() {	
	if(pile.length > 0) {	
		
		//indice -- ; 
		//return pile[indice];
		
		pile.pop();
		
	} else {
		console.log("Pile vide !");
	}
	
	
}

function Afficher() {
	
	for(let i = 0 ; i < pile.length ; i++){
		console.log(i + " " + pile[i]);
	}
}

function Taille() {
	
	return pile.length;
}

//Les tests
//initialiser une pile de taille max = 2
Init(2);
console.log("Taille initiale de la pile: " + Taille());
Empiler("Elephant");
Empiler("Giraffe");
Empiler("Hippo"); //la pile devient pleine du coup message "pile pleine" s'affiche
Afficher();
console.log("Taille actuelle de la pile: " + Taille());
Depiler();
Afficher();
Depiler();
Afficher();
console.log("Taille actuelle de la pile: " + Taille());
