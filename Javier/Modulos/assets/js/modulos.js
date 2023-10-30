import {

    nombre, apellido

} from "./funcion_iife.js";

console.log(nombre, apellido);

let date = document.querySelector('.date');
date.textContent = `${nombre + " " + apellido}`;

////////////////////------------------//////////////////////

import {
    tutores
} from "./tutores.js"

console.table(tutores);

// FORMA EXTENSA 

const traerTutor = (id) => {
    return tutores.find((tutor) => {
        if (tutor.id === id) {
            return tutores;
        }
    });
};
console.table(traerTutor(2));

// BUENAS PRÁCTICAS

const traer = (id) => {
    return tutores.find((tutor) => tutor.id === id);
};
console.table(traer(1));



// TRAER EL TUTOR POR NOMBRE - USAR FILTER PARA IMPRIMIR 2 QUE TENGAN QUE SE NOMBREN IGUAL 
// EJEMPLO = TUTORES.FILTER

const traerNombre = (nombre) =>  {
    return tutores.filter((nombreT) => nombreT.nombre == nombre);
};
console.table(traerNombre("Pedro"));