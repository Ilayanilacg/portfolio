// Fade-in sections on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
      sec.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
  });
});
