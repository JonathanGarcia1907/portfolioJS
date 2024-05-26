// Array constante con los nombres de los meses
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Función para mostrar el nombre del mes seleccionado
document.getElementById('mesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor del mes seleccionado
    const mesSelect = document.getElementById('mesSelect').value;
    
    // Obtener el nombre del mes correspondiente
    const nombreMes = meses[parseInt(mesSelect) - 1];
    
    // Mostrar el nombre del mes en pantalla
    document.getElementById('nombreMes').textContent = `El mes seleccionado es: ${nombreMes}`;
});

// Botón Volver
document.getElementById('volver').addEventListener('click', function() {
    window.location.href = '../index.html';
});
