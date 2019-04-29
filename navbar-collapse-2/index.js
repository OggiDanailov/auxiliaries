// $(document).ready(function() {
    let slider = $("#lightSlider").lightSlider()
    let mql = window.matchMedia('all and (min-width: 992px)');
    console.log(mql.matches)
    if(mql.matches){
        slider.lightSlider({
            item: 4
        })
    }
    else {
        slider.lightSlider({
        // gallery: true,
        item: 1,
        loop:true,
        slideMargin: 10
        })
    }    


    $(".left-button").click(function(){
      slider.goToNextSlide();
    })
    $(".right-button").click(function(){
      slider.goToPrevSlide();
    })

});