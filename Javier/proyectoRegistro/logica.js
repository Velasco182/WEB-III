const formulario = document.querySelector('#formulario');
const listaImagenes = document.querySelector('#lista');
const cont = document.querySelector('.cont');
let contenedor = document.querySelector('.contenedor');
// const imagenContenedor = document.querySelector('#imagenContenedor');
// const descripcion = document.querySelector('#descripcion');
// const nombreM = document.querySelector('#nombreM');

let Imagenes = [];
// const imgObj = {};
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarImagen);
    document.addEventListener('DOMContentLoaded', () => {
        // Restaurar la ruta desde el localStorage al cargar la página
        const registro = JSON.parse(localStorage.getItem('registro')) || [];
        console.table(registro);
        if (registro) {
            Imagenes = registro;
            // Actualizar la visualización del carrito en la página
            crearHTML();
            console.table(registro);
        }
    });
}
function agregarImagen(e) {
    e.preventDefault();

    let img = document.querySelector('#img');
    let doc = document.querySelector('#documento').value;
    let nom = document.querySelector('#nombre').value;
    let ape = document.querySelector('#apellido').value;
    let tel = document.querySelector('#telefono').value;
    let fna = document.querySelector('#fechaNacimiento').value;
    let sex = document.querySelector('#sexo').value;
    let trh = document.querySelector('#rh').value;

    //Crear objeto donde se almacenan elementos con un id que es la fecha al momento de la crecación de dicho elemento
    const imgObj = {
        id: Date.now(),
        imgnURL: URL.createObjectURL(img.files[0]),
        doc, nom, ape, tel, fna, sex, trh
    }
    ///Dupliar elemnto del arreglo, spread operator
    Imagenes = [...Imagenes, imgObj];
    console.table(Imagenes);
    crearHTML();
    ///Reiniciar formulario
    formulario.reset();
}
function crearHTML() {
    limpiar();

    // Crear tabla y encabezados de columna
    const table = document.createElement('table');
    table.innerHTML = `
            <tr>
                <th>Imagen</th>
                <th>Tipo Documento</th>
                <th>Número de Documento</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Número de Teléfono</th>
                <th>Fecha de Nacimiento</th>
                <th>Sexo</th>
                <th>RH</th>
            </tr>
        `;

    Imagenes.forEach((imgn) => {
        const row = table.insertRow(-1);

        // Celda de imagen
        const imgCell = row.insertCell(0);
        const imagen = document.createElement('img');
        imagen.src = imgn.imgnURL;
        imagen.style.width = '100px';
        imgCell.appendChild(imagen);

        // Celda tipo de documento
        const celdaTipoD = row.insertCell(1);
        celdaTipoD.textContent = imgn.doc;

        // Celda nombre del menor
        const celdaNombreM = row.insertCell(2);
        celdaNombreM.textContent = imgn.nom;

        // Celda apellido del menor
        const celdaApellido = row.insertCell(3);
        celdaApellido.textContent = imgn.ape;

        // Celda numero de teléfono
        const celdaTelefono = row.insertCell(4);
        celdaTelefono.textContent = imgn.tel;

        // Celda fecha de nacimiento
        const celdaFecha = row.insertCell(5);
        celdaFecha.textContent = imgn.fna;

        // Celda sexo
        const celdaSexo = row.insertCell(6);
        celdaSexo.textContent = imgn.sex;

        // Celda tipo RH
        const celdaRh = row.insertCell(7);
        celdaRh.textContent = imgn.trh;

        


        // Celda de botón eliminar
        const eliminarCelda = row.insertCell(8);
        const borrar = document.createElement('button');
        borrar.classList.add('btns');
        borrar.innerText = 'Eliminar';
        eliminarCelda.appendChild(borrar);

        borrar.addEventListener('click', () => {
            Imagenes.splice(Imagenes.indexOf(imgn), 1);
            crearHTML();
        });
    });

    contenedor.appendChild(table);
    agregarStorage();
}


function limpiar() {
    while (listaImagenes.firstChild) {
        listaImagenes.removeChild(listaImagenes.firstChild);
    }
}
function agregarStorage() {
    localStorage.setItem('ruta', JSON.stringify(Imagenes));
}
function borrarImg(id) {
    console.log('Eliminando img ', id);
    //Borar posicion del arreglo
    Imagenes = Imagenes.filter(imgn => imgn.id !== id);
    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem('registro', JSON.stringify(Imagenes));
    crearHTML();
    // location.reload();
}