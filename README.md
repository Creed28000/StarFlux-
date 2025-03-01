# StarFlux - Clone da Netflix

StarFlux é uma plataforma de streaming de filmes, séries, animes e programas de TV ao vivo, inspirada na interface e funcionalidade da Netflix. Este projeto foi desenvolvido utilizando HTML, CSS, JavaScript e integração com a API do TMDb para fornecer conteúdo dinâmico.

## Funcionalidades

- **Tela Inicial**: Apresenta carrosséis de filmes, séries, animes e TV ao vivo.
- **Pesquisa**: Funcionalidade de pesquisa de filmes, séries, animes e programas de TV.
- **Minha Lista**: Permite que os usuários adicionem filmes, séries e animes à sua lista pessoal.
- **Navegação Simples**: Navegação por categorias como Filmes, Séries, Animes e TV ao vivo.
- **Perfil de Usuário**: Permite que os usuários visualizem e gerenciem seu perfil.
- **Responsividade**: O site é totalmente responsivo, oferecendo uma experiência de usuário otimizada em dispositivos móveis e desktops.
- **Integração com a API TMDb**: O conteúdo é dinâmico, com filmes, séries, animes e programas de TV carregados a partir da API TMDb.

## Estrutura de Arquivos
/starflux ├── /css │   ├── style.css        
 # Arquivo de estilos principais ├── /js │   ├── filmes.js        
 # Script para carregar filmes │   ├── series.js         
 # Script para carregar séries │   ├── animes.js         
 # Script para carregar animes │   ├── tv.js             
 # Script para carregar TV ao vivo │   └── perfil.js         
 # Script para gerenciar o perfil do usuário ├── /images │   ├── logo.png          
 # Logo do StarFlux ├── index.html            
 # Página inicial ├── filmes.html           
 # Página de filmes ├── series.html           
 # Página de séries ├── animes.html           
 # Página de animes ├── tv.html               
 # Página de TV ao vivo ├── lista.html            
 # Página da lista do usuário ├── perfil.html           
 # Página do perfil do usuário └── about.html            
 # Página sobre o StarFlux
 
 ## Tecnologias Usadas

- **HTML**: Estruturação do conteúdo da página.
- **CSS**: Estilização responsiva e layout semelhante ao Netflix.
- **JavaScript**: Funcionalidades dinâmicas, como carrosséis e integração com a API do TMDb.
- **API TMDb**: Para buscar filmes, séries, animes e programas de TV populares.
- **Font Awesome**: Ícones usados para a navegação e outros elementos visuais.

## Como Rodar o Projeto

### Requisitos

- Navegador web moderno (Chrome, Firefox, etc.)
- Conexão com a internet para acessar a API do TMDb.

### Instruções

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/starflux.git
    ```

2. Navegue até a pasta do projeto:

    ```bash
    cd starflux
    ```

3. Abra o arquivo `index.html` no seu navegador:

    ```bash
    open index.html
    ```

## Detalhes da API TMDb

Este projeto utiliza a API do [TMDb](https://www.themoviedb.org/) para obter dados sobre filmes, séries, animes e programas de TV. É necessário obter uma chave de API gratuita para fazer requisições.

1. Vá até [TMDb](https://www.themoviedb.org/) e crie uma conta.
2. Gere uma chave de API na seção de configurações.
3. Substitua a chave da API no código JavaScript em `filmes.js`, `series.js`, `animes.js` e `tv.js`.

```javascript
const apiKey = 'f5560baac04caa71449cf1417399b488';

# Imagens do Projeto

## Estrutura de Imagens

As imagens do projeto estão organizadas em diretórios específicos para cada tipo de conteúdo. Abaixo está a estrutura de pastas e o tipo de imagem armazenada em cada uma:

### Filmes
- **/images/filmes**
  - `filme1.jpg`: Imagem do filme 1
  - `filme2.jpg`: Imagem do filme 2
  - `filme3.jpg`: Imagem do filme 3

### Séries
- **/images/series**
  - `serie1.jpg`: Imagem da série 1
  - `serie2.jpg`: Imagem da série 2

### Animes
- **/images/animes**
  - `anime1.jpg`: Imagem do anime 1
  - `anime2.jpg`: Imagem do anime 2

### TV
- **/images/tv**
  - `tv1.jpg`: Imagem do programa de TV 1
  - `tv2.jpg`: Imagem do programa de TV 2

## Como usar as imagens

As imagens podem ser acessadas no código HTML, como no exemplo abaixo:

```html
<section id="filmes">
  <h2>Filmes Populares</h2>
  <div class="carrossel-container">
    <div class="carrossel-item">
      <img src="images/filmes/filme1.jpg" alt="Filme 1">
    </div>
    <div class="carrossel-item">
      <img src="images/filmes/filme2.jpg" alt="Filme 2">
    </div>
    <div class="carrossel-item">
      <img src="images/filmes/filme3.jpg" alt="Filme 3">
    </div>
  </div>
</section>
