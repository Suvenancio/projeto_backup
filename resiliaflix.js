$('#btn').click(function(){
   
    buscaFilme(busca)

})


var salvarFilmes = "";

function buscaFilme(busca){


    var busca = $('#busca').val()
    var url = "http://www.omdbapi.com/?apikey=f5e93ab6&s="

    $.ajax({

        'url': url+busca ,
   
    
         'success': function(results)
          {   
           console.log(results.Search[0])
           buscaDados(results)
           mostra()
            try{
                let filmes = results.Search;
                var salvarFilmes = "";
                
    
                $.each(filmes, (index, filme)=>{
                    salvarFilmes +=
                    `    
                    <h5>${filme.Title}<h5>
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
           
         },

         
})
                
}

function buscaDados(results){


    let dados ={
        Nome: results.name,
        Ano: results.Year,
        Lançamento: results.Released,
        Duração: results.Runtime,
        Gênero: results.Genre,
        Diretor: results.Director,
        Nota: results.imdbRating

    }  
   
    return dados
}

function mostra(results){

    $('#Nome').text(results.name)
    $('#Ano').text(results.Year)
    $('#Nome').text(results.Released)
    $('#Nome').text(results.Runtime)
    $('#Nome').text(results.Genre)
    $('#Nome').text(results.Director)
    $('#Nome').text(results.imdbRating)

}






