export const toggleModalWindow = () => {
    const btnAddGood = document.querySelector('.step-calc__btn-add-wrapper');
    const modal = document.querySelector('.modal-window');

    const btnCloseModal = document.querySelector('.modal-window__btn-close');

    const toggleModal = () => {
        modal.classList.contains('active')
            ? modal.classList.remove('active')
            : modal.classList.add('active');
    }

    if (btnAddGood) {
        btnAddGood.addEventListener('click', toggleModal);
    }

    if (btnCloseModal) {
        btnCloseModal.addEventListener('click', toggleModal);
    }
}