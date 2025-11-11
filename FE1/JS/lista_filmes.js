document.addEventListener('DOMContentLoaded', function() {

    nome = localStorage.getItem('nome_filme')

    lista = document.querySelector('#lista_usuario')

    item = document.createElement('li')

    item.innerHTML = nome

    item.setAttribute('class', 'nome')

    lista.appendChild(item)


})