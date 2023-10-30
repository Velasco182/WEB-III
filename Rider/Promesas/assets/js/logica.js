let contenedor = document.querySelector('.contenedor');
let btns = document.querySelector('.btns');
let game = document.querySelector('.game');

///data, c1 y c2 son un callbacks

const setText = data =>{
    contenedor.textContent = data;
}

const getData = c1 =>{

    let valor = confirm('¿Quieres jugar?');

    // setText('¿Puedo jugar?');
    setTimeout(()=>{
        c1(valor);
    },1000);
}

const showData = c2 =>{
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
        c2({Jugador: 'Que comience el Juego Rubén!'});

    },2000);    

}

btns.addEventListener('click', ()=>{
    getData(valor =>{
        if(valor === true){
            showData(user => {
                setText(user.Jugador);
                // game.textContent = '😒';
                // game.classList.add('movement');
                const movingElement = document.createElement('div');
                movingElement.textContent = '😒';
                movingElement.classList.add('movement');
                game.appendChild(movingElement);
            })
        }else{
            alert('¡No tienes acceso!');
        }
    })
});

