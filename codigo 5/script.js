function ClassificarMoeda(valor) {
    if (valor === 0.01) {
        return "um centavo";
    } else if (valor === 0.05) {
        return "cinco centavos";
    } else if (valor === 0.10) {
        return "dez centavos";
    } else if (valor === 0.25) {
        return "vinte e cinco centavos";
    } else if (valor === 0.50) {
        return "cinquenta centavos";
    } else if (valor === 1.00) {
        return "um real";
    } else {
        return "valor desconhecido";
    }
}

function verificarMoeda() {
    const valorInput = document.getElementById("valor").value;
    const valor = parseFloat(valorInput);
    const resultado = ClassificarMoeda(valor);
    document.getElementById("resultado").textContent = resultado;
}