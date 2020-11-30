(function bubbleHover () {

      const link = document.querySelectorAll('.navvs > .hover-this');
      const cursor = document.querySelector('.cursor');

      const animateit = function (e) {
            const pStain = this.querySelector('.p-stain');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

            pStain.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') pStain.style.transform = '';
      };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);

})();
