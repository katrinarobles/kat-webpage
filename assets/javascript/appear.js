// document.querySelector(".wrapper").addEventListener("click", function(){
//     document.querySelector(".skills-box").style.display = "block";
// });

function appear(event) {
var skills = document.querySelector(".skills-box");
  if (skills.style.display === "block") {
    skills.style.display = "none";
  } else {
    skills.style.display = "block";
  }
}
// var skills = document.querySelector(".skills-box");


document.querySelector(".wrapper").addEventListener("click", appear);

function wow(event) {
var card = document.querySelector(".project");
  if (card.style.display === "block") {
    card.style.display = "none";
  } else {
    card.style.display = "block";
  }
}
document.querySelector(".main-container-2").addEventListener("click", wow);
