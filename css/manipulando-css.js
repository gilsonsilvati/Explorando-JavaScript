/* ready : carregar .js depois que o html estiver completo... (jQuery) */
$(function() {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	/* Removendo duplicação de código */
	function estilizarLinhaUsuario() {
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

	/* Selecionar todos quando todos estiverem marcados */
	selecaoUsuarios.on('click', function() {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	/* selecionar ou não todos */
	selecaoTodosUsuarios.on('click', function() {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		/*if (selecaoTodosUsuarios.prop('checked')) {
			selecaoUsuarios.parents('tr').addClass('selecionado');
		} else {
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuario();
	});

	/* Mudar de cor quando selecionado */
	selecaoUsuarios.on('change', function(evento) {
		/*var selecaoUsuario = $(evento.target);
		if (selecaoUsuario.prop('checked')) {
			selecaoUsuario.parents('tr').addClass('selecionado');
		} else {
			selecaoUsuario.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuario();
	});

});