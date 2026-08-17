const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');
const navLinks = navigation.querySelectorAll('a');

function setMenu(open) {
  navigation.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

menuButton.addEventListener('click', () => {
  setMenu(!navigation.classList.contains('is-open'));
});

navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => observer.observe(element));

document.getElementById('current-year').textContent = new Date().getFullYear();

const form = document.getElementById('interest-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  formMessage.textContent = `Obrigado! As inspirações serão enviadas para ${email}.`;
  form.reset();
});

const modal = document.getElementById('video-modal');
const modalOpeners = document.querySelectorAll('[data-modal-open]');
const modalClosers = document.querySelectorAll('[data-modal-close]');

modalOpeners.forEach((opener) => {
  opener.addEventListener('click', (event) => {
    event.preventDefault();
    if (typeof modal.showModal === 'function') modal.showModal();
  });
});

modalClosers.forEach((closer) => closer.addEventListener('click', () => modal.close()));
modal.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});
