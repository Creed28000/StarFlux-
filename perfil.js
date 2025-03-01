document.addEventListener("DOMContentLoaded", () => {
    // Verifica se o usuário está logado
    const userLoggedIn = localStorage.getItem('userLoggedIn');

    // Se o usuário não estiver logado, redireciona para a página de login
    if (!userLoggedIn) {
        window.location.href = "login.html"; // Redireciona para o login
        return; // Evita que o restante do código seja executado
    }

    // Exibe uma mensagem de boas-vindas para o usuário
    document.getElementById('welcome-message').innerText = `Bem-vindo, ${userLoggedIn}!`;

    // Aqui você pode adicionar mais detalhes sobre o perfil, como nome, email, etc.
    // Exemplo:
    // document.getElementById('user-name').innerText = userLoggedIn;
});
