// Navbar_Menu_Btn
let nav_btn = document.querySelector(".nav-btn");
let sideMenu = document.querySelector(".side-menu");

nav_btn.onclick = function () {
     nav_btn.classList.toggle("active")
     sideMenu.classList.toggle("active")
};
document.onclick = function (e) {
     if (!nav_btn.contains(e.target) && !sideMenu.contains(e.target)) {
          nav_btn.classList.remove("active")
          sideMenu.classList.remove("active")
     }
};

// Nav_Function's
let searchbox_open_icon = document.querySelector(".searchbox-open-icon");
let searchbox_close_icon = document.querySelector(".searchbox-close-icon");
let searchbox_search_icon = document.querySelector(".searchbox-search-icon");
let search_box = document.querySelector(".search-box");
let search_bar = document.querySelector(".search-bar");
let body = document.body;

searchbox_open_icon.addEventListener('click', function () {
     search_bar.classList.add("active")
     search_box.classList.add("active")

     body.style.overflow = "hidden";
});
search_bar.addEventListener('click', function () {
     search_bar.classList.remove("active")
     search_box.classList.remove("active")

     body.style.overflow = "auto";
});
searchbox_close_icon.addEventListener('click', function () {
     search_bar.classList.remove("active")
     search_box.classList.remove("active")

     body.style.overflow = "auto";
});
searchbox_search_icon.addEventListener('click', function () {
     search_bar.classList.remove("active")
     search_box.classList.remove("active")

     body.style.overflow = "auto";
});

// Press "Enter" for search
let forSearch = document.getElementById("forSearch")
let searchBtn = document.getElementById("searchBtn")
let inputs = document.querySelectorAll("input")

var input = document.getElementById("forSearch");
input.addEventListener("keypress", function (event) {
     if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("searchBtn").click();
          inputs.forEach(input => input.value = '');
     }
});

//Offer-Layer
$('.offerLayer-r').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     adaptiveHeight: true
});