
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

            const filme = infoFilmes(result)
            mostraNaTela(filme)
        }
    })
}

function infoFilmes(result) {
    return {

        img: result.Poster,
        nome: result.Title,
        ano: result.Year,
        lancamento: result.Released,
        duracao: result.Runtime,
        genero: result.Genre,
        diretor: result.Director,
        nota: result.Metascore
    }
}

function mostraNaTela(filme) {

    $('.nome').text(filme.nome)
    $('.foto').attr("src", filme.img)
    $('.ano').text(filme.ano)
    $('.lancamento').text(filme.lancamento)
    $('.genero').text(filme.genero)
    $('.duracao').text(filme.duracao)
    $('.diretor').text(filme.diretor)
    $('.nota').text(filme.nota)
}











