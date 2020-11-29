var maus = document.getElementById('pewpew');
maus.onmousemove = applyCustomPointer;

var customPointer = document.getElementById('customPointer');

function applyCustomPointer (event) {
  customPointer.style.left = event.clientX - (customPointer.offsetWidth / 2) + 'px';
  customPointer.style.top = event.clientY - (customPointer.offsetHeight / 2) + 'px';
}

// maus.onscroll = function(){
//     if(maus.scrollHeight - maus.scrollTop == maus.offsetHeight)
//     {
//         alert(1);
//     }
// };
// maus.scrollTop = maus.scrollHeight;
$("#pewpew").scroll(function(){
    if($(this)[0].scrollHeight - $(this).scrollTop() == $(this).outerHeight())
    {
        alert(1);
    }
}).scrollTop($("#pewpew")[0].scrollHeight);​
