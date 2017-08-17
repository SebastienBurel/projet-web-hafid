/**
 * 
 */
function init(taille) {
	pile = {};
	pile.elements = [];  // pile = []
	pile.tailleMax = taille;
	return pile;
}

function empiler(pile, element){
	
	if(pile.elements.length < pile.tailleMax) {
		pile.elements.push(element);
	} else {
		
		console.log("Pile pleine !");
	}
}

function depiler(pile) {	
	if(pile.elements.length > 0) {		
		return pile.elements.pop();
	} else {
		console.log("Pile vide !");
	}
	
	
}

function afficher(pile) {
	
	for(let i = 0 ; i < pile.elements.length ; i++){
		console.log(i + " " + pile.elements[i]);
	}
}

function taille(pile) {
	
	return pile.elements.length;
}

//Les tests
//initialiser une pile de taille max = 5
pile1 = init(2);
console.log("Taille initiale de la pile: " + taille(pile1));
empiler(pile1, "Elephant");
empiler(pile1, "Giraffe");
empiler(pile1, "Hippo");
afficher(pile1);
console.log("Taille actuelle de la pile: " + taille(pile1));
let elem = depiler(pile1);
console.log("elem depile " + elem);
afficher(pile1);
console.log("Taille actuelle de la pile: " + taille(pile1));
depiler(pile1);
afficher(pile1);
console.log("Taille actuelle de la pile: " + taille(pile1));
