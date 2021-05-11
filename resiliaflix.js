$('#btn').click(function(){
   
    buscaFilme(busca)

})



function buscaFilme(){


    let busca = $('#busca').val()
    let url = "http://www.omdbapi.com/?apikey=f5e93ab6&s="


        
        $.ajax({

            'url': url+busca ,
    
        
            'success': function(results)
            {   
                
                let filmes = results.Search;
                
                for(let i = 0; i< filmes.length;i++){
                    
                    $(`#filmes${i}`).html(`<img src = ${filmes[i].Poster}>`)
                         id.push(filmes[i].imdbID)
                       
                }
                
               
            }      
        })    
}
let id = [];



$('.filmes').click(function () {

          
        $('#myModal').modal('show')
           
        let arr = id;
        for(let i=0; i<arr.length;i++){

            var abc = arr[i]
            
        } 

        criarObjeto(abc)

})



function criarObjeto(abc){

    console.log(abc)
    $.ajax({

        'url': `http://www.omdbapi.com/?i=${abc}&apikey=7ebfd47e `,


        'success': function(results)
        {   
            const filmes = new Filme(results)
            filmes.mostrar()
        }
     
    })
}



class Filme {

    constructor(results) {

        this.img = results.Poster;
        this.nome = results.Title;
        this.ano = results.Year;
        this.lancamento = results.Released;
        this.duracao = results.Runtime;
        this.genero = results.Genre;
        this.diretor = results.Director;
        this.nota = results.Metascore;
    }

    mostrar(){

        $('.foto').attr("src", this.img)
        $('.nome').text(this.nome)
        $('.ano').text(this.ano)
        $('.lancamento').text(this.lancamento)
        $('.genero').text(this.genero) 
        $('.duracao').text(this.duracao)
        $('.diretor').text(this.diretor)
        $('.nota').text(this.nota)   
    }
}





