// Add smooth scrolling with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Adjust scroll position to account for fixed navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active menu item based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 10;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id') || (section.tagName === 'HEADER' ? 'top' : '');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');
        if (href === '#' + current || (href === '#' && current === 'top')) {
            link.classList.add('active');
        }
    });
});

// Update budget range value display
document.getElementById('budgetRange').addEventListener('input', function() {
    document.getElementById('budgetValue').textContent =
        parseInt(this.value).toLocaleString();
});

// Form input animation
document.querySelectorAll('.custom-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});