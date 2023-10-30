////DESESTRUCTURACIÓN////
const aprendiz = {
    nombre: 'Rubén',
    apellido: 'Velasco',
    edad: '26 años',
    ficha: '2556678',
    programa: 'ADSO',
};

console.table(aprendiz); //Traemos a consola el método

//Traemos un solo elemento del arreglo
console.log(aprendiz.nombre);//Traemos un solo elemento del arreglo como método

//Como constante
const {nombre, edad, ficha} = aprendiz;

console.log(nombre);
console.log(edad);
console.log(ficha);

const retornarAprendiz = (usuario) =>{

    console.table(usuario);

    const {nombre, edad, ficha} = usuario;

    console.log(nombre);
    console.log(edad);
    console.log(ficha);
}

const retornarAprendizz = ({nombre, apellido, edad})=>{
    console.table(nombre, apellido, edad);
}

retornarAprendiz(aprendiz);
retornarAprendizz(aprendiz);