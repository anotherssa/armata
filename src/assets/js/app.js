$(function() {
    $mainNavbar = $('.navbar_main');
    $('.btn__toggle-dropdown-menu').click(function() {
        if ($mainNavbar.hasClass('navbar_hidden')) {
            $mainNavbar.removeClass('navbar_hidden');
            $mainNavbar.show('blind');
        } else {
            $mainNavbar.addClass('navbar_hidden');
            $mainNavbar.hide('blind');
        }
    });

    $('.carousel_main').slick({
        dots: true
    });

    $('.helpful-info').slick({});

    $('.we-recommend-section .recommendations').tabs({
        active: 0
    });
});