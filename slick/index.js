$(document).ready(function(){		
	$('.slider').slick({
	    name: 'whatever',
	    autoplay: false,
	    prevArrow: $(".prev"),
	    nextArrow: $(".next"),
	    dots: false,
	    rows: 1,
	     responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });	
});


		


		   

