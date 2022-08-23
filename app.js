let hamburgerIcon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
let navList = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburgerIcon.addEventListener('click', () =>{
    navList.classList.toggle('open');
    hamburgerIcon.classList.toggle('active')
});

localtime = now.toString();
utctime = now.toGMTString()