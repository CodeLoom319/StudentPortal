const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", function (e) {
    if (!n.classList.contains('dropdown-toggle')) {
        closeMenu();
    }
}));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const themeToggle = document.getElementById('themeToggle');
const toggleIcon = document.getElementById('toggle-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Toggle the icon between sun and moon
    if (isDarkMode) {
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdown = this.parentElement;
    dropdown.classList.toggle('active');
});