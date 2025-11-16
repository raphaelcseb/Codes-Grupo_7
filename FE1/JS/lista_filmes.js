document.addEventListener('DOMContentLoaded', function() {

    nome = localStorage.getItem('nome_filme')

    lista = document.querySelector('#lista_usuario')

    item = document.createElement('li')

    item.innerHTML = nome

    item.setAttribute('class', 'nome')

    foto = document.createElement('img')

    src = localStorage.getItem('fonte')

    foto.setAttribute('src', src)

    item.appendChild(foto)

    foto.style.marginBottom = '1rem'

    item.style.display = 'flex'

    item.style.flexDirection = 'column-reverse'

    item.style.justifyContent = 'space-between'

    item.style.alignItems = 'center'

    lista.appendChild(item)


})