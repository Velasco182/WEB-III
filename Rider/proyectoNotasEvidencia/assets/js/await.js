let n1, n2, n3, resultado, final, suma, nombre;

const formulario = document.querySelector('#formulario');
const tablaNotas = document.getElementById('tablaNotas');

let alertt = false;
let estudiantes = [];

// Al cargar la página, intenta obtener los datos almacenados en localStorage
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("estudiantes")) {
        estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
        estudiantes.forEach((estudiante) => {
            mostrar(estudiante); // Llama a mostrar con los datos cargados
        });
    }
});

async function datosFormulario(event) {
    event.preventDefault();

    n1 = parseFloat(document.querySelector("#n1").value);
    n2 = parseFloat(document.querySelector("#n2").value);
    n3 = parseFloat(document.querySelector("#n3").value);
    nombre = document.querySelector("#nombre").value;

    while (n1 > 5.0 || n2 > 5.0 || n3 > 5.0) {
        alert('Ingresa números entre 0.0 y 5.0');
        alertt = true;
        window.location.reload();
        return;
    }

    miNota(n1, n2, n3);

    try {
        const p = await porcentajes(notas);
        const final = await calcular(p);

        if (!alertt) {
            agregarEstudiante(nombre, notas, final); // Agrega el estudiante a la lista
            mostrar({ nombre, notas, resultado: final }); // Muestra el estudiante en la tabla
        }
    } catch (error) {
        console.error(error);
    }

    // Actualizar el localStorage con los datos actuales de estudiantes
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
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
        for (let i of p) {
            suma = suma + i;
        }
        final = suma;
        resuelve1(final);
    });
}

function mostrar(estudiante) {
    limpiar();
    const br = document.createElement('br');
    const row = document.createElement('table');
    row.innerHTML = `
    <table>
      <tr>
        <th>Nombre</th>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Nota 3</th>
        <th>Nota Final</th>
        <td>
          <button class="btns editarBtn" data-id="${estudiante.id}">Editar</button>
        </td>
      </tr>
      <tr>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.notas[0]}</td>
        <td>${estudiante.notas[1]}</td>
        <td>${estudiante.notas[2]}</td>
        <td>${estudiante.resultado}</td>
        <td>
          <button class="btns eliminarBtn" data-id="${estudiante.id}">Eliminar</button>
        </td>
      </tr>
    </table>`;

    row.classList = 'ver';

    tablaNotas.appendChild(row);
    tablaNotas.appendChild(br);

    formulario.reset();


    // EVENTO PARA ELIMINAR Y EDITAR
    tablaNotas.addEventListener('click', (event) => {
        if (event.target.classList.contains('editarBtn')) {
            // Botón de "Editar" presionado
            const estudianteId = event.target.getAttribute('data-id');
            const estudiante = estudiantes.find(est => est.id.toString() === estudianteId);

            if (estudiante) {
                // Rellenar el formulario con los datos del estudiante para editar
                document.querySelector("#nombre").value = estudiante.nombre;
                document.querySelector("#n1").value = estudiante.notas[0];
                document.querySelector("#n2").value = estudiante.notas[1];
                document.querySelector("#n3").value = estudiante.notas[2];

                // Eliminar el estudiante de la lista
                estudiantes = estudiantes.filter(est => est.id.toString() !== estudianteId);

                // Actualizar el localStorage con los datos actuales de estudiantes
                localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

                // Volver a mostrar la lista de estudiantes sin el estudiante editado
                mostrar(estudiantes);
            }
        } else if (event.target.classList.contains('eliminarBtn')) {
            // Botón de "Eliminar" presionado
            const estudianteId = event.target.getAttribute('data-id');

            // Eliminar el estudiante de la lista
            estudiantes = estudiantes.filter(est => est.id.toString() !== estudianteId);

            // Actualizar el localStorage con los datos actuales de estudiantes
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

            // Volver a mostrar la lista de estudiantes sin el estudiante eliminado
            mostrar(estudiantes);
        }
    });

}


// Cuando agregas un estudiante, crea un objeto y agrégalo a la lista de estudiantes
function agregarEstudiante(nombre, notas, resultado) {
    const estudiante = {
        id: Date.now(),
        nombre,
        notas,
        resultado
    };

    estudiantes.push(estudiante);

    // Actualizar el localStorage con los datos actuales de estudiantes
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

// Cuando eliminas un estudiante, también elimínalo de la lista de estudiantes y actualiza el localStorage
function eliminar(id) {
    estudiantes = estudiantes.filter(estudiante => estudiante.id !== id);
    mostrar(estudiantes);

    // Actualizar el localStorage con los datos actuales de estudiantes
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function limpiar() {
    while (tablaNotas.firstChild) {
        tablaNotas.removeChild(tablaNotas.firstChild);
    }
}
