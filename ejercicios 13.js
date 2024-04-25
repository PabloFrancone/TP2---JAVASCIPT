// act13
const personas = [
    { nombre: "José", sexoBiologico: "H", edad: 22},
    { nombre: "Bianca", sexoBiologico: "M", edad: 19},
    { nombre: "Valentino", sexoBiologico: "H", edad: 20},
    { nombre: "Sahra", sexoBiologico: "M", edad: 24}
];

function calcularPromedioEdadTotal(personas) {
    const totalPersonas = personas.length;
    const sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return sumaEdades / totalPersonas;
}

function calcularPromedioEdadMujeres(personas) {
    const mujeres = personas.filter(persona => persona.sexoBiologico === 'M');
    const totalMujeres = mujeres.length;
    if (totalMujeres === 0) return 0;
    const sumaEdadesMujeres = mujeres.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return sumaEdadesMujeres / totalMujeres;
}

function encontrarMujerMayorEdad(personas) {
    const mujeres = personas.filter(persona => persona.sexoBiologico === 'M');
    return mujeres.reduce((mayorEdad, persona) => (persona.edad > mayorEdad.edad ? persona : mayorEdad), {edad: -Infinity});
}

function encontrarHombreMenorEdad(personas) {
    const hombres = personas.filter(persona => persona.sexoBiologico === 'H');
    return hombres.reduce((menorEdad, persona) => (persona.edad < menorEdad.edad ? persona : menorEdad), {edad: Infinity});
}

console.log("Promedio de edad total:", calcularPromedioEdadTotal(personas));
console.log("Promedio de edad de las mujeres:", calcularPromedioEdadMujeres(personas));
console.log("Nombre de la mujer con mayor edad:", encontrarMujerMayorEdad(personas).nombre);
console.log("Nombre del hombre con menor edad:", encontrarHombreMenorEdad(personas).nombre);