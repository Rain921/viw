window.addEventListener('DOMContentLoaded', function () {
    'use stric';

    let anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(' ' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };



    //modal

    let more = document.querySelector('.btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = "block";
        this.classList.add('more-splash');
        document.body.style.overflow = "hidden";
    });

    close.addEventListener('click', function () {
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = "";
    });
    overlay.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.style.display == 'block') {
            this.style.display = "none";
            document.body.style.overflow = "";
        }
    });

    // mob
    let navbar = document.querySelector('.navbar-toggle'),
        overlaymob = document.getElementById('navigation');


    navbar.addEventListener('click', function () {
          
        overlaymob.classList.toggle('more-splash');
        document.body.classList.toggle('overflow');

    });

    

});


