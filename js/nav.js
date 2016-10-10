$(function() {
    var toggleClass = $('.toggle-class');
    var navClass = $('.nav-class');

    $(toggleClass).click(function() {
        $(navClass).toggleClass('show');

        var scroll = $("body").css("overflow");
        if (scroll == "hidden") {
            $("body").css("overflow", "visible");
        } else {
            $("body").css("overflow", "hidden");
        }

    });

});
