function adicionarNaLista(filmeId) {
    let minhaLista = JSON.parse(localStorage.getItem('minhaLista')) || [];
    
    if (!minhaLista.includes(filmeId)) {
        minhaLista.push(filmeId);
        localStorage.setItem('minhaLista', JSON.stringify(minhaLista));
    } else {
        alert("Este item já está na sua lista!");
    }
}
