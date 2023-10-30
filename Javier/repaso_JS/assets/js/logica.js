function inicioSesion(){
    
    let name = prompt('Por favor ingresa tu nombre.');

    return `Hola bienvenido, ${name}`;
}

// const registro = (name) =>{
//     return `Hola bienvenido Registro, ${name}`;
// }

const registro = (name) => `Hola bienvenido Registro, ${name}`;

// const objeto = ()=>{
//     return{
//         id: "1",
//         nombre: "Velasco"
//     };
// }

const objeto = ()=>
    ({
        id: "1",
        nombre: "Velasco"
    });


alert(inicioSesion());
console.log(registro('Darío'));
console.table(objeto());





