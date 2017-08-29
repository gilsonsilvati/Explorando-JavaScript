/* ready : carregar .js depois que o html estiver completo... (jQuery) */
$(function() {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	/* Selecionar todos quando todos estiverem marcados */
	selecaoUsuarios.on('click', function() {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	/* selecionar ou não todos */
	selecaoTodosUsuarios.on('click', function() {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});

});