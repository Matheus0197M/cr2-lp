document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.5; 
        const yPos = -(scrollY * parallaxSpeed);
        video.style.transform = `translateY(${yPos}px) scale(1.05)`;
    });
});