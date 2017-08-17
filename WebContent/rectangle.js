/**
 * 
 */

function init(long=0, larg=0){
	//return {"long":long, "larg": larg};
	let rect = {};
	rect.long = long;
	rect.larg = larg;
	return rect;
}

function perimetre(rect){
	return 2 * (rect.long + rect.larg);
}

function surface(rect){
	return rect.long * rect.larg;
}

function afficher(rect){
	console.log("Rect(long:"+rect.long+",larg:"+rect.larg+")");
}
//Tests
rect1 = init(2, 9)
afficher(rect1);
let p1 = perimetre(rect1)
console.log("perimetre rect1: "+ p1)
let s1 = surface(rect1)
console.log("surface rect1: "+ s1)
