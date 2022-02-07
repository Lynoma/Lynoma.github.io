$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });
});




//user id : 3d35ed55-e407-4c0e-98bf-d7f7d7aaaf40
//access token : A77IFD7s0IQNZraJR-0v2OSAbRrIP-8PxnbZ7m2bwK7FcDHy1KwEe4wUwPxguCoWKA_eLyxf2kltM6qQRs1xnrUkxomDpMUnJRf6Tt7tbN17Az71wnRMGOzEVJHA4_MjR2dGj4hPrxnquTe0U0G0Ik5DTnx8Oj8z-ePFkxmfR9Qkk3OL1DgTgFJ1bQrtC5OnE40Yrq_eKVLhHkgiMUvZ1f76oReACNyLE2ou35lgkOb111Tzac16_xM0CLzjrw:feedlydev