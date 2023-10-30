const nombre = prompt("¿Cuál es tu nombre?");
const apellido = prompt("¿Cuál es tu apellido?");

let user = `Bienvenido ${nombre} ${apellido} al curso de React.`;

/////////Repaso Arreglos
const num = [1, 2, 3, 4, 5];
let num1 = [...num];

const num2 = num1.map(function(numero){return numero*2});
/////////////////////////////////////
const divtexto = document.querySelector('#texto'); //Referencia al id creado con #  
const titulo = <h1>{user}</h1>;
// const op = <h1>{num2}</h1>;


ReactDOM.render(titulo, divtexto);
// ReactDOM.render(op);
console.log(user);
console.table(num2);
