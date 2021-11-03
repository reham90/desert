$(document).ready(function() {


// start js for navbar //

(function($) { // Begin jQuery36.
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.

    // Clicking away from dropdown will remove the dropdown class
  
    $('.dropdown').click(function(e) {
      $('.drop-mobile').toggle();
      $(".up-arrow").toggle();
      $(".down-arrow").toggle();

      // Close one dropdown when selecting another
    });
    // Toggle open and close nav styles on click
    $('.nav-toggle').click(function() {
$(".re-show").toggle();
$(".re-hide").css("display" ,"block");
$(".cover").toggle();
    });
  $('.re-show').click(function(event) {
 if (document.dir=="rtl") {
     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");
$(".navv").toggle();
  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});
$('.re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");
 $(".cover").toggle();
 $(".re-show").toggle();
});
 $('.cover').on('click', function() {
$(".re-hide").click();
 });
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"

// end  js for navbar //


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start footer accordion  //
if($(window).width()<991){
   var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function myFunction(y) {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
  
    $(this).siblings(".panel").slideToggle(200);

  

});
}
$(".accordion").click(function(){
  $(this).children('i').toggle();
 
});
}
//end footer accordion //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if($(window).width()<991){
    var owl = $('.slider');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }

        }
    })
  }

// start slider carousel //
   var owl = $('.slider');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }

        }
    })
  

// end slider carousel //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product carousel //

    var owl = $('.product');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items:2
            },
            1200: {
                items: 4
            }

        }
    })
  
// end product carousel //



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// brands carousel //
  if($(window).width()<991){
    var owl = $('.brand');
    owl.owlCarousel({
        margin: 38,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1200: {
                items: 5
            }

        }
    })
  }

    var owl = $('.brand');
    owl.owlCarousel({
        margin: 80,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items:2
            },
            1200: {
                items: 5
            }

        }
    })
  
// end brands carousel //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// wow js ///
new WOW().init();
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// search for mobile //
    $(".search-icon").click(function() {
        $(".search-screen").addClass("active");
    });

    // Remove Active Class
    $(".close-icon").click(function() {
        $(".search-screen").removeClass("active");
    });

// end search for mobile // 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

