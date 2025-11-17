function GerarNomeCompleto(objeto) {
    return objeto.primeiroNome + " " + objeto.sobrenome;
}

function gerarNome() {
    const primeiroNome = document.getElementById("primeiroNome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    
    const pessoa = {
        primeiroNome: primeiroNome,
        sobrenome: sobrenome
    };
    
    const resultado = GerarNomeCompleto(pessoa);
    
    document.getElementById("resultado").textContent = resultado;
}