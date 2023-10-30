const nav = document.querySelector('.texto');

nav.addEventListener('click', ()=>{ alert('Diste click.');
    console.log('Diste click en el texto.');});

nav.addEventListener('mouseover', ()=>{
    console.log('Pasaste el mause sobre el texto.');});

const btn = document.querySelector('.busqueda');    

btn.addEventListener('input', (evnt) =>{
    console.log(evnt.target.value);
})

const formulario = document.querySelector('.form');

formulario.addEventListener('submit', (evnt) =>{
    evnt.preventDefault();
    console.log(evnt.target.action);
})

window.addEventListener('scroll', ()=>{
    console.log('Estas en el scroll');

    const scrollY = window.scrollY;
    console.log(scrollY);

})

const padre = document.querySelector('.padre');

padre.addEventListener('click', (e)=>{
    if(e.target.classList.contains('padre')){
        console.log('Estas en el Padre');
    }

    if(e.target.classList.contains('hijo')){
        console.log('Estas en el hijo');
    }
})

