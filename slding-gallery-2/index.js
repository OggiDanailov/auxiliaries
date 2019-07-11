// var i = 0;
// var screen = document.getElementById('img-screen');
// var left = document.getElementsByClassName("left")[0];
// var right = document.getElementsByClassName("right")[0];

// var images = ["images/alpha.png", "images/beta.svg", "images/gama.png", "images/delta.jpg"];
// screen.src = images[i]
// console.log(images.length)


// left.addEventListener("click", changeImageForward);
// right.addEventListener("click", changeImageBackward)

// function changeImageForward(){
// 		i++;
// 			console.log(i)
// 		screen.src = images[i]
// 		if(i >= images.length){
// 			i = 0;
// 			screen.src = images[i]
// 		}	
// }


// function changeImageBackward(){	
// 	if(i == 0){
// 		i = images.length-1
// 		screen.src = images[i]
// 	}
// 	else {
// 		i--;
// 		screen.src = images[i]
// 	}	
		
// }











var prev = document.getElementsByClassName('prev')[0]
var next = document.getElementsByClassName("next")[0]

prev.addEventListener("click", function(){
  console.log('whatever prev')
})

next.addEventListener('click', function(){
  console.log('next whatevereer')
})

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
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
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


      


         



