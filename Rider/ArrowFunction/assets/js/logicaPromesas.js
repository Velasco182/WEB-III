let n1, n2, n3, resultado, final, suma;
let alertt = false;
let notas = [];
let p = [];

function datosFormulario(event) {

    event.preventDefault();  //Evitar recargar la página al enviar el formulario

    n1 = parseFloat(document.querySelector("#n1").value);
    n2 = parseFloat(document.querySelector("#n2").value);
    n3 = parseFloat(document.querySelector("#n3").value);

    while (n1 > 5.0 || n2 > 5.0 || n3 > 5.0) {

        alert('Ingresa número entre 0.0 y 5.0');
        alertt = true;

        window.location.reload(); /// Reiniciar pagina html
        return;
    }


    miNota(n1, n2, n3);

    if (!alertt) {

        mostrar(resultado);

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

const calcular = (notas, p) =>{
    
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

    // console.log();
    console.log(resultado);


    const contenedor = document.querySelector('.contenedor');

    const row = document.createElement('div');
    row.id = ('mostrar');

    row.innerHTML =
        `Nota 1: ${p[0]}` + "<br>" +
        `Nota 2: ${p[1]}` + "<br>" +
        `Nota 3: ${p[2]}` + "<br>" +
        `Nota Final: ${resultado}` + "<br>";

    contenedor.appendChild(row);

}