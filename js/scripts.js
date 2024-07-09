/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 



document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.querySelector('.card-inner').classList.toggle('is-flipped');
    });
  });
  
  document.querySelectorAll('.card').forEach(card => {
    const innerCard = card.querySelector('.card-inner');
    innerCard.addEventListener('click', () => {
      gsap.to(innerCard, { rotationY: innerCard._gsap.rotationY === 180 ? 0 : 180, duration: 0.8, ease: "power2.inOut" });
    });
  });












  function togglePlay() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');

    if (audio.paused) {
        audio.play();
        playButton.classList.add('playing');
    } else {
        audio.pause();
        playButton.classList.remove('playing');
    }
}

// Ensure the icon changes back to play when the audio ends
const audio = document.getElementById('audio');
audio.addEventListener('ended', () => {
    const playButton = document.getElementById('play-button');
    playButton.classList.remove('playing');
});

  


























window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});