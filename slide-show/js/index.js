
  // this is the default value - image 1
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1
    } 
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slides[slideIndex-1].style.display = "block"; 
    // dots[slideIndex-1].className += " active";
  }

//  let currentWidth = window.matchMedia('all and (min-width: 992px)');
//  console.log(currentWidth.matches) 
// if(currentWidth.matches){
//         let slider = $("#lightSlider").lightSlider()

//         sliderBig.lightSlider({
//             item: 4
//         })
  


//     $(".left-button").click(function(){
//       sliderSmall.goToNextSlide();
//       sliderBig.goToNextSlide();
//     })
//     $(".right-button").click(function(){
//       sliderBig.goToPrevSlide();
//     })

// }
