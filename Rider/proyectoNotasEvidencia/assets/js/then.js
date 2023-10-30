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

    // if (!alertt) {

    //     mostrar(final);

    // }
    porcentajes(notas)
        .then((p) => {
            // La función dentro de then se ejecutará cuando la promesa porcentajes se resuelva con éxito
            calcular(p)
                .then((final) => {
                    // La función dentro de then se ejecutará cuando la promesa calcular se resuelva con éxito
                    if (!alertt) {
                        mostrar(final);
                    }
                })
                .catch((error) => {
                    // Manejar errores si la promesa calcular se rechaza
                    console.error(error);
                });
        })
        .catch((error) => {
            // Manejar errores si la promesa porcentajes se rechaza
            console.error(error);
        });

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

    const accionesCell = document.createElement('td');
    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.classList = 'btns';

    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    eliminarButton.classList = 'btns';

    accionesCell.appendChild(editarButton);
    accionesCell.appendChild(eliminarButton);

    rowBotones.appendChild(accionesCell);

    tablaNotas.appendChild(row);
    tablaNotas.appendChild(rowBotones);
    tablaNotas.appendChild(br);
}
