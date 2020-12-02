var parents = document.querySelectorAll('#container1');
var children = document.querySelectorAll('#container2');

children.forEach(child => { child.style.paddingRight = child.offsetWidth - child.clientWidth + "px"; });
