/* ==========================================================================
   MAIN JAVASCRIPT - CABINET DE MAÎTRE CAMILLE ALLIEZ
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Scroll Effect
    const header = document.querySelector('.header');
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load in case page is refreshed scrolled

    // 2. Mobile Menu Toggle (Burger)
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    if (burger) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle Burger Animation
            const spans = burger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
                // Mobile Menu Styling Injection for active state
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '80px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'hsl(218, 55%, 12%)';
                navMenu.style.padding = '30px';
                navMenu.style.borderBottom = '1px solid hsl(43, 58%, 48%)';
                navMenu.querySelectorAll('.nav-link').forEach(link => {
                    link.style.color = '#ffffff';
                });
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                navMenu.style.display = '';
            }
        });
    }

    // 3. Contact Form Submission & Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const acceptRgpd = document.getElementById('rgpd');
            if (acceptRgpd && !acceptRgpd.checked) {
                e.preventDefault();
                alert('Veuillez accepter le traitement des données pour envoyer votre message.');
                return;
            }

            // Optional: Loading state for submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Envoi en cours...';
            }
        });
    }

    // 4. Highlight Active Navigation Link based on current page URL
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check if href is part of current URL or if it's the home page
        if (currentUrl.endsWith(href) || (href === 'index.html' && (currentUrl.endsWith('/') || currentUrl.endsWith('index.html')))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
