document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a, #links .social-media a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(sectionObserver, options);

    function sectionObserver(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
