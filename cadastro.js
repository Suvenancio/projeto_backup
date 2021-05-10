$('#botao-cadastrar').on('click',function(evento){
    var senha = $('#senha').val();
    var conf = $('#conf-senha').val();
    var email = $('#email').val();

    if(email.indexOf("@") < 0){
        $('#email').css('border-color','red');
        $('#email').css('border-radius','4px');
        $('#mensagem').html('Email inválido.').css('color', 'red');
    }
    else if(senha != conf){
        $('#senha').css('border-color','red');
        $('#conf-senha').css('border-color','red')
        $('#senha').css('border-radius','4px');
        $('#conf-senha').css('border-radius','4px');
        $('#mensagem').html('Senhas não correspondidas.').css('color', 'red');
    }
    else if(senha == false && conf == false){
        $('#senha').css('border-color','red');
        $('#senha').css('border-radius','4px');
        $('#mensagem').html('Informe uma senha.').css('color', 'red');
    }
    else{
        $('#mensagem').html('Cadastro feito com sucesso.').css('color', 'green');
    }

});

$('#cep').on('blur', function(evento){
    var cep = $('#cep').val();
    
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,

        success: function(dados){
            $('#rua').val(dados.logradouro);
            $('#complemento').val(dados.complemento);
            $('#bairro').val(dados.bairro);
            $('#cidade').val(dados.localidade);
            $('#estado').val(dados.uf);
        },
    });
});