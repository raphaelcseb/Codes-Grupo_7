document.addEventListener('DOMContentLoaded', function() {

    nome_cat = document.querySelector('#campo-cat')

    filmes = document.querySelectorAll('.filmes > li')

    for (filme of filmes) {
            filme.style.display = 'none'
            }

    nome_cat.addEventListener("input", (event) => {
    
        if (event.target.value == 'Viagem no tempo') {
            
            for (filme of filmes) {
            filme.style.display = 'flex'
            }
        }
    
    });




})