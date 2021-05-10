$('#btn').click(function(){
   
    buscaFilme(busca)

})



function buscaFilme(){


    var busca = $('#busca').val()
    var url = "http://www.omdbapi.com/?apikey=f5e93ab6&s="

    $.ajax({

        'url': url+busca ,
   
    
         'success': function(results)
          {   
            console.log(results)
            var filmes = results.Search;

            var salvarFilmes = "";
           
            try{
                

    
    
                $.each(filmes, (index, filme)=>{
                    
                    salvarFilmes +=
                    `    
                    <h1>${filme.Title}</h1>
                    <img src= "${filme.Poster}">
                
                   `
                })
                                
                $('#filmes').html(` ${salvarFilmes}`)
                
      
                if(results.Response=== "False"){


                    throw new Error()
                }
 
            }
            catch(err){

    
                if(results.Error== "Too many results."){
                $('#filmes').html(` <h1>Sua busca trouxe muitos resultados, Seja mais específico!</h1>`)
                }else
                {
                    $('#filmes').html(` <h1>Sua busca não trouxe nenhum resultado</h1>`)

                    
                }
                console.log(err)
            }
           
         }      
})               
}




$('.filmes').click(function () {

    var busca = $('#busca').val()
    var url = "http://www.omdbapi.com/?apikey=f5e93ab6&s="

    $.ajax({

        'url': url+busca ,


        'success': function(results)
        {   
            let filmes = results.Search;
            let salvamovie = "";
            const indice = $(this).data('indice')

            $('#myModal').modal('show')

           

        }
     
    })

})


function criarObjeto(busca){

    var busca = $('#busca').val()
    var url = "http://www.omdbapi.com/?apikey=f5e93ab6&s="

    $.ajax({

        'url': url+busca ,


        'success': function(results)
        {   
            const filme = dados(results)
            mostra(filme)
        }
     
    })
}




function dados(results){


    return {

        img: results.Poster,
        Nome: results.name,
        Ano: results.Year,
        Lançamento: results.Released,
        Duração: results.Runtime,
        Gênero: results.Genre,
        Diretor: results.Director,
        Nota: results.imdbRating

    }  
   
}

function mostra(filme) {

    $('.nome').text(filme.nome)
    $('.foto').attr("src", filme.img)
    $('.ano').text(filme.ano)
    $('.lancamento').text(filme.lancamento)
    $('.genero').text(filme.genero)
    $('.duracao').text(filme.duracao)
    $('.diretor').text(filme.diretor)
    $('.nota').text(filme.nota)
}






