function verificarNumero() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    const mensagemErro = document.getElementById('mensagemErro');
    
    mensagemErro.style.display = 'none';
    
    if (numero === '') {
        mensagemErro.textContent = 'Por favor, digite um número!';
        mensagemErro.style.display = 'block';
        return;
    }
    
    const num = parseInt(numero);
    
    if (isNaN(num)) {
        mensagemErro.textContent = 'Por favor, insira um número válido!';
        mensagemErro.style.display = 'block';
        return;
    }
    
    if (num % 2 === 0) {
        resultado.innerHTML = `<p>O número <strong>${num}</strong> é <strong>PAR</strong></p>`;
    } else {
        resultado.innerHTML = `<p>O número <strong>${num}</strong> é <strong>ÍMPAR</strong></p>`;
    }
}

document.getElementById('numero').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarNumero();
    }
});