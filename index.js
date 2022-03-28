//Navigation bar

//Whether the navigation bar buttons are displayed at the top of the screen or displays three line menu (hamburger) button instead
function openNav() {
              if (document.getElementById("mySidenav").style.width == "50%"){
                document.getElementById("mySidenav").style.width = "0";
              }
              else {
                document.getElementById("mySidenav").style.width = "50%";
              }
            }

function toggle(x) {
              x.classList.toggle("change");
  }

//Modal in navigation bar on all pages
//[1] W3 Schools, 'How TO - CSS/JS Modal' ().[Example].https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal upon clicking on subscribe
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtnside");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn1.onclick = function() {
  console.log("working");
  modal.style.display = "block";
}
btn2.onclick = function() {
  console.log("working");
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Subscribing alert upon clicking on "Subscribe" in Modal
function subscribe() {
  if (document.getElementById("modal-email").value == "") {
    alert("Please input a valid email address");
  } else {
    alert("Thank you for subscribing! Payment details will be emailed to you.");
  }
}

//Promo code interaction
function totalcost()
{
const radioButtons = document.querySelectorAll('input[name="plan"]');
for (const radioButton of radioButtons) {
              if (radioButton.checked) {
                  selectedSize = radioButton.value;
              }
        }
        total = selectedSize;
        if(document.getElementById("promocode").value == "NEWUSER")
        {
          total = Math.round(selectedSize *0.8  * 100) / 100;
          console.log("working");
        }
        document.getElementById("totalcost").value = total;
}

//URL Locator upon clicking on the images on the Index page
function imageClick(url) {
    window.location = url;
}

//Pop up alert upon pressing on "Sign Up" in footer
function newsletter() {
  if (document.getElementById("footer-email").value == "") {
    alert("Please input a valid email address");
  } else {
    alert("Thank you for subscribing to our newsletter!");
  }
}

//Countdown Timer in Article 1
//[2] W3 Schools, 'How TO - JavaScript Countdown Timer' ().[Example].https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Apr 10, 2022 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//Slideshow in article 1 and article 3
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}
