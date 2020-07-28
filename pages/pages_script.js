$( "#header_block" ).load( "./header.html" );
$( "#footer_block" ).load( "./footer.html" );


function topFunction() {   
    $('html, body').animate({scrollTop: 0},500);   
}
function myFunction() {
  document.getElementById("review2").style.display = "block";
  document.getElementById("showBtnBlock").style.display = "none";
}


// Carousel desktop
let slides = document.querySelectorAll('.slide-single');
console.log(slides);
let slider = [];
for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}
console.log(slider);
let step = 0;
let offset = 0;

function draw() {
  let img = document.createElement('img');
  img.src = slider[step];
  img.classList.add('slide-single');

  document.querySelector('#slide').appendChild(img);
  if (step + 1 == slider.length) {
    step = 0;
  }
  else {
    step++;
  }
  offset = 1;
}

function left() {
  document.onclick = null;
  slides2 = document.querySelectorAll('.slide-single');
  let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].classList.add('animate__animated', 'animate__flipInX');
    offset2++;
  }
  setTimeout(function () {

    draw();
    left();
  }, 5000)

}

draw();
left();
////////////////////////////////////////////////////////////////////////////

// Carousel mobile
let slides_m = document.querySelectorAll('.slide-single_m');
console.log(slides_m);
let slider_m = [];
for (let i = 0; i < slides_m.length; i++) {
  slider_m[i] = slides_m[i].src;
  slides_m[i].remove();
}
console.log(slider_m);
let step_m = 0;
let offset_m = 0;

function draw_m() {
  let img_m = document.createElement('img');
  img_m.src = slider_m[step_m];
  img_m.classList.add('slide-single_m');

  document.querySelector('#slide_m').appendChild(img_m);
  if (step_m + 1 == slider_m.length) {
    step_m = 0;
  }
  else {
    step_m++;
  }
  offset_m = 1;
}

function left_m() {
  document.onclick = null;
  slides2_m = document.querySelectorAll('.slide-single_m');
  let offset2_m = 0;
  for (let j = 0; j < slides2_m.length; j++) {
    slides2_m[j].classList.add('animate__animated', 'animate__flipInX');
    offset2_m++;
  }
  setTimeout(function () {

    draw_m();
    left_m();
  }, 5000)

}

draw_m();
left_m();
////////////////////////////////////////////////////////////////////////////