let menu = document.querySelector('#men-icon');
let mavbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.ClassList.toggle('bx-x');
    navbar.ClassList.toggle('open')
}
 const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
 });
 sr.reveal('.logo',{delay:200, origin: 'left'} );
 sr.reveal('.navbar',{delay:400, origin: 'top'} );
 sr.reveal('.navbar',{delay:520, origin: 'right'} );

 sr.reveal('.home-text span',{delay:600, origin: 'top'} );
 sr.reveal('.home-text span',{delay:680, origin: 'left'} );
 sr.reveal('.home-text span',{delay:750, origin: 'right'} );
 sr.reveal('.main-btn',{delay:860, origin: 'left'} );


 sr.reveal('.share',{delay:950, origin: 'bottom'} );

 sr.reveal('.home-img',{delay:1000, origin: 'bottom'} );