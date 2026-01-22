// Ejercicio 10: Inversión de una Cadena
// Declara una función llamada "invertirCadena" que acepte un parámetro "cadena" y retorne la cadena invertida

// Ejemplos:
// invertirCadena("Hola Mundo") // debe retornar "odnuM aloH"
// invertirCadena("anita lava la tina") // debe retornar "anit al aval atina"

function invertirCadena(cadena) {
    // Escribe tu código aquí
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};
// Ejercicio 10: Inversión de una Cadena
// Declara una función llamada "invertirCadena" que acepte un parámetro "cadena" y retorne la cadena invertida

// Ejemplos:
// invertirCadena("Hola Mundo") // debe retornar "odnuM aloH"
// invertirCadena("anita lava la tina") // debe retornar "anit al aval atina"

function invertirCadena(cadena) {
    // Escribe tu código aquí
    // 1. split("") convierte la cadena en un array de caracteres.
    // 2. reverse() invierte el orden de los elementos en ese array.
    // 3. join("") une los elementos del array de nuevo en una sola cadena.
    return cadena.split("").reverse().join("");
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};
