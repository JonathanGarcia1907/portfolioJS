document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor del DNI
    const dni = document.getElementById('dni').value;
    
    // Validar que el DNI tenga 7 u 8 dígitos
    const dniRegex = /^\d{7,8}$/;
    if (!dniRegex.test(dni)) {
        alert('Por favor, ingrese un número de DNI válido (7 u 8 dígitos).');
        return;
    }
    
    // Calcular la letra del DNI
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const indice = parseInt(dni) % 23;
    const letraDni = letras.charAt(indice);
    
    // Mostrar el resultado
    document.getElementById('letraDni').textContent = `La letra correspondiente a tu DNI es: ${letraDni}`;
});

document.getElementById('volver').addEventListener('click', function() {
    window.location.href = '../index.html';
});
