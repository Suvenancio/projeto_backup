$('#botao-recup').on('click',function(evento){
    var email = $('#email').val();

    if(email.indexOf("@") < 0){
        $('#email').css('border-color','red');
        $('#email').css('border-radius','4px');
        $('#mensagem').html('Email inválido.').css('color', 'red');
    }
    else{
        $('#mensagem').html('Link enviado, confira sua caixa de entrada.').css('color', 'green');
    }
});