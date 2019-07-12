var readMore = document.getElementsByClassName("read-more")
var readLess = document.getElementsByClassName("read-less")
var invisible = document.getElementsByClassName("invisible")
var invisibleMobile = document.getElementsByClassName("invisible-mobile")

var seeLess = document.getElementsByClassName('arrow-up')[0];
var seeAll = document.getElementsByClassName('arrow-down')[0];


for(let i = 0;i<readMore.length;i++){
	readMore[i].addEventListener("click", function(){
		invisible[i].style.display = 'block';
		invisible[i].style.marginTop = '-10px';

		readMore[i].style.display = 'none'
	})	
}

for(let i = 0;i<readLess.length;i++){
	readLess[i].addEventListener("click", function(){
		invisible[i].style.display = 'none'
		// invisible[i].style.marginTop = '0'
		readMore[i].style.display = 'block'
	})

}


if(seeAll){
  seeAll.addEventListener('click', function(){
  for(let i = 0;i<invisibleMobile.length;i++){		
  		invisibleMobile[i].classList.add("mobile-hidden-visible");
  	}  
  seeAll.style.display = 'none';
  seeLess.style.display = 'block';
  })  
}

if(seeLess){
  seeLess.addEventListener("click", function(){
  	for(let i = 0;i<invisibleMobile.length;i++){		
  		invisibleMobile[i].classList.remove("mobile-hidden-visible")
  	}
  
  seeAll.style.display = 'block'
  seeLess.style.display = 'none';
  });  
}



