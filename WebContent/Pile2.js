/**
 * 
 */


function init(taille) {
	pile = {};
	pile.elements = [];  // pile = []
	pile.tailleMax = taille;
	pile.indice = 0;
	return pile;
}

function empiler(pile, element){
	
	if(pile.indice < pile.tailleMax) {
			
		//pile.elements[pile.indice] = element;
		pile.elements.push(element)
		pile.indice ++;
	} else {
		
		console.log("Pile pleine !");
	}
}

function depiler(pile) {	
	if(pile.indice > 0) {		
		pile.indice -- ; // redimensionnement brutal !
		return pile.elements.pop() // pile.elements[pile.indice];
	} else {
		console.log("Pile vide !");
	}
	
	
}

function afficher(pile) {
	
	for(let i = 0 ; i < pile.indice ; i++){
		console.log(i + " " + pile.elements[i]);
	}
}

function taille() {
	
	return pile.indice;
}

//Les tests
//initialiser une pile de taille max = 5
pile1 = init(2);
pile2 = init(100);
console.log("Taille initiale de la pile: " + taille(pile1));
empiler(pile1, "Elephant");
empiler(pile1, "Giraffe");
empiler(pile1, "Hippo");
afficher(pile1);
console.log("Taille actuelle de la pile: " + taille(pile1));
depiler(pile1);
afficher(pile1);
depiler(pile1);
afficher(pile1);
console.log("Taille actuelle de la pile: " + taille(pile1));
