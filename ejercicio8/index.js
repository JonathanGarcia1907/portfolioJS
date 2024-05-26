document.getElementById('mcdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los números
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    
    // Validar que los números sean enteros positivos
    if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
        alert('Por favor, ingrese números enteros positivos.');
        return;
    }
    
    // Calcular el MCD por el método de Euclides
    let a = Math.abs(numero1);
    let b = Math.abs(numero2);
    while (b) {
        const resto = a % b;
        a = b;
        b = resto;
    }
    const mcd = a;
    
    // Mostrar el resultado
    document.getElementById('mcdTexto').textContent = `El Máximo Común Divisor (MCD) de ${numero1} y ${numero2} es: ${mcd}`;
});

document.getElementById('volver').addEventListener('click', function() {
    window.location.href = '../index.html';
});
