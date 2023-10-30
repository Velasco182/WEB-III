let n1, n2, n3, resultado, final, suma, nombre;

const formulario = document.querySelector('#formulario');
const tablaNotas = document.getElementById('tablaNotas');
const editarBtn = document.querySelectorAll('#editarBtn');
const eliminarBtn = document.querySelectorAll('#eliminarBtn');

let alertt = false;
let notas = [];
let p = [];
let estudiantes = [];


async function datosFormulario(event) {
    event.preventDefault();  //Evitar recargar la página al enviar el formulario

    n1 = parseFloat(document.querySelector("#n1").value);
    n2 = parseFloat(document.querySelector("#n2").value);
    n3 = parseFloat(document.querySelector("#n3").value);
    nombre = document.querySelector("#nombre").value;

    while (n1 > 5.0 || n2 > 5.0 || n3 > 5.0) {

        alert('Ingresa número entre 0.0 y 5.0');
        alertt = true;

        window.location.reload(); /// Reiniciar pagina html
        return;
    }


    miNota(n1, n2, n3);

    // if (!alertt) {

    //     mostrar(final);

    // }
    try {
        const p = await porcentajes(notas); // Espera a que se resuelva la primera promesa
        const final = await calcular(p); // Espera a que se resuelva la segunda promesa

        if (!alertt) {
            mostrar(final, nombre);
        }

    } catch (error) {
        // Manejar errores si alguna de las promesas se rechaza
        console.error(error);
    }

}

function miNota(n1, n2, n3) {

    notas = [n1, n2, n3];
    resultado = calcular(notas, porcentajes(notas));
}

const porcentajes = (notas) => {

    return new Promise((resuelve, rechaza) => {

        let p1 = 0.3, p2 = 0.4;

        n1 = notas[0] * p1;
        n2 = notas[1] * p1;
        n3 = notas[2] * p2;

        resuelve(p = [n1, n2, n3]);

    });

}

const calcular = (notas) => {

    return new Promise((resuelve1, rechaza) => {

        suma = 0;

        console.log(notas);

        for (let i of p) {
            // console.log(notas[i])
            suma = suma + i;

        }
        final = suma;
        // console.log(final);
        resuelve1(final);

    });
}



function mostrar(resultado, nombre) {

    limpiar();

    estudiantes.forEach(element => {

        const br = document.createElement('br');

        const row = document.createElement('table');

        // Definir el contenido de la fila (celdas)
        row.innerHTML = `
                            <table>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Nota 1</th>
                                    <th>Nota 2</th>
                                    <th>Nota 3</th>
                                    <th>Nota Final</th>
                                    <td>
                                        <button class="btns" id="editarBtn">Editar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>${element.nombre}</td>
                                    <td>${element.p[0]}</td>
                                    <td>${element.p[1]}</td>
                                    <td>${element.p[2]}</td>
                                    <td>${element.resultado}</td>
                                    <td>
                                        <button class="btns" id="eliminarBtn">Eliminar</button>
                                    </td>
                                </tr>
                                    
                            </table>`;

        row.classList = 'ver';

        // Agregar la fila a la tabla
        tablaNotas.appendChild(row);
        tablaNotas.appendChild(br);  //Si deseas un espacio entre las filas

    });
    

    const estudiantesObj = {
        id: Date.now(),
        nombre,
        p,
        resultado
    }  

    ///Dupliar elemnto del arreglo, spread operator
    estudiantes.push(estudiantesObj);
    // estudiantes = [...estudiantes, estudiantesObj];
    console.log(estudiantes);

    ///Reiniciar formulario
    formulario.reset();
}

// editarBtn.addEventListener('click', (e) => {
//         eliminar(estudiantes.id);
// });

    
// eliminarBtn.addEventListener('click', (e) => {

// });

function editar() {


}

function eliminar(id) {

    estudiantes = estudiantes.filter(estudiantes => estudiantes.id !== id);
    mostrar();

}

function limpiar() {

    while (tablaNotas.firstChild) {

        tablaNotas.removeChild(tablaNotas.firstChild);

    }

}

