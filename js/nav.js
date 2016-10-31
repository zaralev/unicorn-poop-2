$(function() {
    var toggleClass = $('.toggle-class');
    var navClass = $('.nav-class');
    $("body").css("position", "relative"); // new

    $(toggleClass).click(function() {
        $(navClass).toggleClass('show'); // old

        var scroll = $("body").css("overflow");
        var mobile = $("html").css("overflow");

        if (scroll == "hidden") {
            $("body").css("overflow", "visible");
            $("html").css("overflow", "visible");
        } else {
            $("body").css("overflow", "hidden");
            $("html").css("overflow", "hidden");
        }

    });

});


function jmp2LocalPage(whichPage) {
	location.href = whichPage;
}
