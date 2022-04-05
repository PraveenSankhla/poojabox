setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      let ran = document.getElementById('discountmarque');
      ran.style.backgroundColor = "#"+randomColor;
    },500);

    document.getElementById("searchtab").addEventListener("click",()=>{
   document.getElementById("searchinput").style.display="block";
  })


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("logindiv");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    document.getElementsByClassName("logindiv").style.margin = "10px 0px";
    document.getElementById("navlogo").src = "https://cdn.shopify.com/s/files/1/2090/3151/files/Daily_Horoscope_100x100.png?v=1637837610";
  } else {
    navbar.classList.remove("sticky");
    document.getElementsByClassName("logindiv").style.margin = "20px 0px";
    document.getElementById("navlogo").src = "https://cdn.shopify.com/s/files/1/2090/3151/t/193/assets/logo-optimized.svg?v=5427892325386485898";
  }
}