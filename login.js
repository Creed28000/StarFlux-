function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Simulação de autenticação bem-sucedida
    if (email === "usuario@example.com" && password === "senha123") {
        localStorage.setItem('userLoggedIn', 'true'); // Armazena o estado de login
        alert('Login realizado com sucesso!');
        window.location.href = "perfil.html"; // Redireciona para a página de perfil
    } else {
        alert("Credenciais inválidas.");
    }
}

// Evento de envio do formulário
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    login();
});
