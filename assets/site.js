const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
document.querySelectorAll('#menu-principal a').forEach(a =>
  a.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Abrir menu');
  })
);

// header compacto ao rolar
const marcaRolagem = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
marcaRolagem();
window.addEventListener('scroll', marcaRolagem, { passive: true });

// revela as seções ao rolar
const alvos = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entradas => entradas.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  alvos.forEach(el => io.observe(el));
} else {
  alvos.forEach(el => el.classList.add('is-in'));
}
