const modalButtons = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');
const overlay = modal.querySelector('.overlay');
modalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
})

modalCloseBtn.addEventListener('click', () => {
    closeModal();
});

overlay.addEventListener('click', () => {
    closeModal();
});

const closeModal = () => {
    modal.classList.add('hidden');
};