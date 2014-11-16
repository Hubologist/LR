//Page loading mechanism
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('load', false);
});

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".thingy").fadeTo(1,1);
}

$(window).load(function() {
    //Force reload at top
    //$(this).scrollTop(0);
    
    //Basic Home animations
    $('.box').addClass('animated fadeInUp');
    $('h1').addClass('animated fadeInLeft');
    $('.splash').addClass('animated fadeInRight');
    $('.square').addClass('animated fadeInLeft');
    
    //Typed sweetness
    $(function() {
      	$("#intro").typed({
            strings: [
                "Consistent web design, from concept, to paper, to reality.",
                "Content creation, marketing consultancy, web development.",
                "Creativity galore."
            ],
            startDelay: 1100,
            typeSpeed: 50,
            loop: true
      	});
    });
    
   //Bouncy arrow animation loop
    var $arrow = $('#arrow');
    
    setInterval(function() {
            $arrow.toggleClass('animated bounce');
    }, 4400);


/*
 * Smooth transitions inside page
 */
    
    $("a.smooth").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

/* Cool effects */

    $('.thingy').hover(function() {
        $(this).fadeTo(1,1);
    },function() {
        $(this).fadeTo(1,0);
    });

    $(".troll")
        .mouseenter(function() {
            $(this).html("LOL, NOPE!");
        })
        .mouseleave(function() {
            $(this).html("FACEBOOK");
        });
    
/* Typed speech bubble */
    $('#m_bubble').click(function() {
        $(function() {
            $("#m_greet").hide();
            $("#m_result").typed({
                strings: [
                    "Hello there!",
                    "My name is Tiago.",
                    "I make things on the Internet.",
                    "I graduated in Business.",
                    "And I love to write code.",
                    "I can make your Business Plan.",
                    "And I can make your website too.",
                    "Get in touch!"
                ],
                startDelay: 0,
                typeSpeed: 50,
                loop: false
            });
        });    
    });
    
    $('.speech').click(function() {
        $(function() {
            $("#greet").hide();
            $("#result").typed({
                strings: [
                    "Hello there!",
                    "My name is Tiago.",
                    "I make things on the Internet.",
                    "I graduated in Business.",
                    "And I love to write code.",
                    "I can make your Business Plan.",
                    "And I can make your website too.",
                    "Get in touch!"
                ],
                startDelay: 0,
                typeSpeed: 50,
                loop: false
            });
        });    
    });
    
/*
 * Waypoints
 */

    $('#projects').waypoint(function() {
        $('#projects_title').toggleClass("fixed");
    }, {offset: '100%'});

});

