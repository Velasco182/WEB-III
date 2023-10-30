document.addEventListener('DOMContentLoaded', function(){

    let formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function(event){

        event.preventDefault();

        let cedula = document.querySelector('#cedula').value;
        let nombre = document.querySelector('#nombres').value;
        let apellido = document.querySelector('#apellidos').value;
        let correo = document.querySelector('#correo').value;
        let fechaN = document.querySelector('#fecha').value;
        let parentezco = document.querySelector('#parentezco').value;

        let nombresM = document.querySelector('#nombresM').value;
        let apellidosM = document.querySelector('#apellidosM').value;

        // crearTutor(cedula, nombre, apellido, correo, fechaN, parentezco);

        // crearMenor(nombresM, apellidosM);

        if(fechaN <= '2005-01-01'){

            let btn = document.querySelector('.btns');

            btn.addEventListener('onclick', mostrar(crearTutor(cedula, nombre, apellido, correo, fechaN, parentezco), crearMenor(nombresM, apellidosM)));

        }else{

            alert('El tutor debe ser mayor de edad para continuar!');

        }

        

    })
        
        
    function crearTutor(cedula, nombre, apellido, correo, fechaN, parentezco){
        
        tutor = {cedula, nombre, apellido, correo, fechaN, parentezco};

        // return tutor;
    }

    function crearMenor(nombresM, apellidosM){
        
        menor = {nombresM, apellidosM};

    }

    function mostrar(){
        
        // crearTutor(cedula, nombre, apellido, correo, fechaN, parentezco);
        // crearMenor(nombresM, apellidosM); 

        console.log('Datos del Tutor:');
        console.table(tutor);
        console.log('Datos del Menor:');
        console.table(menor);

    }

    // mostrar();

});





