document.addEventListener('DOMContentLoaded', function() {

    nome_cat = document.querySelector('#campo-cat')

    filmes = document.querySelectorAll('.filmes > li')

    filme_lista = document.querySelector('.filmes')

    lista_maior = document.querySelector('.lista')

    estado = document.createElement('p')
    
    estado.innerHTML = 'Carregando recomendações...'

    lista_maior.appendChild(estado)

    estado.style.marginBottom = '3rem'

    estado.style.marginLeft = '1rem'


    for (filme of filmes) {
            filme.style.display = 'none'
            }

    nome_cat.addEventListener("input", (event) => {
    
        if (event.target.value == 'Viagem no tempo') {
            
            estado.style.display = 'none'

            for (filme of filmes) {
            filme.style.display = 'flex'
            }
        }
    
    });




})