var readMore = document.getElementsByClassName("read-more")
var readLess = document.getElementsByClassName("read-less")
var invisible = document.getElementsByClassName("invisible")


for(let i = 0;i<readMore.length;i++){
	readMore[i].addEventListener("click", function(){
		invisible[i].style.display = 'block'
	})	
}

for(let i = 0;i<readLess.length;i++){
	readLess[i].addEventListener("click", function(){
		invisible[i].style.display = 'none'
		// invisible[i].style.marginTop = '0'
		readMore[i].style.display = 'block'
	})

}



