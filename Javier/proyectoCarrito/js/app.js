let listaCarrito = [];
// let contadorCursos;
let img, nombre, precio, cantidad;
const lista = document.getElementById('lista-carrito');

let t = 0, cant, pre;


// Se inicializa un objeto para llevar un registro de la cantidad de cada curso agregado.
const contadorCursos = {}; 


document.addEventListener('DOMContentLoaded', ()=>{

    const boton = document.querySelectorAll('.agregar-carrito');
    // Obtener los contadores de los cursos del almacenamiento local, o inicializar un objeto vacío
 
    for(let i = 0; i < boton.length; i++){
        const btn = boton[i];

        btn.addEventListener('click', ()=>{

            const card = btn.closest('.card');

            img = card.querySelector('.imagen-curso').src;
            nombre = card.querySelector('.info-card h4').textContent;
            precio = card.querySelector('.u-pull-right').textContent;

            // Actualiza el contador para el curso actual.
            contadorCursos[nombre] = (contadorCursos[nombre] || 0) + 1; 

            cantidad = contadorCursos[nombre];

            console.log(img, nombre, precio, cantidad);
            
            carrito(img, nombre, precio, cantidad);

            // Guardar los contadores actualizados en el almacenamiento local
            localStorage.setItem('cursos', JSON.stringify(contadorCursos));

            // eliminar(); 

        });  
    }
    
    // Restaurar el carrito desde el localStorage al cargar la página
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));

    if (carritoGuardado) {
        listaCarrito = carritoGuardado;
        // Actualizar la visualización del carrito en la página
        actualizarCarrito();
    }

});



    // Función para agregar cursos al carrito 

    function carrito(img, nombre, precio, cantidad) {

        // Busca el curso en la lista del carrito
        const cursoEnCarrito = listaCarrito.find(curso => curso.nombre === nombre);
    
        if (cursoEnCarrito) {
            // Si el curso ya está en el carrito, actualiza su contador
            cursoEnCarrito.cantidad = cantidad;
        } else {
            // Si el curso no está en el carrito, agrégalo
            listaCarrito.push({id: Date.now(), img, nombre, precio, cantidad });
            console.table(listaCarrito);
        }
        
        // Guarda el carrito completo en el almacenamiento local
        localStorage.setItem('carrito', JSON.stringify(listaCarrito));
        // Actualiza la visualización del carrito en la página
        actualizarCarrito();
    }
    

    function actualizarCarrito(){

        limpiar();

        // lista.innerHTML = '';

        const th = document.createElement('thead');

        th.innerHTML = `<tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th> </th>
                        </tr>`;

        lista.appendChild(th);


        listaCarrito.forEach((curso)=>{


            const elemento = document.createElement('tr');
        
            elemento.innerHTML = `
            
            <td><img src="${curso.img}" style="width: 100%;" class="imagen-curso"></td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>`;
            // <td><a class="u-full-width button eliminar" id="eliminar">x</a></td>

            lista.appendChild(elemento); 

            let btnBorrar = document.createElement('td');

            btnBorrar.innerHTML = `<a class="u-full-width button eliminar" data-id="eliminar">x</a>`;
           
            elemento.appendChild(btnBorrar);

            // Agregamos el evento de eliminación
            btnBorrar.querySelector('.eliminar').addEventListener('click', () => {

                console.log(curso.id);

                eliminar(curso.id);

            });

            borrar();

            cant = parseInt(curso.cantidad);
            pre = parseInt(curso.precio.slice(1,3));

            t = t + (cant * pre);
                        
        }); 
                
        const tableT = document.createElement('tr');
        tableT.innerHTML = `<th></th>
                            <th></th>
                            <th></th>
                            <th>Total: <a id="total">$ ${t}</a></th>`;

        lista.appendChild(tableT);

    }

    function borrar(){

        let vaciar = document.querySelector('#vaciar-carrito');

        vaciar.addEventListener('click', ()=>{

            lista.innerHTML = `<tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th> </th>
                        </tr>`;

            localStorage.clear('carrito');
            // localStorage.removeItem('carrito');
            localStorage.clear('cursos');

            //para que se recargue y no aparezca de nuevo los datos del local
            location.reload();

        });

    }

    function eliminar(id){

        console.log('Eliminando curso ', id);
        //Borrar posicion del arreglo
        listaCarrito = listaCarrito.filter(curso => curso.id !== id);

        // Guarda el carrito actualizado en el almacenamiento local
        localStorage.setItem('carrito', JSON.stringify(listaCarrito));

        actualizarCarrito();

        location.reload();

    }

    function limpiar(){

        t = 0;

        console.table('Limpiar');

        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
    }



