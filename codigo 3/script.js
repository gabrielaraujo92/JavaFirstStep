function PodeDirigir(idade) {
    if (idade >= 18) {
        return "pode ser habilitado";
    } else {
        return "ainda não pode";
    }
}

function verificar() {
    const idadeInput = document.getElementById("idade").value;
    const idade = parseInt(idadeInput);
    const resultado = PodeDirigir(idade);
    document.getElementById("resultado").textContent = resultado;
}