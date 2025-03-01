document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value;
    if (query) {
        window.location.href = `search.html?q=${query}`;
    } else {
        alert("Por favor, digite algo para pesquisar.");
    }
});
