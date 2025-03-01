// API Key da TMDb
const apiKey = 'f5560baac04caa71449cf1417399b488';

// Função para carregar as séries populares
function carregarSeries() {
    // Faz a requisição para a API TMDb
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('series-populares');
            // Limpa o conteúdo existente antes de adicionar novas séries
            container.innerHTML = '';

            data.results.forEach(serie => {
                // Cria o container de cada item do carrossel
                const div = document.createElement('div');
                div.classList.add('carrossel-item');
                div.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" 
                         alt="${serie.name}" 
                         title="${serie.name}">
                `;
                // Adiciona o item ao container
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar as séries:", error);
            // Adiciona uma mensagem de erro ao carregar as séries
            const container = document.getElementById('series-populares');
            container.innerHTML = '<p>Erro ao carregar as séries. Tente novamente mais tarde.</p>';
        });
}

// Carregar as séries populares assim que a página for carregada
document.addEventListener("DOMContentLoaded", carregarSeries);
