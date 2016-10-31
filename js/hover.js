$(document).ready(function() {

    $(".circle").click(function() {
        // window.location.href = 'ui-ux.html';
        jmp2LocalPage('ui-ux.html');
    });

    $(".triangle").click(function() {
        // window.location.href = 'film-audio.html';
          jmp2LocalPage('film-audio.html');
    });

    $(".square").click(function() {
        // window.location.href = 'art-design.html';
          jmp2LocalPage('art-design.html');
    });
    
//////////////////////////////

    $("#homelink").click(function() {
        // window.location.href = 'art-design.html';
          jmp2LocalPage('index.html');
    });

    $("#contactlink").click(function() {
        // window.location.href = 'art-design.html';
          jmp2LocalPage('contact.html');
    });

    $("#resumelink").click(function() {
        // window.location.href = 'art-design.html';
          jmp2LocalPage('resume.html');
    });


    function jmp2LocalPage(whichPage) {
    	location.href = whichPage;
    }


/////////////////////////
    // $("#twitter")
    // .mouseover(function() {
    //     $(this).attr("src", "img/twitter2.png");
    // })
    // .mouseout(function() {
    //     $(this).attr("src", "img/twitter.png");
    // });
    //
    // $("#github")
    // .mouseover(function() {
    //     $(this).attr("src", "img/github2.png");
    // })
    // .mouseout(function() {
    //     $(this).attr("src", "img/github.png");
    // });
    //
    // $("#vimeo")
    // .mouseover(function() {
    //     $(this).attr("src", "img/vimeo2.png");
    // })
    // .mouseout(function() {
    //     $(this).attr("src", "img/vimeo.png");
    // });
    //
    // $("#linkedin")
    // .mouseover(function() {
    //     $(this).attr("src", "img/linkedin2.png");
    // })
    // .mouseout(function() {
    //     $(this).attr("src", "img/linkedin.png");
    // });

});
