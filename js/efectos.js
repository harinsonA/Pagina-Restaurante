$(document).ready(function () {
    

    //Efecto Menu
    $('.menu a').each(function (index, elemento) {
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        },2000+(index * 500));
    });

    //Efecto Header
    if ( $(window).width() > 900) {
         $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }


   // scroll elementos menu
    var acercaDe= $('#acerca-de').offset().top,
        menu= $('#platillos').offset().top,
        galeria= $('#galeria').offset().top,
        ubicacion= $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 300
        }, 500);
    });
    $('#btn-menu').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu -50
        }, 500);
    });
    $('#btn-galeria').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria -20
        }, 500);
    });
    $('#btn-ubicacion').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion + 30
        }, 500);
    });
    

});