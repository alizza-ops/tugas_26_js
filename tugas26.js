function checkNotInfinity(){

		var x=[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

		for (var i=0; i < x.length ; i++) {

			if (isFinite(x) === false) {
				console.log("Angka "+ x[i] + " NOT Infinity");
			}

			else{
				console.log("Angka "+ x[i] + " Infinity");	
			}

		}
}

checkNotInfinity();