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
        startYear : 2002,
        endYear : 2006,
        en : {
            title : 'Mykolayiv High School 21',
            specialisation : 'Programmer - engineer. Bachelor diploma.',
        },
        ua : {
            title : 'Миколаївське вище професійне училище №21.',
            specialisation : 'Програміст - інженер. Диплом Бакалавра.',
        },
    },
    {
        startYear : 2006,
        endYear : 2009,
        en : {
            title : 'Black Sea State University named after Petro Mohyla',
            specialisation : 'Intelligent decision-making systems, Faculty of Computer Science, Specialist diploma.',
        },
        ua : {
            title : 'Чорноморський державний університет імені Петра Могили',
            specialisation : 'Інтелектуальні системи прийняття рішень. Факультет компʼютерних ' +
            'наук. Диплом Спеціаліста.',
        },
    },
];
