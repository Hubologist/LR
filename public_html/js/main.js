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
    skrollr.get().refresh();
});

$(document).ready(function() {
    //Force reload at top
    //$(this).scrollTop(0);
    
    //Basic Home animations
    $('.box').addClass('animated fadeInUp');
    $('h1').addClass('animated fadeInLeft');
    $('.splash').addClass('animated fadeInRight');
    
    //Typed sweetness
    $(function() {
      	$("#typed").typed({
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
    

    
    $(window).resize(function() {
  skroll.destroy();
  skroll = skrollr.init({forceHeight: false});
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
    
    $('#skills').waypoint(function() {
        $('.badge').addClass('animated fadeInUp');        
    }, {offset: '20%'});
    
    $('.speech').click(function() {
    $(function() {
        $("#speech").typed({
                strings: [
                    "Hello there!",
                    "My name is Tiago.",
                    "I make things on the Internet.",
                    "I graduated in Business.",
                    "But my heart is with the code.",
                    "I can make your website too.",
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
        $('#projects_title').addClass('animated fadeInUp');
    }, {offset: '100%'});

});

