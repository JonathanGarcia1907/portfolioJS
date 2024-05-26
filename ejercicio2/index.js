document.getElementById('circunferenciaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor del radio
    const radio = parseFloat(document.getElementById('radio').value);
    
    // Validar que el radio sea un número positivo
    if (isNaN(radio) || radio <= 0) {
        alert('Por favor, ingrese un radio válido y positivo.');
        return;
    }
    
    // Calcular los resultados
    const longitud = 2 * Math.PI * radio;
    const area = Math.PI * Math.pow(radio, 2);
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    
    // Mostrar los resultados
    document.getElementById('longitud').textContent = `Longitud de la circunferencia: ${longitud.toFixed(2)}`;
    document.getElementById('area').textContent = `Área del círculo: ${area.toFixed(2)}`;
    document.getElementById('volumen').textContent = `Volumen de la esfera: ${volumen.toFixed(2)}`;
});

document.getElementById('volver').addEventListener('click', function() {
    window.location.href = '../index.html';
});
