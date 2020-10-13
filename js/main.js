var header = document.querySelector('.site-header');
var headerToggler = document.querySelector('.toggle');

header.classList.remove('site-header--nojs');

headerToggler.addEventListener('click', function () {
  header.classList.toggle('site-header--open');
});