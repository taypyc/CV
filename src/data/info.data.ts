// RESOURCES
import { TCareer, TLanguage } from 'src/types/generic.types';

export interface IName {
    firstname: string;
    lastname: string;
}

type TNameData = {
    [language in TLanguage]: IName;
};

const name: TNameData = {
    en : {
        firstname : 'Serhii',
        lastname : 'Avdieiev',
    },
    ua : {
        firstname : 'Сергій',
        lastname : 'Авдєєв',
    },
};

export interface IQRCode {
    link: string;
}

type TQRCodeData = { [key in TCareer]: IQRCode };

const qrCode: TQRCodeData = {
    frontend : { link : 'https://github.com/taypyc' },
    magento : { link : 'https://github.com/taypyc' },
};

export { name, qrCode };
