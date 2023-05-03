const spinnerWrapperEl = document.querySelector('.spinner-wrapper');


window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 500);
});


var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 550) {
            nav.classList.add('navbar-scrolled', 'shadow', 'texto-blanco');
        }else{
            nav.classList.remove('navbar-scrolled', 'shadow', 'texto-blanco');
        }
        });



var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
// Botón que activó el modal
var button = event.relatedTarget
// Extraer información de los atributos data-bs-*
var recipient = button.getAttribute('data-bs-whatever')
// Si es necesario, puedes iniciar una solicitud AJAX aquí
// y luego realiza la actualización en una devolución de llamada.
//
// Actualizar el contenido del modal.
var modalTitle = exampleModal.querySelector('.modal-title')
var modalBodyInput = exampleModal.querySelector('.modal-body input')
        
modalTitle.txtContent = 'Nuevo mensaje para ' + recipient
modalBodyInput.value = recipient
})



const carrusel = document.querySelector(".carrusel-items");

let maxScrollleft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 2;
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollleft = carrusel.scrollleft + step;
        if (carrusel.scrollleft === maxScrollleft) {
            step = -1;
        }

    }, 10);
    
}


const stop = () => {};

start();






