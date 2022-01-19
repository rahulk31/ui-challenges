const more = document.querySelector('.more-options');
const options = document.querySelector('.options-menu');


more.addEventListener('click', () => {
    options.classList.toggle('hidden');
})