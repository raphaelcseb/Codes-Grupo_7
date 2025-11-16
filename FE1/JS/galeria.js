document.addEventListener('DOMContentLoaded', function() {

    filmes = document.querySelectorAll('.imagem')

    for (filme of filmes) {

        filme.addEventListener('click', function(event) {

            t = event.currentTarget

            img = t.querySelector('img')
            src = img.getAttribute('src')

            localStorage.setItem('fonte', src)
        })

    }

})

