var nav = document.querySelector('nav');



    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 550) {
            nav.classList.add('bg-color', 'shadow', 'texto-blanco');
        }else{
            nav.classList.remove('bg-color', 'shadow', 'texto-blanco');
        }
        });

var a = document.querySelector('a');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset < 550) {
            a.classList.add('texto-negro');
        }else{
            a.classList.remove('texto-negro');
        }
        });

