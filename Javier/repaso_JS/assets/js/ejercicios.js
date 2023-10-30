function obtenerUsuarioActivo(uid, nombre){
    return{
        uid: uid,
        userName: nombre
    }
}

const getActiveUser = (uid, nombre)=>({
    uid: uid,
    userName: nombre
});

// const usuario = (nombre) => 
// ({
//     user : 'DFBZ0630',
//     name : nombre
// });

// console.table(usuario('DIEGUINI'));
console.table(obtenerUsuarioActivo('ABC678','Rubén'));
console.table(getActiveUser('DEF345','Darío'));
