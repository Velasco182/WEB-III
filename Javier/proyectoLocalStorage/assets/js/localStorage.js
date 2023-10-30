const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-Tweets');
let Tweets = [];


eventlisteners();

function eventlisteners(){
    formulario.addEventListener('submit', agregartweet);

    document.addEventListener('DOMContentLoaded', ()=>{

        Tweets = JSON.parse(localStorage.getItem('Tweets')) || [];
        console.table(Tweets);
        crearHTML();

    });
}


function agregartweet(e) {
    e.preventDefault();
    

    const tweet = document.querySelector('#tweet').value;
    
    if(tweet === ''){
        
        mostrarError('El mensaje no puede ir vacío');
        return;//Hace que la función se corte y no agregue elementos vacíos al objeto.

    }else{
        console.log("Agregar tweet "+tweet);
        
    }


    //Crear objeto donde se almacenan elementos con un id que es la fecha al momento de la crecación de dicho elemento
    const tweetObj = {
        id: Date.now(),
        tweet
    }

    ///Dupliar elemnto del arreglo, spread operator
    Tweets = [...Tweets, tweetObj];
    console.table(Tweets);
    crearHTML();

    ///Reiniciar formulario
    formulario.reset();
}  

function mostrarError(error){

    const msj = document.createElement('p');
    //innertext
    msj.textContent = error;
    msj.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(msj);

    ///Remover elementos por tiempo.
    setTimeout(()=>{
        msj.remove();
    },3000);

}

function crearHTML(){

    limpiar();

    if(Tweets.length > 0){
        Tweets.forEach((tweet) => {

            const borrar = document.createElement('a');

            borrar.classList = 'borrar-tweet';
            borrar.innerText = 'Eliminar';

            const li = document.createElement('li');

            li.textContent = tweet.tweet;

            listaTweets.appendChild(li);
            li.appendChild(borrar);

            borrar.onclick = () =>{
                borrarTweet(tweet.id);
            }

        });
    }

    agregarStorage();
}

function limpiar(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function agregarStorage(){
    localStorage.setItem('Tweets', JSON.stringify(Tweets));
}

function borrarTweet(id){
    console.log('Eliminando tweet ', id);
    //Borar posicion del arreglo
    Tweets = Tweets.filter(tweet => tweet.id !== id)
    crearHTML();
}
