document.getElementById('cadenaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor de la cadena
    const cadena = document.getElementById('cadena').value;
    
    // Validar que la cadena no esté vacía
    if (!cadena) {
        alert('Por favor, ingrese una cadena de caracteres.');
        return;
    }

    // Validar que la cadena no contenga números
    const numeroRegex = /\d/;
    if (numeroRegex.test(cadena)) {
        alert('Por favor, ingrese una cadena que no contenga números.');
        return;
    }
    
    // Determinar el tipo de cadena
    let tipoCadena;
    if (cadena === cadena.toUpperCase()) {
        tipoCadena = 'La cadena está en mayúsculas';
    } else if (cadena === cadena.toLowerCase()) {
        tipoCadena = 'La cadena está en minúsculas';
    } else {
        tipoCadena = 'La cadena no está ni en mayúsculas ni en minúsculas';
    }
    
    // Mostrar el resultado
    document.getElementById('tipoCadena').textContent = tipoCadena;
});

document.getElementById('volver').addEventListener('click', function() {
    window.location.href = '../index.html';
});
