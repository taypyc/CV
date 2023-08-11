// RESOURCES
import { TCareer, TLanguage } from 'src/types/generic.types';

type TLocalisedText = { [language in TLanguage]: string; };

export interface IExperienceBasis {
    companyName: string;
    position: string;
    logo: {
        filename: string;
        width: number;
        height: number;
    };
    period: {
        start: number;
        end?: number;
    }
}

interface IExperienceData extends IExperienceBasis {
    career: TCareer[];
    responsibilities: TLocalisedText[],
    achievements: TLocalisedText[],
}

export const experience: IExperienceData[] = [
    {
        companyName : 'UkrSibBank',
        position : 'Senior Angular Developer',
        career : ['frontend', 'magento'],
        logo : {
            filename : 'ukrsibbank.jpg',
            width : 726,
            height : 204,

        },
        period : {
            start : 2022,
            end : 2023,
        },
        responsibilities : [
            {
                en : `Development of new functionality of the the application, estimation time of
                development/improvement of new functionality, discussion of tasks, testing, debugging.`,
                ua : `Розробка нового функціоналу додатку, оцінювання часу розробки/доробки нового
                функціоналу, обговорення задач, тестування, налагодження`,
            },
            {
                en : 'Technical analysis of the complexity of tasks, grooming sessions, working with the Agile team',
                ua : 'Технічний аналіз складності виконання задач, грумінг сесії, робота з командою по Agile',
            },
            {
                en : 'Work with complex functional, technical, architectural requirements',
                ua : 'Робота зі складними функціональними, технічними, архітектурними вимогами',
            },
            {
                en : `Support the development of other team members through participation in code reviews, 
                pair activities and mentoring`,
                ua : `Підтримка розвитку інших членів команди через участь у код-ревʼю,
                парних активностях та менторингу`,
            },
            {
                en : 'Writing and updating the technical documentation of the project',
                ua : 'Написання та актуалізація технічної документації проекту',
            },
            {
                en : 'Mentoring and coaching junior team members',
                ua : 'Менторинг та наставництво молодших членів команди',
            },
        ],
        achievements : [
            {
                en : 'Implemented many new functionalities for better user experience',
                ua : 'Реалізував багато нових функціональних можливостей для кращого досвіду кінцевого користувача',
            },
            {
                en : 'Managed the migration of the product to the Angular framework',
                ua : 'Керував міграцією продукту на Angular фреймворк',
            },
            {
                en : 'Familiarized with and understood the Camunda management system - a platform for automation' +
                'the work process and decision-making.',
                ua : 'Ознайомився та розібрався з системою управління Камунда - платформою для автоматизації ' +
                ' робочого процесу та прийняття рішень.',
            },
        ],
    },
    {
        companyName : 'Luxinten',
        position : 'Senior Front-End Developer',
        career : ['frontend', 'magento'],
        logo : {
            filename : 'luxinten.png',
            width : 180,
            height : 80,

        },
        period : {
            start : 2021,
            end : 2022,
        },
        responsibilities : [
            {
                en : '',
                ua : 'Розробка фіч, аналіз продукту, тестування, дебаггінг',
            },
            {
                en : '',
                ua : 'Технічний аналіз макетів та прототипів, створення на їх основі архітектурних специфікацій',
            },
            {
                en : '',
                ua : `Робота зі складними функціональними, технічними, архітектурними вимогами та їх імплементація 
                у архітектурних специфікаціяї`,
            },
            {
                en : '',
                ua : `Підтримка розвитку інших членів команди через участь у код-ревʼю, парних активностях 
                та менторингу`,
            },
            {
                en : '',
                ua : 'Написання та актуалізація технічної документації проекту',
            },
            {
                en : '',
                ua : 'Менторинг та наставництво молодших членів команди',
            },
        ],
        achievements : [
            {
                en : '',
                ua : 'Реалізував гнучку та еффективну архітектуру локалізації',
            },
            {
                en : '',
                ua : 'Керував міграцією продукта на NextJS фреймворк',
            },
            {
                en : '',
                ua : 'Статистично найпродуктивніший розробник',
            },
        ],
    },
    {
        companyName : 'Yakaboo',
        position : 'Senior Magento Front-End Developer',
        career : ['frontend', 'magento'],
        logo : {
            filename : 'yakaboo.png',
            width : 160,
            height : 50,

        },
        period : {
            start : 2019,
            end : 2020,
        },
        responsibilities : [
            {
                en : '',
                ua : `Приймати участь у розробці продукту на всіх етапах SDLC, виконуючи оцінку,
                проектування та розробку нового функціоналу`,
            },
            {
                en : '',
                ua : `Вносити свій вклад у якість продукту: проводити ревʼю коду,
                документувати новий функціонал та процеси`,
            },
            {
                en : '',
                ua : 'Підлаштування фронтенду для тестування',
            },

        ],
        achievements : [
            {
                en : '',
                ua : 'Імплементував якісно-орієнтовані практики розробки, що призвело до прискорення процесу розробки',
            },
            {
                en : '',
                ua : 'Розробив стабільну та гнучку архітектуру для симуляції шляху користувача в системі',
            },
        ],
    },
    {
        companyName : 'Ciklum',
        position : 'Senior Magento Front-End Developer',
        career : ['frontend', 'magento'],
        logo : {
            filename : 'ciklum.svg',
            width : 160,
            height : 80,

        },
        period : {
            start : 2017,
            end : 2019,
        },
        responsibilities : [
            {
                en : '',
                ua : 'Дослідження та Розробка',
            },
            {
                en : '',
                ua : 'Робота в agile-команді',
            },
            {
                en : '',
                ua : 'Розробка та підтримка CI/CD процесу',
            },
            {
                en : '',
                ua : 'Забезпечення якості продукту: розробка модульних, інтеграційних та е2е тестів',
            },
        ],
        achievements : [
            {
                en : '',
                ua : 'Реалізував з нуля е2е фреймворк для тестів',
            },
        ],
    },
    {
        companyName : 'Lindenvalley',
        position : 'Front-End Developer',
        career : ['frontend', 'magento'],
        logo : {
            filename : 'lv.png',
            width : 180,
            height : 80,

        },
        period : {
            start : 2012,
            end : 2015,
        },
        responsibilities : [
            {
                en : '',
                ua : 'Управління відділком забезпечення якості (20+ спеціалістів), менеджмент команд',
            },
            {
                en : '',
                ua : 'Розробка та постійне удосконалення процесу забезпечення якості',
            },
            {
                en : '',
                ua : 'Управління ресурсами та контроль змін',
            },
        ],
        achievements : [
            {
                en : '',
                ua : `Створив з нуля підрозділ забезпечення якості, що складався з декількох команд різної 
                спеціалізації`,
            },
            {
                en : '',
                ua : 'Знизив до нуля текучість кадрів та підтримував таку динаміку протягом всього періоду взаємодії',
            },
            {
                en : '',
                ua : 'Розробив стабільний та гнучкий процес забезпечення якості',
            },
            {
                en : '',
                ua : 'Розробив всі процеси внутрішньої та зовнішньої взаємодії',
            },
            {
                en : '',
                ua : 'Побудував самоорганізуючийся відділок, здатний функціонувати автономно',
            },
        ],
    },
    {
        companyName : 'GeeksForLess',
        position : 'Front-End Developer',
        career : ['frontend', 'magento'],
        logo : {
            filename : 'geeksforless.svg',
            width : 228,
            height : 150,

        },
        period : {
            start : 2007,
            end : 2011,
        },
        responsibilities : [
            {
                en : '',
                ua : 'Розробка та впровадження функціональних тестів для мобільних та веб застосунків',
            },
            {
                en : '',
                ua : 'Кооперація з продукт овнерами та тех лідами для виявлення та приоретизації ризиків',
            },
            {
                en : '',
                ua : 'Виконання тестових сценаріїв та аналіз результатів',
            },
            {
                en : '',
                ua : `Оцінка тестових завдань, приоритизація робочого навантаження для себе та (за потреби)
                інших учасників команди`,
            },
            {
                en : '',
                ua : 'Участь у скрам-мітингах для представництва команди забезпечення якості',
            },
        ],
        achievements : [],
    },
];
