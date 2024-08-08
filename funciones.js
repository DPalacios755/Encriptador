const textarea = document.getElementById('myTextarea');

textarea.addEventListener('input', () => {
    textarea.style.height = '300px';
    
});
function encriptar() {
    let texto = textarea.value;
    let textoEncriptado = '';

    // Lógica de encriptación (ej: cifrado César)
    for (let i = 0; i < texto.length; i++) {
        const char = texto.charAt(i);
        if (/[a-zA-Z]/.test(char)) {
            const codigo = char.charCodeAt(0);
            if (char.toLowerCase() === char) {
                textoEncriptado += String.fromCharCode((codigo - 97 + 3) % 26 + 97);
            } else {
                textoEncriptado += String.fromCharCode((codigo - 65 + 3) % 26 + 65);
            }
        } else {
            textoEncriptado += char;
        }
    }

    // Actualizar el textarea con el texto encriptado
    textarea.value = textoEncriptado;
}
function desencriptar() {
    let textoEncriptado = textarea.value;
    let textoClaro = '';

    // Lógica de desencriptación (cifrado César inverso)
    for (let i = 0; i < textoEncriptado.length; i++) {
        const char = textoEncriptado.charAt(i);
        if (/[a-zA-Z]/.test(char)) {
            const codigo = char.charCodeAt(0);
            if (char.toLowerCase() === char) {
                textoClaro += String.fromCharCode((codigo - 97 - 3 + 26) % 26 + 97);
            } else {
                textoClaro += String.fromCharCode((codigo - 65 - 3 + 26) % 26 + 65);
            }
        } else {
            textoClaro += char;
        }
    }

    // Actualizar el textarea con el texto desencriptado
    textarea.value = textoClaro;
}




