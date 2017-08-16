/**
 * gestion des points en 2D
 * 
 */

function init(x=0,y=0){
	point = new Object();
	point.x = x;
	point.y = y;
	
	point.deplacer = function(dx, dy){
		this.x += dx;
		this.y += dy;
	}	
	
	

	point.afficher = function (){
		console.log("Point(x="+this.x +",y="+ this.y +")");
	}
	
	return point;
}



console.log("init p1, x=1,y=2");
let p1 = init(1,2);
p1.afficher();
console.log("deplacer p1, dx=3, dy=4")
p1.deplacer(3,4);
//afficher p1
p1.afficher();
