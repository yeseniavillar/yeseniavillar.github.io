/*============ Este el codigo del menu===========*/

let navLinks = document.getElementById('navLinks');
let btnMenu = document.getElementById('btnMenu');
let mostrarMenu = document.getElementById('mostrarMenu');

mostrarMenu.addEventListener('click',function(){
    navLinks.classList.toggle('active');
    navLinks.style.transition = 'transform 1s ease-in-out';

    //navLinks.style.right= '-200px';
});

btnMenu.addEventListener('click',function(){
    navLinks.classList.toggle('active');
    //navLinks.style.right= '0';
});

