function TipoTriangulo(L1, L2, L3) {
    if (L1 == L2 && L2 == L3) {
        return "equilátero";
    } else if (L1 == L2 || L1 == L3 || L2 == L3) {
        return "isósceles";
    } else {
        return "escaleno";
    }
}

function verificarTriangulo() {
    const lado1 = parseFloat(document.getElementById("lado1").value);
    const lado2 = parseFloat(document.getElementById("lado2").value);
    const lado3 = parseFloat(document.getElementById("lado3").value);
    
    const resultado = TipoTriangulo(lado1, lado2, lado3);
    
    document.getElementById("resultado").textContent = resultado;
}