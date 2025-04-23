import "./index.scss"
import IMask from 'imask';

export const initPhoneInputMask = () => {
    const phoneInputs = document.querySelectorAll('input.phone-input');

    phoneInputs.forEach((phoneInput) => {
        const mask = IMask(phoneInput, {
            mask: '(000)-000-00-00',
            lazy: true,
        });

        // phoneInput.addEventListener('input', () => {
        //     let raw = phoneInput.value.replace(/\D/g, '');
        //
        //     if (raw.length > 10) {
        //         raw = raw.slice(-10);
        //         mask.value = raw;
        //     }
        // });
    });
};


