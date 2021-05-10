$('#botao-entrar').on('click',function(evento){
    var email = $('#email').val();

    if(email.indexOf("@") < 0){
        $('#email').css('border-color','red');
        $('#email').css('border-radius','4px');
        $('#mensagem').html('Email inválido.').css('color', 'red');
    }
    else if(email.indexOf("@") > 0){
        $('#mensagem').css('display', 'none');
    }
});