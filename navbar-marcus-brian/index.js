$(document).ready(function() {
    var currentElement;

    // function closePortalLogin(changeFocus) {
    //     $("#MyChartLoginPanel").slideUp("slow");
    //     $('.portal-login').removeClass('open');
    //     $('.portal-login').attr("aria-pressed","false");
    //     if (changeFocus) {
    //         currentElement.focus();
    //     }
    // }

    // function openPortalLogin() {
    //     $('.portal-login').addClass('open');
    //     $('.portal-login').attr("aria-pressed","true");
    //     currentElement = $(":focus");
    //     if ($(window).width() > 767) {
    //         $("#MyChartLoginPanel").slideToggle("slow");
    //         $('html,body').animate({ scrollTop: 0 }, 1000);
    //         $(".login-container .close").focus();
    //     } else {
    //         // Open nav menu if not already open
    //         if (!$("nav.skcc-global-nav .menu").hasClass("open")) {
    //             $("nav.skcc-global-nav .menu").click();
    //         }
    //         $('.portal-login').addClass('open');
    //         $("#MyChartLoginPanel").slideDown(700);
    //         $('.login-text, .main-nav, .portal-login>img').hide();
    //     }
    //     $("#menu").focus();
    // }

    // Close portal login after clicking close or outside main login box
    // $("#MyChartLoginPanel, #MyChartLoginPanel .close").click(function(e) {
    //     closePortalLogin(true);
    //     e.stopPropagation();
    // });
    // $(".skcc-event-register-button").click(function(e) {
    //     closePortalLogin(false);
    //     e.stopPropagation();
    // });

    // Toggle portal login box when nav account icon or 360 icon are clicked
    // $(".portal-login, .icon-360").click(function(e) {
    //     openPortalLogin();
    //     e.stopPropagation();
    // });

    // Ignore clicks on inner content
    // $("#MyChartLoginPanel *, nav.skcc-global-nav .nav-bar").click(function(e) { 
    //     e.stopPropagation(); 
    // });

    // Toggle mobile menu
    // $('nav.skcc-global-nav .menu').click(function(e){
    //     $('nav.skcc-global-nav .menu').toggleClass('open');

    //     if ($('nav.skcc-global-nav .menu').hasClass("open")) {     // Make menu open
    //         if ($(window).width() < 341) {  // For super small windows, make menu the entire width of window
    //             $("nav.skcc-global-nav .nav-bar").show().animate({
    //                 left: "0"
    //             },500);
    //         } else {                        // All other window sizes, make menu 90% of width
    //             $("nav.skcc-global-nav .nav-bar").show().animate({
    //                 left: "10%"
    //             },500);
    //         }
    //         $('nav.skcc-global-nav .menu').attr("aria-pressed","true");
    //     } else {                            // Make menu close
    //         $("#MyChartLoginPanel").hide();
    //         $("nav.skcc-global-nav .nav-bar").animate({
    //             left: "100%"
    //         },500, function(){
    //             $('.portal-login').removeClass('open');
    //             $('.login-text, .main-nav, .portal-login>img').show();
    //             $("nav.skcc-global-nav .nav-bar").hide();
    //         });
    //         $('.portal-login').attr("aria-pressed","false");
    //         $('nav.skcc-global-nav .menu').attr("aria-pressed","false");
    //     }
    //     e.stopPropagation();
    // });

    // Close modal if body is clicked
    // $('body').click(function(e){
    //     if ($('nav.skcc-global-nav .menu').hasClass("open")) {     // Make menu open        
    //         $('nav.skcc-global-nav .menu').toggleClass('open');    // Make menu close
    //         $("nav.skcc-global-nav .nav-bar").animate({
    //             left: "100%"
    //         },500, function(){
    //             $('.portal-login').removeClass('open');
    //             $('.login-text, .main-nav, .portal-login>img').show();
    //             $("#MyChartLoginPanel").hide();
    //             $("nav.skcc-global-nav .nav-bar").hide();
    //         });
    //         $('nav.skcc-global-nav .menu').attr("aria-pressed","false");
    //         $('.portal-login').attr("aria-pressed","false");
    //     }
    //     if($('.portal-login').hasClass('open')) {
    //         $("#MyChartLoginPanel").slideUp("slow");
    //         $('.portal-login').removeClass('open');
    //         $('.portal-login').attr("aria-pressed","false");
    //     }
    //     // Close pillars dropdown
    //     if ($('.logo .jefferson-pillars').hasClass('open')) {
    //         $('.logo .jefferson-pillars').removeClass('open');
    //         $('.logo .pillar-links a').attr("tabindex","-1");  // Prevent links from being tabbed to when dropdown is closed
    //     } 
    // });

    // Fixes bug where top nav wouldn't show on larger desktop after using mobile nav and resizing
    $( window ).resize(function() {
        // Display nav and hide login text no matter what on desktop sizes
        if ($(window).width() > 767) {
            $("nav.skcc-global-nav .nav-bar, .portal-login .login-text, nav.skcc-global-nav .main-nav, .portal-login img").removeAttr("style");
            $('nav.skcc-global-nav .menu').attr("aria-pressed","false");
        }
        // Check if mobile menu is supposed to be open
        else if ($('nav.skcc-global-nav .menu').hasClass("open")) {
            // Check if window width is under 340px (account for padding)
            if ($(window).width() < 326) {
                $("nav.skcc-global-nav .nav-bar").show().css("left","0");
            } 
            else {
                $("nav.skcc-global-nav .nav-bar").show().css("left","10%");
            }
            $('nav.skcc-global-nav .menu').attr("aria-pressed","true");
        } 
        // Check if mobile portal login box is supposed to be open
        else if ($('.portal-login').hasClass("open")) {
            $('nav.skcc-global-nav .menu').addClass("open");
            $(".portal-login").click();
            $('nav.skcc-global-nav .menu').attr("aria-pressed","true");
        }
    });
    $('.jefferson-pillars').show();     // Show pillars arrow only once page loads
    $('.logo .pillar-links a').attr("tabindex","-1");   // Prevent links from being tabbed to when dropdown is closed

    // Dropdown pillar links on hover
    /*$('.jefferson-pillars').mouseenter(function() {
        if ($(window).width() > 767) {
            $('.logo .pillar-links').show();
        }
    });

    // Hide pillar links after slide up animation
    $('.jefferson-pillars').mouseleave(function() {
        if ($(window).width() > 767) {
            setTimeout(function(){$('.logo .pillar-links').hide();}, 500);
        }
    });*/

    // Toggle logo dropdown when is mobile size
    $('.logo-dropdown').click(function(e) {
        e.stopPropagation();
        $('.logo .jefferson-pillars').toggleClass('open');

        // Check if dropdown is open
        if ($('.logo .jefferson-pillars').hasClass('open')) {
            //$('.logo .pillar-links').show();
            $('.logo .pillar-links a').attr("tabindex","0");    // Allow links to be tabbed to when dropdown is open
        }
        else {
            $('.logo .pillar-links a').attr("tabindex","-1");   // Prevent links from being tabbed to when dropdown is closed
            //setTimeout(function(){$('.logo .pillar-links').hide();}, 500);
        }
    });


    /* Accessibility Feature */
    // Click element (i.e. mobile nav open div) if enter is pressed
    /*$(document).keypress(function(e) {
        if (e.which == 13) {
            var focusedEl = $(':focus');
            if (focusedEl.hasClass("portal-login") || focusedEl.hasClass("dropdown-toggle") || focusedEl.hasClass("logo-dropdown")){
                // Do nothing
            }
            else if (focusedEl.hasClass("icon-360") || focusedEl.hasClass("more-arrow")) {
                openPortalLogin();
            }
            else if (focusedEl.hasClass("login-box") || (focusedEl.hasClass("close") && focusedEl.parent().hasClass("login-container")) || focusedEl.hasClass("skcc-event-register-button")) {
                if (focusedEl.hasClass("skcc-event-register-button")) {
                    closePortalLogin(false);
                    focusedEl.click();
                }
                else {
                    closePortalLogin(true);
                }
            }
            else if (focusedEl.hasClass("show-info") && focusedEl.parent().hasClass("leadership-item")){
                // Do nothing
            }
            else if (!focusedEl.is("button")){
                focusedEl.click();
            }
        }
        //console.log($(':focus'));
    });*/
});