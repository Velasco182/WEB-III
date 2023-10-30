let user = prompt("¿Cuál es tu nombre?");

const divtexto = document.querySelector('#texto'); //Referencia al id creado con #  
const titulo = <h1>Bienvenido {user} al curso de React</h1>; 

ReactDOM.render(titulo, divtexto);