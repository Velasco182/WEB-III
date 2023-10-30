import{
    datos
} from './db.js';

console.log(datos);

const tdSelectDocumento = document.querySelector('#tdSelect');
const dMenorr = document.querySelector('#dMenor');
const nMenorr = document.querySelector('#nMenor');
const aMenorr = document.querySelector('#aMenor');
const fMenorr = document.querySelector('#fMenor');
const tMenorr = document.querySelector('#tMenor');
const rhSelectt = document.querySelector('#rhSelect');
const sSelectt = document.querySelector('#sSelect');
const fotoMM = document.querySelector('#fotoM');

// Contenedor para las citas
const contenedorMenores = document.querySelector('#menores');

// Formulario nuevas citas
const formulario = document.querySelector('#nuevo-menor')
formulario.addEventListener('submit', nuevoMenor);

let editando = false;

document.addEventListener('DOMContentLoaded', () => {

    eventListeners(); // Coloca eventListeners dentro de este bloque
    console.log('DOMContentLoaded se activó');

});


// Eventos
// eventListeners();
function eventListeners() {

    console.log('eventListeners se activó');

    tdSelectDocumento.addEventListener('change', datosMenor);
    dMenorr.addEventListener('change', datosMenor);
    nMenorr.addEventListener('change', datosMenor);
    aMenorr.addEventListener('change', datosMenor);
    fMenorr.addEventListener('change', datosMenor);
    tMenorr.addEventListener('change', datosMenor);
    rhSelectt.addEventListener('change', datosMenor);
    sSelectt.addEventListener('change', datosMenor);
    fotoMM.addEventListener('change', datosMenor);
}

const menoresObj = {
    tdSelect: '',
    dMenor: '',
    nMenor: '',
    aMenor: '',
    fMenor:'',
    tMenor: '',
    rhSelect: '',
    sSelect: '', 
    fotoM: ''
}

function datosMenor(e) {
    console.log(e.target.name) // Obtener el Input
    menoresObj[e.target.name] = e.target.value;
    console.log('datosMenor se activó');
}

// CLasses
class Citas {
    constructor() {
        this.citas = [];
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore( divMensaje , document.querySelector('.agregar-cita'));

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }

   imprimirCitas({citas}) { // Se puede aplicar destructuring desde la función...
       
        this.limpiarHTML();

        console.log('Se activó', citas);

        citas.forEach(cita => {
            const {tdSelect, dMenor, nMenor, aMenor, fMenor, tMenor, rhSelect, sSelect, fotoM,  id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // SCRIPTING DE LOS ELEMENTOS...
            const foto = document.createElement('img');
            foto.style.height = '150px';
            foto.style.width = '150px';
            foto.style.objectFit = 'cover';
            foto.style.borderRadius = '50%';
            foto.src = fotoM;

            const tipoDParrafo = document.createElement('h2');
            tipoDParrafo.classList.add('card-title', 'font-weight-bolder');
            tipoDParrafo.innerHTML = `${nMenor}`;

            const documentoMParrafo = document.createElement('p');
            documentoMParrafo.innerHTML = `<span class="font-weight-bolder">Tipo de documento: </span> ${tdSelect}`;

            const nombreMParrafo = document.createElement('p');
            nombreMParrafo.innerHTML = `<span class="font-weight-bolder">Número de documento: </span> ${dMenor}`;

            const apellidoMParrafo = document.createElement('p');
            apellidoMParrafo.innerHTML = `<span class="font-weight-bolder">Apellido: </span> ${aMenor}`;

            const fechaMParrafo = document.createElement('p');
            fechaMParrafo.innerHTML = `<span class="font-weight-bolder">Fecha de Nacimiento: </span> ${fMenor}`;

            const telefonoMParrafo = document.createElement('p');
            telefonoMParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${tMenor}`;

            const gSanguineoParrafo = document.createElement('p');
            gSanguineoParrafo.innerHTML = `<span class="font-weight-bolder">Grupo Sanguíneo: </span> ${rhSelect}`;

            const tipoSexoParrafo = document.createElement('p');
            tipoSexoParrafo.innerHTML = `<span class="font-weight-bolder">Sexo: </span> ${sSelect}`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);

            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            // Agregar al HTML
            divCita.appendChild(foto);
            divCita.appendChild(tipoDParrafo);
            divCita.appendChild(apellidoMParrafo);
            divCita.appendChild(documentoMParrafo);
            divCita.appendChild(nombreMParrafo);
            
            divCita.appendChild(fechaMParrafo);
            divCita.appendChild(telefonoMParrafo);
            divCita.appendChild(gSanguineoParrafo);
            divCita.appendChild(tipoSexoParrafo);


            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorMenores.appendChild(divCita);
        });    
   }

   limpiarHTML() {
        while(contenedorMenores.firstChild) {
            contenedorMenores.removeChild(contenedorMenores.firstChild);
        }
   }
}

const ui = new UI();
const administrarCitas = new Citas();

function nuevoMenor(e) {
    e.preventDefault();

    const {tdSelect, dMenor, nMenor, aMenor, fMenor, tMenor, rhSelect, sSelect, fotoM} = menoresObj;

    // Validar
    if( tdSelect === '' || dMenor === '' || nMenor === '' || aMenor === ''  || fMenor === '' || tMenor === '' || rhSelect === '' || sSelect === '' || fotoM === '') {

        console.log('Se activó', menoresObj);

        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;
    }else

    if(editando) {
        // Estamos editando
        administrarCitas.editarCita( {...menoresObj} );

        ui.imprimirAlerta('Guardado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'CREAR';

        editando = false;

    } else {
        // Nuevo Registrando

        // Generar un ID único
        menoresObj.id = Date.now();
        menoresObj.fotoM = URL.createObjectURL(fotoMM.files[0]);
        
        // Añade la nueva cita
        administrarCitas.agregarCita({...menoresObj});

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
    }


    // Imprimir el HTML de citas
    ui.imprimirCitas(administrarCitas);

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

function reiniciarObjeto() {
    // Reiniciar el objeto
    menoresObj.tdSelect = '';
    menoresObj.dMenor = '';
    menoresObj.nMenor = '';
    menoresObj.aMenor = '';
    menoresObj.fMenor = '';
    menoresObj.tMenor = '';
    menoresObj.rhSelect = '';
    menoresObj.sSelect = '';
    menoresObj.fotoM = '';
}


function eliminarCita(id) {
    administrarCitas.eliminarCita(id);

    ui.imprimirCitas(administrarCitas)
}

function cargarEdicion(cita) {

    const {tdSelect, dMenor, nMenor, aMenor, fMenor, tMenor, rhSelect, sSelect, fotoM, id } = cita;

    // Reiniciar el objeto
    menoresObj.tdSelect = tdSelect;
    menoresObj.dMenor = dMenor;
    menoresObj.nMenor = nMenor;
    menoresObj.aMenor = aMenor;
    menoresObj.fMenor = fMenor;
    menoresObj.tMenor = tMenor;
    menoresObj.rhSelect = rhSelect;
    menoresObj.sSelect = sSelect;
    menoresObj.fotoM = fotoM;
    menoresObj.id = id;

    // Llenar los Inputs
    tdSelectDocumento.value = tdSelect;
    dMenorr.value = dMenor;
    nMenorr.value = nMenor;
    aMenorr.value = aMenor;
    fMenorr.value = fMenor;
    tMenorr.value = tMenor;
    rhSelectt.value = rhSelect;
    sSelectt.value = sSelect;
    fotoMM.value = fotoM;
    

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}