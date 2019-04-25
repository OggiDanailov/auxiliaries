$(document).ready(function(){
	let size = window.matchMedia("all and (min-width: 992px)")

	if(size.matches){
		updateContainer();	
	}
	

});

function updateContainer(){
		console.log('wahtever')
			$('.slider').slick({
	        name: 'whatever',
	         autoplay: false,
	         prevArrow: $(".prev"),
	         nextArrow: $(".next"),
	         dots: false,
	         rows: 1,
	         slidesToShow: 4
	      	});
}





var moveButton = document.querySelector('.move-button');
var items = document.querySelectorAll('.grid-a .grid-item');

moveButton.onclick = function() {
  for ( var i=0; i < items.length; i++ ) {
    items[i].classList.toggle('is-moved');
  }
};
				
	
			


		   

