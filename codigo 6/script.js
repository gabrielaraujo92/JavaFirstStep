function NomeDoDia(numero) {
    switch (numero) {
        case 1:
            return "domingo";
        case 2:
            return "segunda";
        case 3:
            return "terça";
        case 4:
            return "quarta";
        case 5:
            return "quinta";
        case 6:
            return "sexta";
        case 7:
            return "sábado";
        default:
            return "Número inválido";
    }
}

function verificarDia() {
    const numeroInput = document.getElementById("numero").value;
    const numero = parseInt(numeroInput);
    const resultado = NomeDoDia(numero);
    document.getElementById("resultado").textContent = resultado;
}