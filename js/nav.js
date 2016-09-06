$(function() {
    var toggleClass = $('.toggle-class');
    var navClass = $('.nav-class');

    $(toggleClass).click(function() {
        $(navClass).toggleClass('show');
    });
});
