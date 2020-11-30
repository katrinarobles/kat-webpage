var maus = document.getElementById('pewpew');
maus.onmousemove = applyCustomPointer;

var customPointer = document.getElementById('customPointer');

function applyCustomPointer (event) {
  customPointer.style.left = event.clientX - (customPointer.offsetWidth / 2) + 'px';
  customPointer.style.top = event.clientY - (customPointer.offsetHeight / 2) + 'px';
}


maus.onscroll(applyCustomPointer).onscrollTop();​

