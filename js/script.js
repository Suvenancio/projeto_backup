$('#todosfilmes').ready(function () {
    requisicao()
})

$('.filmes').click(function () {

    $('#myModal').modal('show')

    const indice = $(this).data('indice')

    let arrid = ['tt1201607', 'tt0371746', 'tt3896198', 'tt0167260', 'tt2527338', 'tt2306299', 'tt0293429', 'tt0381707', 'tt1790864',
        'tt6320628', 'tt1392170', 'tt2283336']

    criarObjeto(arrid[indice])
})

function requisicao() {

    let arrid = ['tt1201607', 'tt0371746', 'tt3896198', 'tt0167260', 'tt2527338', 'tt2306299', 'tt0293429', 'tt0381707', 'tt1790864',
        'tt6320628', 'tt1392170', 'tt2283336']

    for (let i = 0; i < arrid.length; i++) {

        let id = arrid[i]


        $.ajax({
            'url': `http://www.omdbapi.com/?i=${id}&apikey=7ebfd47e`,

            'success': function (result) {

                $(`#filmes${i}`).html(`<img id= "imagem${i}" class = "imagem" src = ${result.Poster}>`)
            }
        })
    }
}

function criarObjeto(id) {

    $.ajax({
        'url': `http://www.omdbapi.com/?i=${id}&apikey=7ebfd47e`,
        'success': function (result) {

            const filme = new Filme(result)
            filme.mostrar();
        }
    })
}

class Filme {

    constructor(result) {

        this.img = result.Poster;
        this.nome = result.Title;
        this.ano = result.Year;
        this.lancamento = result.Released;
        this.duracao = result.Runtime;
        this.genero = result.Genre;
        this.diretor = result.Director;
        this.nota = result.Metascore;
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