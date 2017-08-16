/**
 * suite de fibonacci avec un tableau
 */

function fibo(n){
	let suite = [0,1];
	
	for(let i = 2; i <= n ; i++){
		
		suite[i] = suite[i-1] + suite[i-2];
	}
	// le dernier terme
	//return suite[n];
	let taille = suite.length;
	//console.log("taille : " + taille)
	return suite[taille-1];
}

function fibo1(n){
	let U0 = 0;
	let U1 = 1;
	let Un;
	
	for(let i = 2; i <= n ; i++){
		Un = U0 + U1;
		U0 = U1;
		U1 = Un;
	}
	// le dernier terme
	return Un; // ou U1
}
//Appel de la fonction fibo
console.log("fibo(4) : " +fibo(4) );
console.log("fibo(10) : " +fibo(10) );
console.log("fibo1(10): " +fibo1(10));