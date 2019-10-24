var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  randClass()
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  document.getElementById("page").innerHTML = slideIndex.toString();
}

document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            plusDivs(-1); //left <- show Prev image
        } else if (e.keyCode == '39') {
            // right -> show next image
            plusDivs(+1);
        }
    };

// fix w1, w5, w6
var rand, water;

function randClass() {
  var w = ["w1","w2","w3","w4","w5","w6","w67","w68","w69","shrine"];
  while(typeof document.getElementsByClassName("water") !== undefined) {
  water = document.getElementsByClassName("water");
  for(var j=0, l=water.length; j<=l; j+=1) {
    rand = w[Math.floor(Math.random()*w.length)];
    water[j].className = rand;
    console.log(water[j]);
  }
  }
}


document.addEventListener("DOMContentLoaded", function(){
  randClass();
});
