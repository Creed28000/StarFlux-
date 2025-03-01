// API Key da TMDb
const apiKey = 'f5560baac04caa71449cf1417399b488';

// Função para carregar os animes populares
function carregarAnimes() {
    // Faz a requisição para a API TMDb (filmes do gênero 'Anime' - ID 16)
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('animes-populares');
            // Limpa o conteúdo existente antes de adicionar novos animes
            container.innerHTML = '';

            data.results.forEach(anime => {
                // Cria o container de cada item do carrossel
                const div = document.createElement('div');
                div.classList.add('carrossel-item');
                div.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${anime.poster_path}" 
                         alt="${anime.title || anime.name}" 
                         title="${anime.title || anime.name}">
                `;
                // Adiciona o item ao container
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os animes:", error);
            // Exibe uma mensagem de erro caso haja problemas com a requisição
            const container = document.getElementById('animes-populares');
            container.innerHTML = '<p>Erro ao carregar os animes. Tente novamente mais tarde.</p>';
        });
}

// Carregar os animes populares assim que a página for carregada
document.addEventListener("DOMContentLoaded", carregarAnimes);
