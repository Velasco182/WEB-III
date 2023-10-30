import {
    tutores
} from "./db.js";

console.table(tutores);

// ESTE APARTADO PARA LAS VARIABLES
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const parentezco = document.querySelector("#parentezco");
const sexo = document.querySelector("#sexo");
const ruta = document.querySelector("#ruta");

const boton = document.querySelector(".btns");

// const nom = document.querySelector(".nombre");
// const ape = document.querySelector(".apellido");
// const eda = document.querySelector(".edad");
// const par = document.querySelector(".parentezco");
// const sex = document.querySelector(".sexo");
// const rut = document.querySelector(".ruta");



// const max = new Date().getFullYear();
// const min = max - 20;

//Generando un objeto con la búsqueda
const datosBusqueda = { nom: "", ape: "", eda: "", par: "", sex: "", rut: "" };

//ESTE APARTADO PARA LOS EVENTOS
document.addEventListener("DOMContentLoaded", () => {

    boton.addEventListener('click', () => {

        mostrarTutor();
        filtrarTutor();

    });

    // 
    llenarSelect();
    //Llena el Select	 de años


});

//EVENTOS PARA CADA UNO DE LOS SELECT
// marca.addEventListener("change", (e) => {
//     console.log("Se escogio una opción"); console.log(e.target.value);

//     //Este valor es el que se debe de almacenar en el objeto que se creo

//     datosBusqueda.marca = e.target.value;
//     //console.log(datosBusqueda);  
//     //filtrarAuto();
// });


// ESTE APARTADO PARA LAS FUNCIONES
// Definimos la funcion mostrarTutores
function mostrarTutor() {

    tutores.forEach((t) => {

        const trResultados =  document.querySelector(".trResultados");

        const tdNombre = document.createElement('td'); 
        tdNombre.classList = 'nombre';
        const tdApellido = document.createElement('td'); 
        tdApellido.classList = 'apellido';
        const tdEdad = document.createElement('td'); 
        tdEdad.classList = 'edad';
        const tdParentezco = document.createElement('td'); 
        tdParentezco.classList = 'parentezco';
        const tdSexo = document.createElement('td'); 
        tdSexo.classList = 'sexo';
        const tdRuta = document.createElement('td'); 
        tdRuta.classList = 'ruta';

        tdNombre.textContent = ` ${t.nombre}`;
        tdApellido.textContent = ` ${t.apellido}`;
        tdEdad.textContent = ` ${t.edad}`;
        tdParentezco.textContent = ` ${t.parentezcoFamiliar}`;
        tdSexo.textContent = ` ${t.sexo}`;
        tdRuta.textContent = ` ${t.ruta}`;

        trResultados.appendChild(tdNombre);
        trResultados.appendChild(tdApellido);
        trResultados.appendChild(tdEdad);
        trResultados.appendChild(tdParentezco);
        trResultados.appendChild(tdSexo);
        trResultados.appendChild(tdRuta);

        const trRe =  document.createElement('tr');

        trResultados.appendChild(trRe);

    });

}

function filtrarTutor(){

    console.log("Filtrando por Tutores");
    const resultado = tutores.filter(filtrar(tutores));

    console.log(resultado);
}

function filtrar(tutor){

    if (datosBusqueda.nom) {
        return tutor.nombre === datosBusqueda.nom;
    }

    return tutor;

}

function llenarSelect() {

    console.log("LLenado el Select");
    // for (let i=tutores.length; i >= 0; i--) {

    //este es cambio para que me muestre los años desde el max    
    for (let i = 0; i < tutores.length; i++) {

        const tutor = tutores[i];

        const opcion = document.createElement('option');
        const opcion1 = document.createElement('option');
        // const opcion2 = document.createElement('option');
        // const opcion3 = document.createElement('option');
        // const opcion4 = document.createElement('option');
        // const opcion5 = document.createElement('option');

        opcion.value = tutor.nombre;
        opcion1.value = tutor.apellido;
        // opcion2.value = tutor.edad;
        // opcion3.value = tutor.parentezcoFamiliar;
        // opcion4.value = tutor.sexo;
        // opcion5.value = tutor.ruta;

        // Crear un objeto Set para almacenar valores únicos de la propiedad deseada
        const tutorRR = new Set();
        const tutorRS = new Set();
        const tutorRP = new Set();
        const tutorRE = new Set();

        // console.log(tutorRR);

        // Recorrer el arreglo de tutores y agregar opciones únicas al select
        for (const r of tutores) {

            tutorRR.add(r.ruta);

        }

        for (const s of tutores) {

            tutorRS.add(s.sexo);

        }

        for (const p of tutores) {

            tutorRP.add(p.parentezcoFamiliar);

        }

        for (const e of tutores) {

            tutorRE.add(e.edad);

        }

        // Limpiar el contenido actual del select
        ruta.innerHTML = '';
        sexo.innerHTML = '';
        parentezco.innerHTML = '';
        edad.innerHTML = '';

        const edadesArray = Array.from(tutorRE); // Convertir el Set a un array
        edadesArray.sort((a, b) => a - b); // Ordenar el array de menor a mayor


        // Crear opción por cada valor único en el conjunto
        for (const tutorE of edadesArray) {

            const opcion2 = document.createElement('option');
            opcion2.value = tutorE;
            opcion2.textContent = tutorE;

            edad.appendChild(opcion2);
        }

        for (const tutorP of tutorRP) {

            const opcion3 = document.createElement('option');
            opcion3.value = tutorP;
            opcion3.textContent = tutorP;

            parentezco.appendChild(opcion3);
        }

        for (const tutorS of tutorRS) {

            const opcion4 = document.createElement('option');
            opcion4.value = tutorS;
            opcion4.textContent = tutorS;

            sexo.appendChild(opcion4);
        }

        for (const tutorR of tutorRR) {

            const opcion5 = document.createElement('option');
            opcion5.value = tutorR;
            opcion5.textContent = tutorR;

            ruta.appendChild(opcion5);
        }


        opcion.textContent = tutor.nombre;
        opcion1.textContent = tutor.apellido;
        // opcion2.textContent = tutor.edad;
        // opcion3.textContent = tutor.parentezcoFamiliar;
        // opcion4.textContent = tutor.sexo;
        // opcion5.textContent = tutor.ruta;

        nombre.appendChild(opcion);
        apellido.appendChild(opcion1);
        // edad.appendChild(opcion2);
        // parentezco.appendChild(opcion3);
        // sexo.appendChild(opcion4);
        // ruta.appendChild(opcion5);

    }
    // }

    //La función toma un parámetro e, que representa el evento en sí.
    nombre.addEventListener("change", (e) => {

        // Dentro de la función, esto está tomando el valor seleccionado del campo <select> 
        //y lo asigna a la propiedad nom del objeto datosBusqueda.

        datosBusqueda.nom = e.target.value;

        // mostrarTutor();

        console.log(datosBusqueda); 
    });

    apellido.addEventListener("change", (e) => {

        datosBusqueda.ape = e.target.value;
        console.log(datosBusqueda);
    });

    edad.addEventListener("change", (e) => {

        datosBusqueda.eda = e.target.value;

        console.log(datosBusqueda);
    });

    parentezco.addEventListener("change", (e) => {

        datosBusqueda.par = e.target.value;

        console.log(datosBusqueda);
    });

    sexo.addEventListener("change", (e) => {

        datosBusqueda.sex = e.target.value;
        console.log(datosBusqueda);

    });

    ruta.addEventListener("change", (e) => {

        datosBusqueda.rut = e.target.value;
        console.log(datosBusqueda);
    });

}

