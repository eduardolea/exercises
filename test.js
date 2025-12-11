// test.js
const exercises = require('./index.js');

const colors = {
    reset: "\x1b[0m", green: "\x1b[32m", red: "\x1b[31m", yellow: "\x1b[33m", blue: "\x1b[34m", cyan: "\x1b[36m"
};

console.log(colors.cyan + "\n🚀 RUNNING TESTS V2.0 (Nivel Avanzado)..." + colors.reset);
console.log("===========================================\n");

let passed = 0;
let total = 0;

function runTest(nombreTest, funcion, inputs, esperado) {
    total++;
    try {
        const resultado = funcion(...inputs);

        // TRUCO: Convertimos a string para comparar arrays y objetos fácilmente
        const esCorrecto = JSON.stringify(resultado) === JSON.stringify(esperado);

        if (esCorrecto) {
            console.log(`${colors.green}✔ [OK] ${nombreTest}${colors.reset}`);
            passed++;
        } else {
            console.log(`${colors.red}✘ [FAIL] ${nombreTest}${colors.reset}`);
            console.log(`   🔸 Entrada:  ${JSON.stringify(inputs)}`);
            console.log(`   🔸 Esperaba: ${colors.green}${JSON.stringify(esperado)}${colors.reset}`);
            console.log(`   🔸 Recibí:   ${colors.red}${JSON.stringify(resultado)}${colors.reset}`);
            console.log("-------------------------------------------");
        }
    } catch (error) {
        console.log(`${colors.red}✘ [CRASH] ${nombreTest} explotó.${colors.reset}`);
        console.log(`   Error: ${error.message}`);
    }
}

// --- NIVEL 1 ---
console.log(colors.yellow + "--- Nivel 1: Básicos ---" + colors.reset);
runTest("Suma (2+3)", exercises.sumar, [2, 3], 5);
runTest("Es Par (4)", exercises.esPar, [4], true);
runTest("Saludo", exercises.saludar, ["Ana"], "Hola, Ana!");

// --- NIVEL 2 ---
console.log("\n" + colors.yellow + "--- Nivel 2: Arrays y Lógica ---" + colors.reset);

// Pruebas para Obtener Mayor
runTest("Mayor de [1, 5, 3]", exercises.obtenerMayor, [[1, 5, 3]], 5);
runTest("Mayor de negativos [-10, -5]", exercises.obtenerMayor, [[-10, -5]], -5);

// Pruebas para Contar Vocales
runTest("Vocales en 'hola'", exercises.contarVocales, ["hola"], 2);
runTest("Vocales en 'murcielago'", exercises.contarVocales, ["murcielago"], 5);
runTest("Sin vocales 'xyz'", exercises.contarVocales, ["xyz"], 0);

// Pruebas para Invertir Texto
runTest("Invertir 'casa'", exercises.invertirTexto, ["casa"], "asac");
runTest("Invertir 'JavaScript'", exercises.invertirTexto, ["JavaScript"], "tpircSavaJ");


// --- NIVEL 3 ---
console.log("\n" + colors.yellow + "--- Nivel 3: Algoritmos ---" + colors.reset);

// Pruebas para Filtrar Pares
runTest("Filtrar Pares [1,2,3,4]", exercises.filtrarPares, [[1, 2, 3, 4]], [2, 4]);
runTest("Filtrar Pares [1,3,5]", exercises.filtrarPares, [[1, 3, 5]], []);

// Pruebas para Es Palíndromo
runTest("Palíndromo 'radar'", exercises.esPalindromo, ["radar"], true);
runTest("No Palíndromo 'casa'", exercises.esPalindromo, ["casa"], false);
// runTest("Palíndromo con mayúsculas 'Ana'", exercises.esPalindromo, ["Ana"], true); // Opcional si el usuario limpia el string

// Pruebas para FizzBuzz
runTest("FizzBuzz (3)", exercises.fizzBuzz, [3], "Fizz");
runTest("FizzBuzz (5)", exercises.fizzBuzz, [5], "Buzz");
runTest("FizzBuzz (15)", exercises.fizzBuzz, [15], "FizzBuzz");
runTest("FizzBuzz (2)", exercises.fizzBuzz, [2], "2");

// Pruebas para Eliminar Duplicados
runTest("Unicos [1,2,2,3]", exercises.eliminarDuplicados, [[1, 2, 2, 3]], [1, 2, 3]);
runTest("Unicos ['a','a','b']", exercises.eliminarDuplicados, [['a', 'a', 'b']], ['a', 'b']);

// Pruebas para Capitalizar Título
runTest("Capitalizar 'hola mundo'", exercises.capitalizarTitulo, ["hola mundo"], "Hola Mundo");
runTest("Capitalizar 'javascript es genial'", exercises.capitalizarTitulo, ["javascript es genial"], "Javascript Es Genial");


// --- RESUMEN ---
console.log("\n===========================================");
if (passed === total) {
    console.log(`${colors.green}🏆 ¡MAESTRO DEL JAVASCRIPT! Completaste todo (${passed}/${total})${colors.reset}`);
} else {
    console.log(`${colors.yellow}⚠ Aún falta. Tienes ${passed} de ${total} correctos.${colors.reset}`);
}