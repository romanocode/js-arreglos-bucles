// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    let pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        }
    }
    return pares;
}

// Reto 4: Contar Vocales
function contarVocales(texto) {
    let contador = 0;
    let vocales = "aeiouAEIOU";
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    let invertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        invertido.push(arreglo[i]);
    }
    return invertido;
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return notas.length > 0 ? suma / notas.length : 0;
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }
    return contador;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    let unicos = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (!unicos.includes(arreglo[i])) {
            unicos.push(arreglo[i]);
        }
    }
    return unicos;
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return texto.toLowerCase() === invertido.toLowerCase();
}
