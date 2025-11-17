function encontraMaiorEntreTres(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

function verificarMaior() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const numero3 = parseFloat(document.getElementById("numero3").value);
    
    const maior = encontraMaiorEntreTres(numero1, numero2, numero3);
    
    document.getElementById("resultado").textContent = "O maior número é: " + maior;
}