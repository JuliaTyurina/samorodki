import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { OptionsType } from '@fancyapps/ui/types/Fancybox/options';

const defaultFancyOptions: Partial<OptionsType> = {
    Images: {
        initialSize: 'fit',
    },
    Toolbar: {
        display: {
            left: [],
            middle: ["infobar"],
            right: ["close"],
        },
    },
};


export const initPreviewImage = ( options: Partial<OptionsType> = defaultFancyOptions ) => {
    Fancybox.bind( '[data-fancybox]', options );
};
