const menor = {};
const menores = [];

    let nombre = prompt('Ingresa el nombre del menor');
    let edad = prompt('Ingresa la edad del menor');

    menor = {
        nombre : nombre,
        edad: edad
    }

    console.log(menores)
    
    function *generadorMenores(menores){
        for (let i=0; i<menores.length; i++){
            yield menores[i];
        }
    }

    menores.push(menor);
    const iterador = generadorMenores(menores);
    console.log(iterador.next().value)

