document.getElementById('btn-scroll')
.addEventListener('click', () => {
    document.getElementById('galeria')
    .scrollIntoView({ behavior: 'smooth' });
});