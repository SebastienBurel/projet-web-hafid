"use strict";

console.log("exemple de script js")

//Definition de la fonction factoriel
/**
 * fonction factoriel
 */
var factoriel = function(param){ // function factoriel()
	var res = 1 ;
	for (var i=1;i<=param;i++){
		res *= i;
	}
	return res ;
}
//Appel de la fonction factoriel
let  resultat1 = factoriel(5);
let  resultat2 = factoriel(10);
//Affichage du resultat
console.log("resultat1 : "+ resultat1)
console.log("resultat2 : "+ resultat2);
var fact = factoriel;
console.log("resultat fact 1 : "+ fact(5))
console.log("resultat fact 1 : "+ fact(10));










