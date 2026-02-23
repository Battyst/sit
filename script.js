const btn = document.getElementById('btn-entrar');
const intro = document.getElementById('intro');
const content = document.getElementById('main-content');

btn.addEventListener('click', () => {

    intro.style.opacity = '0';
    intro.style.transform = 'scale(1.1)';

    setTimeout(() => {
        intro.style.display = 'none';
        content.classList.remove('content-hidden');
        content.classList.add('content-visible');
    }, 800);
});