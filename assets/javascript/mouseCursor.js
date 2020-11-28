// function mouseCursor() {
//   var element = document.querySelector(".flexy-container");
//   var cursor = document.querySelector(".cursor");
//   element.mousemove(function (e) {
//     cursor.show().css({
//       "left": e.clientX,
//       "top": e.clientY
//     });
//   }).mouseout(function () {
//     cursor.hide();
//   });
// }


var cont = document.getElementById('pewpew');
cont.onmousemove = applyCustomPointer;
var customPointer = document.getElementById('customPointer');

function applyCustomPointer (event) {
      customPointer.style.left = event.clientX - (customPointer.offsetWidth / 2) + 'px';
      customPointer.style.top = event.clientY - (customPointer.offsetHeight / 2) + 'px';
    }
