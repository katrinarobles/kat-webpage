// document.querySelector(".wrapper").addEventListener("click", function(){
//     document.querySelector(".skills-box").style.display = "block";
// });

function appear(event) {
  let skills = document.querySelector(".skills-box");
    if (skills.style.display === "block") {
      skills.style.display = "none";
    } else {
      skills.style.display = "block";
    }
  };
// var skills = document.querySelector(".skills-box");

document.querySelector(".wrapper").addEventListener("click", appear);

function wow(event) {
var cards = document.querySelectorAll(".project");
  cards.forEach((card) => {
    if (card.style.display === "block") {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  })
}
document.querySelector(".navvs").addEventListener("click", wow);
