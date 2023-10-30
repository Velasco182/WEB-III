let n1, n2, n3, resultado, final, suma, nombre;
let alertt = false;
let notas = [];
let p = [];

function datosFormulario(event) {

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

    if (!alertt) {

        mostrar(final);

    }

}

function miNota(n1, n2, n3) {

    notas = [n1, n2, n3];
    resultado = calcular(notas, porcentajes(notas));

    // console.log(resultado);
}

const porcentajes = (notas) => {

    return new Promise((resuelve, rechaza) => {

        let p1 = 0.3, p2 = 0.4;

        n1 = notas[0] * p1;
        n2 = notas[1] * p1;
        n3 = notas[2] * p2;
        
        resuelve (p = [n1, n2, n3]);

    });
    
}

const calcular = (notas) =>{
    
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


// function mostrar(resultado) {

//     // console.log();
//     console.log(resultado);


//     const contenedor = document.querySelector('.contenedor');

//     const row = document.createElement('div');
//     row.id = ('mostrar');

    // row.innerHTML =
    //     `Nombre: ${nombre}` + "<br>" +
    //     `Nota 1: ${p[0]}` + "<br>" +
    //     `Nota 2: ${p[1]}` + "<br>" +
    //     `Nota 3: ${p[2]}` + "<br>" +
    //     `Nota Final: ${resultado}` + "<br>";

//     contenedor.appendChild(row);

// }
function mostrar(resultado) {
    const tablaNotas = document.getElementById('tablaNotas');
    const br = document.createElement('br');

    const row = document.createElement('tr');
    const rowBotones = document.createElement('tr');
    rowBotones.classList = 'btnsContenedor';

    row.innerHTML =
    `Nombre: ${nombre}` + "<br>" +
    `Nota 1: ${p[0]}` + "<br>" +
    `Nota 2: ${p[1]}` + "<br>" +
    `Nota 3: ${p[2]}` + "<br>" +
    `Nota Final: ${resultado}` + "<br>";

    // const nombreCell = document.createElement('td');
    // nombreCell.textContent = nombre;

    // const nota1Cell = document.createElement('td');
    // nota1Cell.textContent = p[0];

    // const nota2Cell = document.createElement('td');
    // nota2Cell.textContent = p[1];

    // const nota3Cell = document.createElement('td');
    // nota3Cell.textContent = p[2];

    // const notaFinalCell = document.createElement('td');
    // notaFinalCell.textContent = resultado;

    const accionesCell = document.createElement('td');
    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.classList = 'btns';

    // const guardarButton = document.createElement('button');
    // guardarButton.textContent = 'Guardar';
    // guardarButton.classList = 'btns';

    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    eliminarButton.classList = 'btns';

    accionesCell.appendChild(editarButton);
    // accionesCell.appendChild(guardarButton);
    accionesCell.appendChild(eliminarButton);

    // row.appendChild(nombreCell);
    // row.appendChild(nota1Cell);
    // row.appendChild(nota2Cell);
    // row.appendChild(nota3Cell);
    // row.appendChild(notaFinalCell);
    rowBotones.appendChild(accionesCell);

    tablaNotas.appendChild(row);
    tablaNotas.appendChild(rowBotones);
    tablaNotas.appendChild(br);
}
