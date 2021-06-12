var navBtn = document.querySelector('#nav-btn');
var navbar = document.querySelector('#navbar');
var navClose = document.querySelector('#nav-close');

navBtn.addEventListener('click',function(){
  navbar.classList.add("showNav");
});

navClose.addEventListener('click',function(){
  navbar.classList.remove("showNav");
});
