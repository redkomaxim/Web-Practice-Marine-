var acc = document.getElementsByClassName("accord__page");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("activer"); 
	});
}