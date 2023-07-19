// RESOURCES
import { TLanguage } from 'src/types/generic.types';

type TInfo = {
    [language in TLanguage]: {
        title: string;
        specialisation: string;
    }
};

type TDates = { startYear: number; endYear: number; };

type TEducationFacilityData = TInfo & TDates;

export const education: TEducationFacilityData[] = [
    {
        startYear : 2004,
        endYear : 2008,
        en : {
            title : 'Technological College',
            specialisation : 'computer systems and networks service engineer',
        },
        ua : {
            title : 'Технологічний Коледж',
            specialisation : 'Обслуговування компʼютерних систем та мереж',
        },
    },
    {
        startYear : 2008,
        endYear : 2011,
        en : {
            title : 'Foreign Languages University',
            specialisation : 'philologist-interpreter',
        },
        ua : {
            title : 'Інститут Іноземної Філології',
            specialisation : 'Філологія-Переклад',
        },
    },
    {
        startYear : 2019,
        endYear : 2020,
        en : {
            title : 'DAN.IT',
            specialisation : 'Front-end development',
        },
        ua : {
            title : 'DAN.IT',
            specialisation : 'Front-end development',
        },
    },
];
