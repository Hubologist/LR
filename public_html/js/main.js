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
    
/*
 * Picture always fits div
 */
    
    $('#profile_pic > img').load(function(){
        // maxWidth, maxHeight, maintain aspect ratio
        $(this).tailorfit({
                maxWidth  : this.width,
                maxHeight : this.height,
                ratio     : this.width / this.height
        });
    });
    
/*
 * Waypoints
 */
    
    $('.speech').click(function() {
    $(function() {
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
        $("#play").hide();
    });
    
    $('#projects').waypoint(function() {
    }, {offset: '100%'});

});

