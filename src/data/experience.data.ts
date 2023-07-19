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
                en : 'Conducting software analysis, feature development, testing, and debugging',
                ua : 'Розробка фіч, аналіз продукту, тестування, дебаггінг',
            },
            {
                en : 'Perform technical assessment of mockups/wireframes and architectural designs/specifications',
                ua : 'Технічний аналіз макетів та прототипів, створення на їх основі архітектурних специфікацій',
            },
            {
                en : 'Translate complex functional, technical and business requirements into architectural designs',
                ua : 'Робота зі складними функціональними, технічними, архітектурними вимогами' +
                    ' та їх імплементація у архітектурних специфікаціяї',
            },
            {
                en : 'Helping other team members grow as engineers through code review, pairing, and mentoring',
                ua : 'Підтримка розвитку інших членів команди через участь у код-ревʼю, парних активностях' +
                    ' та менторингу',
            },
            {
                en : 'Write and update technical documentation related to developed features',
                ua : 'Написання та актуалізація технічної документації проекту',
            },
            {
                en : 'Sharing experience and mentoring junior colleagues',
                ua : 'Менторинг та наставництво молодших членів команди',
            },
        ],
        achievements : [
            {
                en :
                    'Implemented flexible and solid architecture for multi-language support',
                ua : 'Реалізував гнучку та еффективну архітектуру локалізації',
            },
            {
                en : 'Led product migration to NextJS framework',
                ua : 'Керував міграцією продукта на NextJS фреймворк',
            },
            {
                en : 'Statistically the most productive developer in team',
                ua : 'Статистично найпродуктивніший розробник',
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
                en : 'Conducting software analysis, feature development, testing, and debugging',
                ua : 'Розробка фіч, аналіз продукту, тестування, дебаггінг',
            },
            {
                en : 'Perform technical assessment of mockups/wireframes and architectural designs/specifications',
                ua : 'Технічний аналіз макетів та прототипів, створення на їх основі архітектурних специфікацій',
            },
            {
                en : 'Translate complex functional, technical and business requirements into architectural designs',
                ua : 'Робота зі складними функціональними, технічними, архітектурними вимогами' +
                    ' та їх імплементація у архітектурних специфікаціяї',
            },
            {
                en : 'Helping other team members grow as engineers through code review, pairing, and mentoring',
                ua : 'Підтримка розвитку інших членів команди через участь у код-ревʼю, парних активностях' +
                    ' та менторингу',
            },
            {
                en : 'Write and update technical documentation related to developed features',
                ua : 'Написання та актуалізація технічної документації проекту',
            },
            {
                en : 'Sharing experience and mentoring junior colleagues',
                ua : 'Менторинг та наставництво молодших членів команди',
            },
        ],
        achievements : [
            {
                en :
                    'Implemented flexible and solid architecture for multi-language support',
                ua : 'Реалізував гнучку та еффективну архітектуру локалізації',
            },
            {
                en : 'Led product migration to NextJS framework',
                ua : 'Керував міграцією продукта на NextJS фреймворк',
            },
            {
                en : 'Statistically the most productive developer in team',
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
                en : 'Participate in all SDLC stages including estimating, technical design,' +
                    ' and application implementation',
                ua : 'Приймати участь у розробці продукту на всіх етапах SDLC, ' +
                    'виконуючи оцінку, проектування та розробку нового функціоналу',
            },
            {
                en : 'Contribute to quality control - participate in code review, document ' +
                    'developed solutions, own processes.',
                ua : 'Вносити свій вклад у якість продукту: ' +
                    'проводити ревʼю коду, документувати новий функціонал та процеси',
            },
            {
                en : 'Front End adjustment for testing needs',
                ua : 'Підлаштування фронтенду для тестування',
            },

        ],
        achievements : [
            {
                en : 'Implemented quality-oriented practices, resulted in development speed-up',
                ua : 'Імплементував якісно-орієнтовані практики розробки, що призвело до прискорення процесу розробки',
            },
            {
                en : 'Developed sustainable and stable architecture for user journey simulations',
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
                en : 'Research & Development',
                ua : 'Дослідження та Розробка',
            },
            {
                en : 'Use agile methodologies for communication and flexibility',
                ua : 'Робота в agile-команді',
            },
            {
                en : 'Support and improve integration with CI/CD process',
                ua : 'Розробка та підтримка CI/CD процесу',
            },
            {
                en : 'Contribute to quality assurance: develop unit, integration, and e2e tests',
                ua : 'Забезпечення якості продукту: розробка модульних, інтеграційних та е2е тестів',
            },
        ],
        achievements : [
            {
                en : 'Implemented end-2-end testing solution',
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
                en : 'Leading department of 20+ QA specialists, teams management and development',
                ua : 'Управління відділком забезпечення якості (20+ спеціалістів), менеджмент команд',
            },
            {
                en : 'Developing quality assurance process and testing strategy and its ongoing improvement',
                ua : 'Розробка та постійне удосконалення процесу забезпечення якості',
            },
            {
                en : 'Resources & changes management',
                ua : 'Управління ресурсами та контроль змін',
            },
        ],
        achievements : [
            {
                en : 'Created from the scratch QA department composed of several teams with different specialisations',
                ua : 'Створив з нуля підрозділ забезпечення якості,' +
                    ' що складався з декількох команд різної спеціалізації',
            },
            {
                en : 'Maintained zero personnel loss rate during all cooperation period',
                ua : 'Знизив до нуля текучість кадрів та підтримував таку динаміку протягом всього періоду взаємодії',
            },
            {
                en : 'Developed stable and flexible quality assurance process',
                ua : 'Розробив стабільний та гнучкий процес забезпечення якості',
            },
            {
                en : 'Designed all internal and external operation processes',
                ua : 'Розробив всі процеси внутрішньої та зовнішньої взаємодії',
            },
            {
                en : 'Build strong self-organising team able to function independently',
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
                en : 'Design and implement functional tests both for mobile and web applications',
                ua : 'Розробка та впровадження функціональних тестів для мобільних та веб застосунків',
            },
            {
                en : 'Work with product owners and tech leads to identify and prioritize risks',
                ua : 'Кооперація з продукт овнерами та тех лідами для виявлення та приоретизації ризиків',
            },
            {
                en : 'Execute test scenarios and analyze the results',
                ua : 'Виконання тестових сценаріїв та аналіз результатів',
            },
            {
                en : 'Estimate testing tasks and prioritise workloads for self and other testers if required',
                ua : 'Оцінка тестових завдань, приоритизація робочого навантаження для себе ' +
                    'та (за потреби) інших учасників команди',
            },
            {
                en : 'Take part in all scrum ceremonies to represent the testing function ',
                ua : 'Участь у скрам-мітингах для представництва команди забезпечення якості',
            },
        ],
        achievements : [],
    },
];
