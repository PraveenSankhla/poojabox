setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      let ran = document.getElementById('discountmarque');
      ran.style.backgroundColor = "#"+randomColor;
    },500);

    document.getElementById("searchtab").addEventListener("click",()=>{
   document.getElementById("searchinput").style.display="block";
  })
