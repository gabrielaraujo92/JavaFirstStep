function CalcularMediaSimples(N1, N2) {
    const media = (N1 + N2) / 2;
    
    if (media >= 7) {
        return "aprovado";
    } else {
        return "reprovado";
    }
}

function verificarMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    
    const resultado = CalcularMediaSimples(nota1, nota2);
    
    document.getElementById("resultado").textContent = resultado;
}