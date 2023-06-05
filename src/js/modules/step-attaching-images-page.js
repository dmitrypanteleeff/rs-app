export const handleAttachFiles = () => {

    const attachedInput = document.querySelectorAll('.attach__input-file')
    const btnDeleteAttach = document.querySelectorAll('.attach__btn-delete-wrapper');

    const removeAttachedClass = (item) => {
        const card = item.target.closest('.attach__card-wrapper');
        const input = card.querySelector('.attach__input-file');
        const elemNotAttached = card.querySelector('.attach__file-not-attached');
        const elemAttached = card.querySelector('.attach__file-attached');
        input.value = "";
        elemAttached.classList.remove('active');
        elemNotAttached.classList.add('active');
    }

    const addAttachedClass = (item) => {
        const elemNotAttached = item.nextElementSibling.querySelector('.attach__file-not-attached');
        const elemAttached = item.nextElementSibling.querySelector('.attach__file-attached');
        elemNotAttached.classList.remove('active');
        elemAttached.classList.add('active');
    }

    if (attachedInput) {
        attachedInput.forEach(item => {
            item.addEventListener('change', function() {
                if( this.value ){
                    addAttachedClass(item);
                }
            });
        })
    }

    if (btnDeleteAttach) {
        btnDeleteAttach.forEach(item => item.addEventListener('click', removeAttachedClass));
    }
}