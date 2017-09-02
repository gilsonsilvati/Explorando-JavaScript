$(function() {
	var resposta = $.ajax({
		url: 'http://127.0.0.1:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	// Promises...
	resposta.done(function(estados) {
		estados.forEach(function(estado) {
			console.log(estado);
		});
	});

	// Promises...
	resposta.fail(function(estados) {
		alert('Erro carregando estados do servidor!');
	});

});