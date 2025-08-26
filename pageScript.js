// Animation on Load for Team Section
document.addEventListener('DOMContentLoaded', () => {
    const teamItems = document.querySelectorAll('.team-item');
    
    teamItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`; 
        item.classList.add('fadeIn'); 
    });
});
//animation for tesimonial
let currentIndex = 0;
const items = document.querySelectorAll('.testimonial-item');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].classList.remove('active');
    items[currentIndex].style.animation = 'slideOut 0.5s forwards';
    
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
    items[currentIndex].style.animation = 'slideIn 0.5s forwards';
}
setInterval(showNextItem, 4000); 

function validateEmail() {
    const emailInput = document.querySelector('.form-control');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        alert('Thank you for signing up!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}
