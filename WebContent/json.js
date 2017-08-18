

let json ='[{"indice":10,"element":"Sciences"},{"indice":12,"element":"Voyages"},{"indice":13,"element":"Culture"}]';

let elements = JSON.parse(json);
for(let i=0; i < elements.length; i ++){
	let elem = elements[i];
	//console.log("indice:"+elem["indice"] )
	console.log("indice:"+elem.indice);
	console.log("element:"+elem.element);
}

