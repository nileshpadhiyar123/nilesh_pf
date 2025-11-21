// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetID);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // adjust for fixed nav height
                behavior: 'smooth'
            });
        }
    });
});
