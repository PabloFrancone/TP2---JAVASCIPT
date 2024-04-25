// act10
function sumarNumerosPares(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            suma += array[i];
        }
    }
    return suma;
}

const num = [2, 3, 4, 5];
const result = sumarNumerosPares(num);
console.log("la suma de numeros pares es:", result);