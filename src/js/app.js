import { isBrowserSupportWebp } from './modules/support-webp.js';
import { handleAttachFiles } from './modules/step-attaching-images-page.js';
import { Select } from './modules/step-client-page.js';
import { handleInputCodeSms, countDown } from './modules/window-agreement-page.js';
import { toggleModalWindow } from './modules/step-calc-page.js';

isBrowserSupportWebp();
handleAttachFiles();
handleInputCodeSms();
countDown();
toggleModalWindow();

const dataInSelect = [
    {
        id: 0,
        value: 'Мужской'
    },
    {
        id: 1,
        value: 'Женский'
    }
]

const select = new Select('#select', {
    title: 'Пол',
    placeholder: 'Выберите пол',
    data: dataInSelect,
});

