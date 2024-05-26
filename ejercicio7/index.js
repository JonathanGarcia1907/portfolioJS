document.getElementById('euclidesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los números
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    
    // Validar que los números sean enteros positivos
    if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
        alert('Por favor, ingrese números enteros positivos.');
        return;
    }
    
    // Calcular la división entera por el algoritmo de Euclides
    let a = Math.abs(numero1);
    let b = Math.abs(numero2);
    let resto;
    while (b) {
        resto = a % b;
        a = b;
        b = resto;
    }
    const cociente = Math.floor(numero1 / a);
    
    // Mostrar el resultado
    document.getElementById('cociente').textContent = `Cociente: ${cociente}`;
    document.getElementById('resto').textContent = `Resto: ${resto}`;
});

document.getElementById('volver').addEventListener('click', function() {
    window.location.href = '../index.html';
});
