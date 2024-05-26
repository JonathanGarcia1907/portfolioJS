document.getElementById('palindromoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor de la cadena
    const cadena = document.getElementById('cadena').value;
    
    // Validar que la cadena no esté vacía
    if (!cadena) {
        alert('Por favor, ingrese una cadena de caracteres.');
        return;
    }

    // Remover espacios y convertir a minúsculas para la verificación
    const cadenaSinEspacios = cadena.replace(/\s+/g, '').toLowerCase();
    const inversa = cadenaSinEspacios.split('').reverse().join('');
    
    let resultadoTexto;
    if (cadenaSinEspacios === inversa) {
        resultadoTexto = 'La cadena es un palíndromo';
    } else {
        resultadoTexto = `La cadena no es un palíndromo. El palíndromo generado es: ${cadena}${inversa}`;
    }
    
    // Mostrar el resultado
    document.getElementById('resultadoTexto').textContent = resultadoTexto;
});

document.getElementById('volver').addEventListener('click', function() {
    window.location.href = '../index.html';
});
