var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 550) {
            nav.classList.add('bg-color', 'shadow', 'texto-blanco');
        }else{
            nav.classList.remove('bg-color', 'shadow', 'texto-blanco');
        }
        });



