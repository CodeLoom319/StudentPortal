$(document).ready(function() {
    spinner();
    $('#carouselFade').carousel();
});

if (typeof WOW === 'undefined') {
    document.querySelectorAll('.wow').forEach(function(element) {
        element.classList.add('fadeInUp');
    });
} else {
    new WOW().init();
}

const animationDuration = 3000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / frameDuration);
const easeOutQuad = t => t * (2 - t);
const animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);
    const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);
        if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount;
        }
        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};

const countupEls = document.querySelectorAll('.timer');
countupEls.forEach(animateCountUp);

function smoothScroll(event, target) {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function validateEmail() {
    const emailInput = document.querySelector('.form-control');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        alert("Thank you for signing up! We're excited to have you with us. Stay tuned for the latest updates, tips, and opportunities to help you on your journey to success!");
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}
