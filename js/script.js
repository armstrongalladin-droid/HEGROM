// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    navLinksItems.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            alert(`Thank you for contacting us, ${name}! We will get back to you soon at ${email}.`);
            
            // Reset form
            this.reset();
        });
    }

    // Sermon search/filter functionality
    const searchInput = document.querySelector('#sermon-search');
    const sermonCards = document.querySelectorAll('.sermon-card');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            sermonCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Event filter functionality
    const eventFilter = document.querySelector('#event-filter');
    const eventCards = document.querySelectorAll('.event-card');
    
    if (eventFilter) {
        eventFilter.addEventListener('change', function() {
            const filterValue = this.value.toLowerCase();
            
            eventCards.forEach(card => {
                const eventType = card.getAttribute('data-event-type') || 'all';
                
                if (filterValue === 'all' || eventType === filterValue) {
                    card.style.display = 'flex';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.section-title, .sermon-card, .event-card, .mission, .vision').forEach(el => {
        observer.observe(el);
    });

    // Current date for events
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Update copyright year
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        copyrightElement.innerHTML = `&copy; ${currentYear} Heavenly Glory Revelation Ministries. All rights reserved.`;
    }

    // Countdown timer for upcoming events (if any)
    function updateCountdown(elementId, eventDate) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            element.innerHTML = "Event has passed";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Initialize countdowns if elements exist
    const countdownElements = document.querySelectorAll('[data-countdown]');
    countdownElements.forEach(element => {
        const eventDate = new Date(element.getAttribute('data-countdown')).getTime();
        setInterval(() => updateCountdown(element.id, eventDate), 1000);
    });

    // Print functionality for sermons
    const printButtons = document.querySelectorAll('.print-sermon');
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sermonCard = this.closest('.sermon-card');
            const sermonContent = sermonCard.querySelector('.sermon-content').innerHTML;
            
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Sermon Notes</title>
                    <style>
                        body { font-family: 'Source Sans Pro', sans-serif; padding: 20px; }
                        h3 { color: #2c3e50; }
                        p { line-height: 1.6; }
                    </style>
                </head>
                <body>
                    ${sermonContent}
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        });
    });

    // Share functionality
    const shareButtons = document.querySelectorAll('.share-sermon');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sermonCard = this.closest('.sermon-card');
            const title = sermonCard.querySelector('h3').textContent;
            const url = window.location.href;
            
            if (navigator.share) {
                navigator.share({
                    title: title,
                    url: url
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(url).then(() => {
                    alert('Link copied to clipboard!');
                });
            }
        });
    });

    console.log('Heavenly Glory Revelation Ministries website initialized successfully!');
});
