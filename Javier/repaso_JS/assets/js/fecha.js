const hoy = new Date();
let valor;

const date = document.querySelector('.date');

console.log(Date.now());

valor = hoy;
console.log(valor);
console.log(typeof valor);

let cumple = new Date('28-09-1997');
cumple = new Date('Septiembre 28 1997');
console.log(cumple);
console.log(typeof cumple);

cumple.toString();
valor = cumple;

dia = cumple.getDay();
console.log(dia);

mes = cumple.getMonth();
console.log(mes);

anio = cumple.getFullYear();
console.log(anio);

date.innerHTML = `Dia: ${dia}<br>Mes: ${mes}<br>Año: ${anio}`;

const materias = new Set();
materias.add('Matemáticas');
materias.add('Cálculo');
materias.add('Física');
materias.add('Español');


console.log(materias);
///// Es como el método length.
console.table(materias.size);
//// Buscar elementos dentro del set
console.log(materias.has('Matemáticas'));
//// Borrar
materias.delete('Física');
console.log(materias);

///localStorage.clear();

/// Mostrar elemento por elemento
materias.forEach(function (asignatura){
    console.log(asignatura)
});

const n = [1,2,3,4,5,6,7,8,9,9,9,9,0];
console.log(n);

const eliminarDuplicado = new Set(n); 
console.log(eliminarDuplicado);

///Guardar elementos a corto plazo como credenciales de usuario

const debiles = new WeakSet();

const profesores = {
    nombre: 'Juan',
    apellido: 'Perez',
    materia: 'Matemáticas'
}

debiles.add(profesores);
console.log(debiles);

///MAPS y características ... Son listas que se pueden iterar (contiene llave y valor) (se puede albergar arreglos, objetos, etc)

const padres = new Map();

padres.set('madre', 'María');
padres.set('parentezco', 'Madrastra Cachonda');
padres.set('edad', '12');

console.log(padres);

const papa = {
    nombre: 'Daniela',
    parentezco: 'Mamá',
    edad: 21
}

// padres.set(papa);
console.log(padres.size);
console.log(padres.get('nombre'));
console.log(padres.has('nombre'));
//console.log(padres.delete('nombre'));
//padres.clear();

const motero = new Map([['nombre', 'Andres'], ['edad', 40]]);
console.log(motero);

motero.set('Placa', 'AUX045');
motero.set('nombre', 'Aurelio');

motero.forEach(datos => {
    console.log(datos);
});
console.log(motero);

////GENERADORES (propiedad por defecto es suspended)
function *crearGenerador(){
    yield 1;
    yield 'Rubén';
    yield 3+3;
    yield false;
}

const iterador = crearGenerador();
console.log(iterador);

////Despierta el generador
console.log(iterador.next());// Muestra como objeto
console.log(iterador.next().value);// Muestra el valor 2
console.log(iterador.next().value);// Muestra el valor 3

/////







