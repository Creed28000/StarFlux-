// API Key da TMDb
const apiKey = 'f5560baac04caa71449cf1417399b488';

// Função para carregar os programas de TV populares
function carregarTv() {
    // Faz a requisição para a API TMDb (programas de TV populares)
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('tv-populares');
            // Limpa o conteúdo existente antes de adicionar novos programas de TV
            container.innerHTML = '';

            data.results.forEach(tv => {
                // Cria o container de cada item do carrossel
                const div = document.createElement('div');
                div.classList.add('carrossel-item');
                div.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${tv.poster_path}" 
                         alt="${tv.name}" 
                         title="${tv.name}">
                `;
                // Adiciona o item ao container
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os programas de TV:", error);
            // Exibe uma mensagem de erro caso haja problemas com a requisição
            const container = document.getElementById('tv-populares');
            container.innerHTML = '<p>Erro ao carregar os programas de TV. Tente novamente mais tarde.</p>';
        });
}

// Carregar os programas de TV populares assim que a página for carregada
document.addEventListener("DOMContentLoaded", carregarTv);
