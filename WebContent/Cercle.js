function cercle(rayon){
	c = {};
	c.rayon = rayon ;
	return c ;
}
function afficher(cercle){
	console.log("@");
	console.log("Cercle( rayon ::: " + cercle.rayon + ")");
}
function perimetre(cercle){
	return (2*Math.PI*cercle.rayon);
}
function surface(cercle){
	return (Math.PI*Math.pow(cercle.rayon,2)).toFixed(2);
}

/***********************************************
 * /***********************************************
 */

c = cercle(5);
afficher(c);
console.log("@");
console.log("périmètre ::: " + perimetre(c));
console.log("@");
console.log("surface ::: " + surface(c));
