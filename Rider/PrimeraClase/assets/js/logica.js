
let meses, anos, trimestre, resultado, competencia;
let retornardatos = [];
let mes = ["", "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
// datosFormulario();

function datosFormulario(event){

    event.preventDefault();  //Evitar recargar la página al enviar el formulario

    meses = document.getElementById("meses").value;
    anos = document.getElementById("anos").value;
    trimestre = document.getElementById("trimestre").value;
    resultado = document.querySelector('input[name=foobar]:checked').value;
    fecha = document.getElementById("fecha").value;
    competencia = document.getElementById("competencia");
    // comp = document.getElementById("comp");


    // let divisiones = fecha.split("-", 2).join("-", 2);
    let divisiones = fecha.slice(5,7);
    // divisiones = divisiones.split("-", 1);    

    if(divisiones=="01"){
        divisiones = mes[1];
    }else if(divisiones=="02"){
        divisiones = mes[2];
    }else if(divisiones=="03"){
        divisiones = mes[3];
    }else if(divisiones=="04"){
        divisiones = mes[4];
    }else if(divisiones=="05"){
        divisiones = mes[5];
    }else if(divisiones=="06"){
        divisiones = mes[6];
    }else if(divisiones=="07"){
        divisiones = mes[7];
    }else if(divisiones=="08"){
        divisiones = mes[8];
    }else if(divisiones=="09"){
        divisiones = mes[9];
    }else if(divisiones=="10"){
        divisiones = mes[10];
    }else if(divisiones=="11"){
        divisiones = mes[11];
    }else if(divisiones=="12"){
        divisiones = mes[12];
    }
    //competencia = {Diseño}
    retornardatos = [meses, anos, trimestre, resultado, divisiones];

    // let datosObj = {retornardatos};

    const datosObj = {
        meses : retornardatos[0], 
        anos : retornardatos[1],
        trimestre : retornardatos[2],
        resultado : retornardatos[3],
        fecha : retornardatos[4],
        // competencia : retornardatos[5]
    };

    mostrar(datosObj);

    competencia.addEventListener('onclick', ()=>{

        let select = document.createElement('select');

    
        

        if(competencia == "Diseño"){
            let option1 = document.createElement("option");
            option1.setAttribute("value", "Resultado D1");
            let option1Texto = document.createTextNode("Resultado D1");
            option1.appendChild(option1Texto);
        
            let option2 = document.createElement("option");
            option2.setAttribute("value", "Resultado D2");
            let option2Texto = document.createTextNode("Resultado D2");
            option2.appendChild(option2Texto);
            // let opt1 = document.getElementById("Resultado");
            // let opt2 = document.getElementById("Result");
            select.appendChild(option1);
            select.appendChild(option2);
        }else if(competencia == "Análisis"){
            let option1 = document.createElement("option");
            option1.setAttribute("value", "Resultado A1");
            let option1Texto = document.createTextNode("Resultado A1");
            option1.appendChild(option1Texto);
        
            let option2 = document.createElement("option");
            option2.setAttribute("value", "Resultado A2");
            let option2Texto = document.createTextNode("Resultado A2");
            option2.appendChild(option2Texto);
            // let opt1 = document.getElementById("Resultado");
            // let opt2 = document.getElementById("Result");
            select.appendChild(option1);
            select.appendChild(option2);
        }

        document.body.appendChild(select);

    });

    function mostrar(retornardatos){

        console.table(retornardatos);

            const contenedor = document.querySelector('.contenedor');
            // contenedor.innerHTML = '';
                
            // contenedor.textContent = retornardatos;
                
            const row = document.createElement('div');
            row.id = ('mostrar');
            
            row.innerHTML = 
            `Mes: ${retornardatos.meses}`+ "<br>" + 
            `Año: ${retornardatos.anos}` + "<br>" +
            `Trimestre: ${retornardatos.trimestre}`+ "<br>" +
            `Evaluación: ${retornardatos.resultado}`+ "<br>" +
            `Fecha de Evaluación: ${retornardatos.fecha}`+ "<br>" +
            `Competencia: ${retornardatos.competencia}`;

            contenedor.appendChild(row);
    
    }

}
    
