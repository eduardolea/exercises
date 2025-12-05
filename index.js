// index.js

// --- NIVEL 1 (Repaso) ---

function sumar(a, b) {
    // Tu código del nivel anterior
    return a + b;
}

function esPar(numero) {
    // Tu código del nivel anterior
    return numero % 2 === 0;
}

function saludar(nombre) {
    // Tu código del nivel anterior
    return "Hola, " + nombre + "!";
}

// --- NIVEL 2 (Nuevos Retos) ---

// EJERCICIO 4: Obtener el número mayor
// Tu tarea: Recibir un array de números (ej: [1, 5, 2]) y retornar el mayor (5)
// Pista: Puedes usar un bucle for o Math.max con spread operator
function obtenerMayor(numeros) {
    // Escribe tu código aquí
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (mayor < numeros[i]) {
            mayor = numeros[i];
        }
    }
    return mayor;
}

// EJERCICIO 5: Contar vocales
// Tu tarea: Recibir un string y retornar cuántas vocales (a,e,i,o,u) tiene.
// Ej: "hola" -> 2
function contarVocales(texto) {
    // Escribe tu código aquí
    let cont = 0;
    let vocales = "aeiou";

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto.toLowerCase()[i])) {
            cont++
        }
    }
    return cont;
}

// EJERCICIO 6: Invertir texto
// Tu tarea: Recibir un string y retornarlo al revés.
// Ej: "gato" -> "otag"
function invertirTexto(texto) {
    // Escribe tu código aquí
    return texto.split("").reverse().join('');
}

// Exportamos todo
module.exports = {
    sumar,
    esPar,
    saludar,
    // Agrega estas tres líneas (¡y cuidado con las comas!):
    obtenerMayor,
    contarVocales,
    invertirTexto
};