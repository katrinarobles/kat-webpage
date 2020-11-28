// document.querySelector(".wrapper").addEventListener("click", function(){
//     document.querySelector(".skills-box").style.display = "block";
// });

function myFunction() {
  var x = document.querySelector(".skills-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.querySelector(".wrapper").addEventListener("click", myFunction);
