$(document).ready(function(){
    $(".ham_menu").click(function(){
        $(".side_menu").animate({
            right: 0,
        });
    });

    $(".ham_menu_close").click(function(){
        $(".side_menu").animate({
            right: -100 + "%",
        });
    });
});//end