 //  STICKY BAR FUNCTION

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("mobilenav");

var sticky = mobilenav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    mobilenav.classList.add("sticky")
  } else {
    mobilenav.classList.remove("sticky");
  }
}
               

/*

function myFunction() {
  document.getElementById("Dropdown-2").classList.toggle("show");
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("Dropdown-3").classList.toggle("show");
  document.getElementById("Dropdown-4").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn-3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.dropbtn-4')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*

function dropdownMenu() {
  
  let x = document.getElementById("top-nav");

  if(x.className === "Nav-container") {
     x.className += " append"
  }
   else x.className = "Nav-container";
  
  
}

*/

//  LEFT OPEN DROPDOWN FUNCTION

function openNav() {
  document.getElementById("mySidepanel").style.width = "20%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0%";
}


//  MOBILE DROPDOWN FUNCTION

function openSlide() {
  document.getElementById("side-Menu").style.width="50%";

  document.getElementById("main").style.marginLeft="10%";
}

function closeSlide() {
  document.getElementById("side-Menu").style.width="0%";

  document.getElementById("main").style.marginLeft="0%";
}



//  SLIDE SHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
//Automatic slider 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}