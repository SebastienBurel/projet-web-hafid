/**
 * gestion des points en 2D
 * 
 */

function init(x=0,y=0){
	point = new Object(); //new Object({'x':x, 'y':y})
	point.x = x;
	point.y = y;
	return point; // {"x":x, "y",y}
}

function deplacer(p, dx, dy){
	p.x += dx; 
	p.y += dy;
}

function afficher(p){
	console.log("Point(x="+p.x +",y="+ p.y +")");
}
console.log("init p1, x=1,y=2");
let p1 = init(1,2);
afficher(p1);
console.log("deplacer p1, dx=3, dy=4")
deplacer(p1,3,4);
//afficher p1
afficher(p1);


let p2 = init(1,2);
deplacer(p2,3,4);