let contenedor = document.querySelector('.contenedor');
let btns = document.querySelector('.btns');

///data, c1 y c2 son un callbacks
////implementacion promesas

const setText = data =>{
    contenedor.textContent = data;
}

const getData = () =>{

    

    return new Promise((resuelve, rechaza) =>{
        
        let valor = confirm('¿Quieres jugar?');
        // setText('¿Puedo jugar?');
        setTimeout(()=>{

           resuelve(valor);

        },1000);

    });
    
}

const showData = c2 =>{

    return new Promise((resuelve1, rechaza1) =>{
        
        setText('Esperando autorización');
    
        setTimeout(()=>{
            setText('🤨');
        },300);

        setTimeout(()=>{
            setText('😥');
        },600);
        
        setTimeout(()=>{
            setText('😎');
        },900);

        setTimeout(()=>{
            resuelve1({Jugador: 'Que comience el Juego Rubén! 3:)'});

        },2000);    

    });

}

btns.addEventListener('click', ()=>{


    getData().then(valor =>{

        if(valor === true){
            
            return showData();
        
        }else{

            alert('¡No tienes acceso!');

        }

    }).then(user => {

                setText(user.Jugador);

        });

});

