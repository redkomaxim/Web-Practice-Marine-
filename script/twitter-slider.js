var next = document.getElementById('right_twit');
var prew = document.getElementById('left_twit');
var slides = document.getElementsByClassName('twit_slide');
for(var i=0; i<slides.length; i++) {
   slides[i].style.zIndex = slides.length - i;
}
next.onclick = function () {
    var activeEl = document.querySelector('.twit_active');
    if(activeEl.nextElementSibling) {
       activeEl.style.left = "-100%";
       activeEl.classList.remove('twit_active');
       activeEl.nextElementSibling.classList.add('twit_active');
       this.classList.remove('twit_no_active');
    }
}
prew.onclick = function () {
    var activeEl = document.querySelector('.twit_active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.left = "0%";
       activeEl.classList.remove('twit_active');
       activeEl.previousElementSibling.classList.add('twit_active');
       this.classList.remove('twit_no_active');
    }
} 