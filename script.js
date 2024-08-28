document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
  
    const homeSection = document.getElementById('home');
    window.scrollTo({
        top: homeSection.offsetTop - document.querySelector('nav').offsetHeight,
        behavior: 'smooth'
    });
  
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    const setActiveMenuItem = () => {
        let index = sections.length;
  
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
        navLinks.forEach(link => link.classList.remove('active'));
        if (index >= 0) {
            navLinks[index].classList.add('active');
        }
    };
  
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
  
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
  
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
  
    window.addEventListener('scroll', () => {
        setActiveMenuItem();
  
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.background = 'linear-gradient(135deg, #4a3c77, #6cc1d4)'; // Darker gradient on scroll
            nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        } else {
            nav.style.background = 'linear-gradient(135deg, #6e45e2, #88d3ce)';
            nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navLink = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLink.classList.toggle('show');
        menuToggle.classList.toggle('open');
        event.stopPropagation();
    });
    
  
    setActiveMenuItem();
});
  