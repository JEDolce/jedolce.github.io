const btn = document.querySelector('.gift');
const datos = document.querySelector('.datos');
const closeBtn = document.querySelector('.close');
const overlay = document.getElementById('fondo');


btn.addEventListener('click', () => {
    datos.classList.remove('display');
    overlay.classList.add('fondo');
    document.body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click', () => {
    datos.classList.add('display');
    overlay.classList.remove('fondo');
    document.body.style.overflow = 'scroll';
})