let mainNav = document.getElementsByClassName('main-nav')[0]
let navBarToggle = document.getElementById('js-navbar-toggle');

let button = document.getElementsByClassName("button")[0]
let invisible = document.getElementsByClassName('invisible')[0];
let sq = document.getElementById('sq');


navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
  mainNav.classList.toggle("bordering")
  console.log(mainNav)

});

button.addEventListener("click", function(){
	invisible.classList.toggle('active')
	invisible.classList.toggle("bordering")
	console.log(invisible)
})