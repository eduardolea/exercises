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

// --- NIVEL 3 (Algoritmos) ---

// EJERCICIO 7: Filtrar números pares
// Tu tarea: Recibir un array de números y retornar un nuevo array solo con los pares.
// Ej: [1, 2, 3, 4] -> [2, 4]
function filtrarPares(numeros) {
    // Escribe tu código aquí
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

// EJERCICIO 8: Es Palíndromo
// Tu tarea: Determinar si un string se lee igual al revés (true/false).
// Ej: "radar" -> true, "hola" -> false
// Pista: Puedes reutilizar tu función invertirTexto (exercises.invertirTexto no funcionará aquí dentro si no usas 'this' o copias la lógica, mejor copia la lógica o úsalo directo si entiendes cómo funcionan las referencias)
// Simplificación: Asume que todo está en minúsculas y sin espacios si quieres, o límpialo.
function esPalindromo(texto) {
    // Escribe tu código aquí
    let txt = invertirTexto(texto);
    return txt === texto;
}

// EJERCICIO 9: FizzBuzz
// Tu tarea: Recibir un número. 
// Si es múltiplo de 3 retornar "Fizz".
// Si es múltiplo de 5 retornar "Buzz".
// Si es múltiplo de 3 y 5 retornar "FizzBuzz".
// En otro caso, retornar el número como string.
function fizzBuzz(numero) {
    // Escribe tu código aquí
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero.toString();
    }
}

// EJERCICIO 10: Eliminar Duplicados
// Tu tarea: Recibir un array y retornar uno nuevo sin elementos repetidos.
// Ej: [1, 2, 2, 3] -> [1, 2, 3]
function eliminarDuplicados(array) {
    // Escribe tu código aquí
    let arrayClean = [];

    for (let i = 0; i < array.length; i++) {
        if (!arrayClean.includes(array[i])) {
            arrayClean.push(array[i]);
        }
    }
    return arrayClean;
}

// EJERCICIO 11: Capitalizar Título
// Tu tarea: Recibir una frase y poner la primera letra de CADA palabra en mayúscula.
// Ej: "hola mundo" -> "Hola Mundo"
function capitalizarTitulo(texto) {
    // Escribe tu código aquí
    let txt = texto.split(" ");
    for (let i = 0; i < txt.length; i++) {
        txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1);
    }
    return txt.join(" ");
}

// Exportamos todo
module.exports = {
    sumar,
    esPar,
    saludar,
    // Agrega estas tres líneas (¡y cuidado con las comas!):
    obtenerMayor,
    contarVocales,
    invertirTexto,
    // Nivel 3
    filtrarPares,
    esPalindromo,
    fizzBuzz,
    eliminarDuplicados,
    capitalizarTitulo
};