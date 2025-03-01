// API Key da TMDb
const apiKey = 'f5560baac04caa71449cf1417399b488';

// Função para carregar os filmes populares
function carregarFilmes() {
    // Faz a requisição para a API TMDb
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('filmes-populares');
            // Limpa o conteúdo existente antes de adicionar novos filmes
            container.innerHTML = '';

            data.results.forEach(filme => {
                // Cria o container de cada item do carrossel
                const div = document.createElement('div');
                div.classList.add('carrossel-item');
                div.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" 
                         alt="${filme.title}" 
                         title="${filme.title}">
                `;
                // Adiciona o item ao container
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os filmes:", error);
            // Adiciona uma mensagem de erro ao carregar os filmes
            const container = document.getElementById('filmes-populares');
            container.innerHTML = '<p>Erro ao carregar os filmes. Tente novamente mais tarde.</p>';
        });
}

// Carregar os filmes populares assim que a página for carregada
document.addEventListener("DOMContentLoaded", carregarFilmes);
