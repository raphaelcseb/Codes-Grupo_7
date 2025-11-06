document.getElementById("botao-pesquisar").addEventListener("click", function() {
    const pesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    if (pesquisa === "") {
        alert("Por favor, digite algo para pesquisar.");
    } else if (pesquisa === "mario kart") {
        window.location.href = "tela_pesquisa_do_usuario.html";
    } else {
        alert("Nenhum resultado encontrado para: " + pesquisa);
    }
});
