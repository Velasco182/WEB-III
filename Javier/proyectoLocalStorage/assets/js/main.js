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

function eventListeners(){
    formulario.addEventListener('submit', agregarImagen);

    document.addEventListener('DOMContentLoaded', ()=>{

        // Restaurar la ruta desde el localStorage al cargar la página
        const rutas = JSON.parse(localStorage.getItem('ruta')) || [];
        console.table(rutas);

        if (rutas) {
            Imagenes = rutas;
            // Actualizar la visualización del carrito en la página
            crearHTML();
            console.table(rutas);

        }

    });
}


function agregarImagen(e) {

    e.preventDefault();
    
    let img = document.querySelector('#img');
    let a = document.querySelector('#inicio').value;
    let b = document.querySelector('#llegada').value;
    let nombre = document.querySelector('#nombreM').value;


    //Crear objeto donde se almacenan elementos con un id que es la fecha al momento de la crecación de dicho elemento
    const imgObj = {
        id: Date.now(),
        imgnURL: URL.createObjectURL(img.files[0]),
        a, b,
        nombre
    }

    ///Dupliar elemnto del arreglo, spread operator
    Imagenes = [...Imagenes, imgObj];
    console.table(Imagenes);
    crearHTML();

    ///Reiniciar formulario
    formulario.reset();
}  

function crearHTML(){

    limpiar();

    Imagenes.forEach((imgn) => {

            const borrar = document.createElement('button');

            borrar.classList = 'btns';
            borrar.innerText = 'Eliminar';

            const imagen = document.createElement('img');

            // Acceder a la imagen seleccionada
            // const url = URL.createObjectURL(imgn.imgn);
            imagen.src = imgn.imgnURL;
            imagen.style.width = '400px';
            imagen.style.padding = '10px';

            console.log("Agregar img "+imagen);


            // contenedor.innerHTML = `<h3>Datos de la Ruta</h3>
                                        
            //                             <div id="descripcion">
            //                                 <h4>Descripción: </h4>
            //                                 <h4>Punto A: </h4><p>${imgn.a}</p>
            //                                 <h4>Punto B: </h4><p>${imgn.b}</p>
            //                             </div>  

            //                             <div id="nombreM">
            //                                 <h4>Nombre: </h4>
            //                                 <p id="nombre">${imgn.nombre}</p>
            //                             </div>`;


            const dr = document.createElement('h3');
            dr.textContent = 'Datos de la Ruta';

            const desc = document.createElement('div');
            desc.innerHTML = `  <h4>Descripción: </h4>
                                <h4>Punto A: </h4><p>${imgn.a}</p>
                                <h4>Punto B: </h4><p>${imgn.b}</p>`;

            const nm = document.createElement('div');
            nm.innerHTML = `<h4>Nombre: </h4><p>${imgn.nombre}</p>`;

            // const a = document.createElement('p');
            // const b = document.createElement('p');
            // const nombre = document.createElement('p');

            const br = document.createElement('br');
            
            // a.textContent = imgn.a;
            // b.textContent = imgn.b;
            // nombre.textContent = imgn.nombre;

            contenedor.classList = 'elemento contenedor';
            cont.appendChild(contenedor);
            
            contenedor.appendChild(dr);

            contenedor.appendChild(imagen);

            
            
            // imagenContenedor.appendChild(contenedor);

            contenedor.appendChild(desc);
            // descripcion.appendChild(a);
            // descripcion.appendChild(b);

            contenedor.appendChild(nm);

            listaImagenes.appendChild(borrar);
            listaImagenes.appendChild(br);

            borrar.onclick = () =>{
                borrarImg(imgn.id);
            }
    });

    agregarStorage();

}

function limpiar() {

    while (listaImagenes.firstChild) {

        listaImagenes.removeChild(listaImagenes.firstChild);

    }
}

function agregarStorage(){

    localStorage.setItem('ruta', JSON.stringify(Imagenes));

}

function borrarImg(id){

    console.log('Eliminando img ', id);

    //Borar posicion del arreglo
    Imagenes = Imagenes.filter(imgn => imgn.id !== id);

    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem('ruta', JSON.stringify(Imagenes));

    crearHTML();

    // location.reload();
}
