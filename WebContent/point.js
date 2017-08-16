/**
 * gestion des points en 2D
 * 
 */

function init(x=0,y=0){
	return [x,y];
}

function deplacer(p, dx, dy){
	p[0] += dx;
	p[1] += dy;
}

function afficher(p){
	console.log("Point(x="+p[0]+",y="+p[1] +")");
}
console.log("init p1, x=1,y=2");
let p1 = init(1,2);
afficher(p1);
console.log("deplacer p1, dx=3, dy=4")
deplacer(p1,3,4);
//afficher p1
afficher(p1);
console.log("init p, avec les valeurs par defaut");
let p2 = init(1);
afficher(p2);

