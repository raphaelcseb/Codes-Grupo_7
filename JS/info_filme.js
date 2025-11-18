document.addEventListener('DOMContentLoaded', function() {
    
    save = document.querySelector('.h3')
    
    save.addEventListener('click', function(event) {

        text = document.querySelector('#campo-cat')

        nome_filme = text.value

        localStorage.setItem('nome_filme', nome_filme)

    })

})