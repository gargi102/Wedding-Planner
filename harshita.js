var slideIndex = 1;
carousel(slideIndex);

function plusdivs(n){
    carousel(slideIndex +=n);
}
function carousel(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n>x.length){slideIndex = 1}
  if (n<1) {slideIndex = x.length};
  for (i=0; i< x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}