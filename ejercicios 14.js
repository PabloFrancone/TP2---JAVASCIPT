// act14
function obtenerDivisores(minimo, maximo, divisor) {
    const divisores = [];
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

// Ejemplo de uso:
const minimo = 1;
const maximo = 34;
const divisor = 2;
const listaDivisores = obtenerDivisores(minimo, maximo, divisor);
console.log("Divisores:", listaDivisores);