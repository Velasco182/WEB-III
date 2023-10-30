///Autenticación de inicio de sesión y roles
///Formulario con correo como user, y 
/// contraseña de mínimo 8 caracteres,
/// Validar correo, mostrar alert
/// si la contraseña no tiene 8 digitos mostrar 
/// admin@correo.com pw:   Poner el fondo de un color
/// usuario cualquiera también cambia color del fondo

document.addEventListener('DOMContentLoaded', function (){
    // let contenedor = document.querySelector('.contenedor');
    let formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        let user = document.querySelector('#email').value;
        // let user = getValue('#email');
        let pw = document.querySelector('#password').value;

        let btn = document.querySelector('.btns');

        btn.addEventListener('onclick', inicio(user, pw));


    })

    function inicio(user, pw){
        switch(user){
            case 'admin@correo.com':
                if (pw=='admin123'){
                    document.body.style.backgroundColor='blue';
                }else{
                    console.log('Bad');
                }

                break;
            default:
                if(pw==pw){
                    document.body.style.backgroundColor='red';
                }else{
                    console.log('Bad');
                }
                break;    
        }
    }

});