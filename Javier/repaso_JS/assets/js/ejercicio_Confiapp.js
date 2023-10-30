const persona = {
    nombre:"Elkin",
    apellidos:"Fabricio",
    correo:"elkinf@gmail.com",
    celular: 3007895112,
    alias: "Elfa",
    identificacion:"1061663936",

    menores1: {
        nombre: "Juan",
        apellidos:"Fabricio",
        correo:"elkinf@gmail.com",
        celular: 3127895333
    }

}

const retornarPersona = ({nombre, apellidos, correo, correoalte="elfabricio@gmail.com", sexo= 'M', menores1}) =>{
    console.log(`Tutor: ${nombre, apellidos}`);
    console.log(`Correo: ${correo}`);
    console.log(`Correo Alternativo: ${correoalte}`);
    console.log(`Sexo: ${sexo}`);

    console.log('Menor: ');

    console.table(menores1);
}

retornarPersona(persona);