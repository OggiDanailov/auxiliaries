$(document).ready(function(){
	const hamburger = document.getElementsByClassName("hamburger")[0]

	hamburger.addEventListener('click', function(){
		console.log('asdfasdfasdf')
		hamburger.classList.toggle("is-active")
	})
})