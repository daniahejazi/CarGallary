
// latest ads button
$(document).ready(function() {
  $(".Honda-btn ").click(function() {
      $(".Honda-sec").show(2000);
      $(".Audi-sec").hide(2000);
      $(".Nissan-sec").hide(2000);
      $(".Toyota-sec").hide(2000);
      $(".Mazda-sec").hide(2000);
    });
});

$(document).ready(function() {
  $(".Audi-btn ").click(function() {
      $(".Audi-sec").show(2000);
      $(".Honda-sec").hide(2000);
      $(".Nissan-sec").hide(2000);
      $(".Toyota-sec").hide(2000);
      $(".Mazda-sec").hide(2000);
    });
});
$(document).ready(function() {
  $(".Nissan-btn ").click(function() {
      $(".Nissan-sec").show(2000);
      $(".Honda-sec").hide(2000);
      $(".Audi-sec").hide(2000);
      $(".Toyota-sec").hide(2000);
      $(".Mazda-sec").hide(2000);
    });
});
$(document).ready(function() {
  $(".Toyota-btn").click(function() {
      $(".Toyota-sec").show(2000);
      $(".Honda-sec").hide(2000);
      $(".Audi-sec").hide(2000);
      $(".Nissan-sec").hide(2000);
      $(".Mazda-sec").hide(2000);
    });
});
$(document).ready(function() {
  $(".Mazda-btn ").click(function() {
      $(".Mazda-sec").show(2000);
      $(".Honda-sec").hide(2000);
      $(".Audi-sec").hide(2000);
      $(".Nissan-sec").hide(2000);
      $(".Toyota-sec").hide(2000);
    });
});

// counter
$(document).ready(function () {
  $(".counter").each(function () {
      var count = $(this);
      var countTo = count.attr('data-count');
      // console.log(countTo);
      $({countNum:count.text()}).animate({
              countNum:countTo,
          },
          {
   
              duration:3000,
              easing:'linear',
              step:function(){
                  count.text(Math.floor(this.countNum));
              },
              complete:function(){
                  count.text(this.countNum);
              }
          });
  });
});
// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// AOS.init();
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





