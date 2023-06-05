export const handleInputCodeSms = () => {

    const checkCode = (input, index) => {
        input.value = input.value.replace(/[^0-9\+]/g, '');

        if (input.value.length === 1 && index !== (inputCode.length - 1)) {
            inputCode[index + 1].focus();
        }
    }

    const focusPrevInput = (event, input, index) => {
        if (event.keyCode == 8 || event.keyCode == 46) {
            if (input.value.length === 0 && index !== 0) {
                inputCode[index - 1].focus();
            }
        }
    }

    const inputCode = document.querySelectorAll('.code-wrapper__input-value');

    if (inputCode) {
        inputCode.forEach(input => input.maxLength = 1);
        inputCode.forEach((input, index) => input.addEventListener('input',() => checkCode(input, index)));
        inputCode.forEach((input, index) => input.addEventListener('keydown',() => focusPrevInput(event, input, index)));
    }
}

export const countDown = () => {
    let count = document.querySelector('.window-agreement__hint-count');

    if (count) {
        count.textContent = 20;
        const countdownInterval = setInterval(() => {
            if (+count.textContent > 0) {
                count.textContent = +count.textContent - 1;
            } else {
                clearInterval(countdownInterval);
            }
        }, 1000)
    } 
}

