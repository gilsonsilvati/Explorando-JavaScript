// variável global
var nome = 'AlgaWorks';

var capitalizar = function() {
	// variavel local
	var nome = 'AlgaWorks'.toUpperCase();
}

capitalizar();
console.log('nome :', nome);

var capitalizar2 = function() {
	// variável global
	nome = 'AlgaWorks'.toUpperCase();
}

capitalizar2();
console.log('nome2 :', nome);
