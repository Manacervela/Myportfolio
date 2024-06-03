let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show-menu');

    if (menu.classList.contains('show-menu')) {
        toggle_open.style.display = 'none';
        toggle_close.style.display = 'block';
    } else {
        toggle_open.style.display = 'block';
        toggle_close.style.display = 'none'; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const projectDetailsButton1 = document.getElementById('projectDetailsButton1');
    const projectDetailsButton2 = document.getElementById('projectDetailsButton2');
    const projectDetailsButton3 = document.getElementById('projectDetailsButton3');
    const popupOverlay1 = document.getElementById('popupOverlay1');
    const popupOverlay2 = document.getElementById('popupOverlay2');
    const popupOverlay3 = document.getElementById('popupOverlay3');
    const closePopupButton1 = document.getElementById('closePopup1');
    const closePopupButton2 = document.getElementById('closePopup2');
    const closePopupButton3 = document.getElementById('closePopup3');

    projectDetailsButton1.addEventListener('click', function(event) {
        event.preventDefault();
        popupOverlay1.style.display = 'flex';
    });

    projectDetailsButton2.addEventListener('click', function(event) {
        event.preventDefault();
        popupOverlay2.style.display = 'flex';
    });

    projectDetailsButton3.addEventListener('click', function(event) {
        event.preventDefault();
        popupOverlay3.style.display = 'flex';
    });

    closePopupButton1.addEventListener('click', function() {
        popupOverlay1.style.display = 'none';
    });

    closePopupButton2.addEventListener('click', function() {
        popupOverlay2.style.display = 'none';
    });

    closePopupButton3.addEventListener('click', function() {
        popupOverlay3.style.display = 'none';
    });

    popupOverlay1.addEventListener('click', function(event) {
        if (event.target === popupOverlay1 || event.target === closePopupButton1) {
            popupOverlay1.style.display = 'none';
        }
    });

    popupOverlay2.addEventListener('click', function(event) {
        if (event.target === popupOverlay2 || event.target === closePopupButton2) {
            popupOverlay2.style.display = 'none';
        }
    });

    popupOverlay3.addEventListener('click', function(event) {
        if (event.target === popupOverlay3 || event.target === closePopupButton3) {
            popupOverlay3.style.display = 'none';
        }
    });
});

document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
