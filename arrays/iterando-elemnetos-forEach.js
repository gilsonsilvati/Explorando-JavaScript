// Cria array
var nomes = ['João', 'Pedro', 'Maria', 'José'];

// Varre o array mostrando seus valores
for (var i = 0; i < nomes.length; i++) {
	console.log('Nome na posição [', i, '] :', nomes[i].toUpperCase());
}

// Varre o array mostrando suas posições
for (var nome in nomes) {
	console.log('Posição :', nome);
}

// Varre usando forEach
nomes.forEach(function(e) {
	console.log('Nome :', e);
});
