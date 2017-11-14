$(document).ready(function() {
    //initial
    $('#experience-content').load('content/experience.php');
    $('#project-content').load('content/project/PHP.php');
    $('#contact').hide();




    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    /* ---------------------------------------------
         typist init
        --------------------------------------------- */
    if (typeof Typist == "function") {
        new Typist(document.querySelector(".typist-text"), {
            letterInterval: 60,
            textInterval: 3000
        });
     }
     
     // Highlight the top nav as scrolling occurs
     $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    


    //Filter
    $(document).ready(function(){
        $("#filter-all").click(function () {
            $('#project-content').load('content/project/random.php', slideContent);     
        });
        $("#filter-node").click(function () {
            $('#project-content').load('content/project/node.php', slideContent);     
        });
        $("#filter-react").click(function () {
            $('#project-content').load('content/project/react.php', slideContent);
        });
        $("#filter-php").click(function () {
            $('#project-content').load('content/project/PHP.php', slideContent);     
        });
        $("#filter-duda").click(function () {
            $('#project-content').load('content/project/duda.php', slideContent);     
        });
        $("#filter-angular").click(function () {
            $('#project-content').load('content/project/angular.php', slideContent);     
        });

        function slideContent() {
            $(this).hide();
            $(this).show().addClass("w3-animate-left") ;
        }

    });



});

// function showContent() {
    
//     $("#contact").slideDown();
//     $(this).hide();
// }

$(function(){
    $('#contact-toggle').click(function() {
        $(this).hide('slow');
        $("#contact").slideDown('slow');
        window.scrollTo(0,document.body.scrollHeight -400);
    });
});

// email jquery ajax
function _(id){ return document.getElementById(id); }

function submitForm(){
    _("mybtn").disabled = true;
    // _("status").innerHTML = 'please wait ...';
    var formdata = new FormData();
    formdata.append( "n", _("n").value );
    formdata.append( "m", _("m").value );
    formdata.append( "e", _("e").value );
    var ajax = new XMLHttpRequest();
    ajax.open( "POST", "content/contact.php" );
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            if(ajax.responseText == "success"){
                $("#my_form")[0].reset();
                _("my_form").innerHTML += '<div class="contact-success">SENT!</div>';
                _("mybtn").disabled = false;
                // _("status").innerHTML = 'Add another';
            } else {
                _("status").innerHTML = ajax.responseText;
                _("mybtn").disabled = false;
            }
        }
    }
    ajax.send( formdata );
}    