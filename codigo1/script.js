function calcularIdade() {
    const anoNascimento = document.getElementById('anoNascimento').value;
    const resultado = document.getElementById('resultado');
    const mensagemErro = document.getElementById('mensagemErro');
    
    mensagemErro.style.display = 'none';
    
    if (anoNascimento === '') {
        mensagemErro.textContent = 'Por favor, preencha o ano de nascimento!';
        mensagemErro.style.display = 'block';
        return;
    }
    
    const ano = parseInt(anoNascimento);
    
    if (ano < 1900 || ano > 2025) {
        mensagemErro.textContent = 'Insira um ano entre 1900 e 2025!';
        mensagemErro.style.display = 'block';
        return;
    }
    
    const anoAtual = new Date().getFullYear();
    
    if (ano > anoAtual) {
        mensagemErro.textContent = 'O ano de nascimento não pode ser no futuro!';
        mensagemErro.style.display = 'block';
        return;
    }
    
    const idade = anoAtual - ano;
    
    resultado.innerHTML = `<p>Você tem <strong>${idade} anos</strong></p>`;
}

document.getElementById('anoNascimento').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularIdade();
    }
});