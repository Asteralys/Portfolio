// -------------------- HAMBURGER MENU --------------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// -------------------- SCROLL SPY --------------------
const sections = document.querySelectorAll('main section');
const navItems = document.querySelectorAll('.nav-item');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navItems.forEach(item => item.classList.remove('active'));
  navItems.forEach(item => {
    if (item.getAttribute('href') === '#' + current) item.classList.add('active');
  });
});

// -------------------- FADE-IN SECTIONS --------------------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// -------------------- SKILLS --------------------
const skillCards = document.querySelectorAll('.skill-card');
// On peut ajouter un effet hover si tu veux plus tard
// Ici on n’a plus de barres animées, donc pas besoin de scroll event

// -------------------- PROJECT FILTER --------------------
const filterBtns = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
    });
  });
});

// -------------------- LIGHTBOX --------------------
// Comme tu n’as plus d’images, on désactive cette partie pour l’instant

// -------------------- BUBBLES --------------------
const bubblesContainer = document.createElement('div');
bubblesContainer.id = 'bubbles';
document.body.appendChild(bubblesContainer);

const bubbleCount = 20;
for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 60 + 20;
  bubble.style.width = bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.top = `${Math.random() * 100}%`;
  bubblesContainer.appendChild(bubble);
}

// Effet de déplacement léger au mouvement de la souris
document.addEventListener('mousemove', e => {
  const bubbles = document.querySelectorAll('.bubble');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  bubbles.forEach((bubble, i) => {
    bubble.style.transform = `translate(${x * (i % 5)}px, ${y * (i % 5)}px)`;
  });
});
