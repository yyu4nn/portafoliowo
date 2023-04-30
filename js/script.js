var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 550) {
            nav.classList.add('navbar-scrolled', 'shadow', 'texto-blanco');
        }else{
            nav.classList.remove('navbar-scrolled', 'shadow', 'texto-blanco');
        }
        });





