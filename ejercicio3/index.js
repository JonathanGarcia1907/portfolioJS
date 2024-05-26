document.getElementById('trianguloForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los lados
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    
    // Validar que los lados sean números positivos
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Por favor, ingrese lados válidos y positivos.');
        return;
    }
    
    // Determinar el tipo de triángulo
    let tipoTriangulo;
    if (lado1 === lado2 && lado2 === lado3) {
        tipoTriangulo = 'Triángulo equilátero';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        tipoTriangulo = 'Triángulo isósceles';
    } else {
        tipoTriangulo = 'Triángulo escaleno';
    }
    
    // Mostrar el resultado
    document.getElementById('tipoTriangulo').textContent = `El triángulo es: ${tipoTriangulo}`;
});

document.getElementById('volver').addEventListener('click', function() {
    window.location.href = '../index.html';
});
