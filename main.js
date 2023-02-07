'use strict';

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('bl_hamburgerLine').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('bl_hamburgerMenu').classList.toggle('active');
  });
  $('#bl_hamburgerMenu > .bl_hamburgerMenu_list a[href]').on('click', function (event) {
    $('#bl_hamburgerLine').trigger('click');
  });
});

window.addEventListener('DOMContentLoaded', function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top; //ここに- 50 などと数値を入れるとヘッダー固定のスクロールが実現できる
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});