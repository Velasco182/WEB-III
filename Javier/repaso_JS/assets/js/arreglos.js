                        ///ARREGLOS///
const menores = ['Andres', 'Julian', 'Camilo'];
console.table(menores);

const [, men2,] = menores;
console.log(men2);

const retornarMenores = ({men1=menores[0], men2=menores[1], men3=menores[2]}) =>{
    // arreglo = ['ABC123', 'Fernando', 'María']
    console.log(men1);
    console.log(men2);
    console.log(men3);
}

retornarMenores(menores);

const useSate = (nombre) =>{
    return [nombre, ()=>{console.log('El usuario está activo');}];
}

const arr = useSate('Andres');

console.log(arr);
// arr[0]();
arr[1]();

///El arrow function se guarda en setNombre, estamos recorriendo las 
// posiciones del arreglo que estamos retornando en useState.
const [nombre, setNombre] = useSate('Rubén');

console.log(nombre);
setNombre();


                            ///EVENTOS///
console.log(1);
document.addEventListener('DOMContentLoaded', ()=>{console.log('El documento se cargó completamente (2)');});
console.log(3);