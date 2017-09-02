$(function() {
	var resposta = $.ajax({
		url: 'http://127.0.0.1:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	resposta.done(function(estados) {
		var comboEstado = $('#combo-estado');
		// comboEstado.empty();
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	resposta.fail(function(estados) {
		alert('Erro carregando estados do servidor!');
	});

});