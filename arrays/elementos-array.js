var acessorio = { som : 'Pioneer', banco : 'Couro' };

var ligar = function(modelo) {
	console.log('Ligando o carro de modelo -', modelo);
}

var fox = [ 'Fox', 4, acessorio, ligar ];

console.log(fox);

console.log(fox[2].som);

fox[3](fox[0]);
