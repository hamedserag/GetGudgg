$("document").ready(function(){
    $(".btn").on("click", function(){
        $('.section2').slideDown(1000);
        $('.wrapper').css({height: '150vh'});
        $(this).fadeOut(200);
    });
    $(window).on('load', function(){
        $('.preloader').addClass('complete');
    });
});