  /*Modal*/
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
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

/*Subscribing alert*/
function subscribe() {
  if (document.getElementById("modal-email").value == "") {
    alert("Please input a valid email address");
  } else {
    alert("Thank you for subscribing! Payment details will be emailed to you.");
  }
}

/*Promo code interaction*/
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

/*URL Locator*/
function imageClick(url) {
    window.location = url;
}

/*Pop up alert*/
function newsletter() {
  if (document.getElementById("footer-email").value == "") {
    alert("Please input a valid email address");
  } else {
    alert("Thank you for subscribing to our newsletter!");
  }
}

/*Countdown Timer*/
  // Set the date we're counting down to
  var countDownDate = new Date("Mar 28, 2022 01:00:00").getTime();
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
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "IT'S RACE TIME!";
  }
}, 1000);

//Slideshow
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
