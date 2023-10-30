let n1, n2, n3, resultado, final, suma;
let alertt = false;
let notas = [];
let p = [];

function datosFormulario(event){
    
    event.preventDefault();  //Evitar recargar la página al enviar el formulario

    n1 = parseFloat(document.querySelector("#n1").value);
    n2 = parseFloat(document.querySelector("#n2").value);
    n3 = parseFloat(document.querySelector("#n3").value);

    while(n1>5.0 || n2>5.0 || n3>5.0){
    
        alert('Ingresa número entre 0.0 y 5.0');
        alertt = true;
        
        window.location.reload(); /// Reiniciar pagina html
        return;
    }
    
   
    miNota(n1, n2, n3);

    if(!alertt){
            
        mostrar(resultado);
       
    }   
    
    
    // notas.push(n1,n2,n3);
    // notas = [n1, n2, n3];

    // mostrar(miNota(n1, n2, n3));
    
    
    // notas[0] = n1;
    // notas[1] = n2;
    // notas[2] = n3;
    // console.log(n1);
    // console.log(n2);
    // console.log(n3);
}

    function miNota(n1, n2, n3){

        // n1 = n1 * 0.3;
        // n2 = n2 * 0.3;
        // n3 = n3 * 0.4;

        notas = [n1, n2, n3];
        resultado = calcular(notas, porcentajes(notas)); 
    
        // console.log(resultado);
    }

    function porcentajes(notas){

        let p1 = 0.3, p2 = 0.4;

        n1 = notas[0] * p1;
        n2 = notas[1] * p1;
        n3 = notas[2] * p2;

        return p = [n1, n2, n3];
    }

    function calcular(notas, p){
        suma = 0;

        console.log(notas);

        for(let i of p){
            // console.log(notas[i])
            suma = suma + i;
            
        }
        final = suma;   
        // console.log(final);
        return final; 
        
    }

    // const calcular = (notas)=>{

    //     for(let i of notas){
    //         // console.log(notas[i])
    //         suma = suma + notas[i];
    //         final = suma/notas.length;
    //     }   
    //     console.log(final);
    //     mostrar(final);
    // }

    function mostrar(resultado){

        // console.log();
        console.log(resultado);
        

            const contenedor = document.querySelector('.contenedor');
            // contenedor.innerHTML = '';
                
            // contenedor.textContent = retornardatos;
                
            const row = document.createElement('div');
            row.id = ('mostrar');
            
            row.innerHTML = 
            `Nota 1: ${p[0]}`+ "<br>" + 
            `Nota 2: ${p[1]}` + "<br>" +
            `Nota 3: ${p[2]}`+ "<br>" +
            `Nota Final: ${resultado}`+ "<br>";

            contenedor.appendChild(row);
          
    
    }


