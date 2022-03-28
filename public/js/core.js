$(function () {

    $('.navbar-ham').on('click',function () {
       $('.menu-container').fadeToggle(150);
       $('.menu-body').removeClass("menu-cerrado").toggleClass("menu-abierto");
       $('body').css('overflow','hidden');
    });

    $('.menu-close-img').on('click',function () {
        $('.menu-container').fadeToggle(150);
        $('.menu-body').removeClass("menu-abierto").toggleClass("menu-cerrado");
        $('body').css('overflow','auto');
    });

    $('#servicios').on('click',function () {
        $('.menu-container').fadeToggle(150);
        $('.menu-body').removeClass("menu-abierto").toggleClass("menu-cerrado");
        $('body').css('overflow','auto');
    });

    $('#portafolio').on('click',function () {
        $('.menu-container').fadeToggle(150);
        $('.menu-body').removeClass("menu-abierto").toggleClass("menu-cerrado");
        $('body').css('overflow','auto');
    });

    $('#contacto').on('click',function () {
        $('.menu-container').fadeToggle(150);
        $('.menu-body').removeClass("menu-abierto").toggleClass("menu-cerrado");
        $('body').css('overflow','auto');
    });

});