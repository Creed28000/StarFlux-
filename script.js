document.addEventListener("DOMContentLoaded", () => {
    fetch("filmes.json")
        .then(response => response.json())
        .then(filmes => {
            let lista = document.getElementById("lista-filmes");
            filmes.forEach(filme => {
                let div = document.createElement("div");
                div.className = "filme";
                div.innerHTML = `<img src="${filme.imagem}" alt="${filme.titulo}"><p>${filme.titulo}</p>`;
                lista.appendChild(div);
            });
        });
});
