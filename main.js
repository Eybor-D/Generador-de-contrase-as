// Función para generar una contraseña aleatoria
function generarContrasena(cantidad) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let contrasena = '';
    for (let i = 0; i < cantidad; i++) {
        contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contrasena;
}

// Función para validar el nivel de la contraseña
function validarContrasena(contrasena) {
    const regexMayuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    const regexSimbolo = /[!@#$%^&*()]/;

    if (
        regexMayuscula.test(contrasena) &&
        regexMinuscula.test(contrasena) &&
        regexNumero.test(contrasena) &&
        regexSimbolo.test(contrasena)
    ) {
        return 'Fuerte';
    } else {
        return 'Débil';
    }
}

// Evento para generar la contraseña al hacer clic en el botón
document.getElementById('generar').addEventListener('click', () => {
    const cantidad = document.getElementById('cantidad').value;
    if (cantidad < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    const contrasenaGenerada = generarContrasena(cantidad);
    document.getElementById('contrasena').value = contrasenaGenerada;

    const fortaleza = validarContrasena(contrasenaGenerada);
    alert('La contraseña es: ' + fortaleza);
});

// Evento para limpiar el campo de la contraseña
document.getElementById('limpiar').addEventListener('click', () => {
    document.getElementById('contrasena').value = '';
});
