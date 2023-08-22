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
                ua : `Робота зі складними функціональними, технічними, архітектурними вимогами та їх імплементація 
                у архітектурних специфікаціях`,
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
                ua : 'Працював одночасно на 3 проектах.',
            },
            {
                en : '',
                ua : 'Доробляв існуючі проєкти побажаннями від клієнта.',
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
                ua : `Приймати участь у розробці продукту на всіх етапах, відвідувати всі запланованні зустрічі 
                по проекту, виконувати оцінку, проектування та розробку нового функціоналу`,
            },
            {
                en : '',
                ua : `Вносити свій вклад у якість продукту, тобто проводити ревʼю коду,
                документувати новий функціонал та процеси, тестувати код після завершення задачі`,
            },

        ],
        achievements : [
            {
                en : '',
                ua : `Працював як Frontend Team Lead, робив код рев'ю інших розробників для виявлення погано 
                написанного коду; оновив вже існуючі бібліотеки до останніх версій, оптимізував 
                старий код задля пришвидшення роботи сайту і покращення користувацького досвіду`,
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
                ua : 'Дослідження та Розробка коду',
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
                ua : 'Забезпечення якості продукту: розробка модульних, інтеграційних тестів',
            },
        ],
        achievements : [
            {
                en : '',
                ua : `Працював як Frontend Team Lead, робив код рев'ю інших розробників для виявлення погано 
                написанного коду`,
            },
            {
                en : '',
                ua : `Пройшов навчання по Agile та отримав відповідний сертифікат ICAgile Certified Professional.`,
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
                ua : 'Розробка та постійне удосконалення процесу забезпечення якості коду',
            },
            {
                en : '',
                ua : 'Управління ресурсами та контроль змін',
            },
        ],
        achievements : [
            {
                en : '',
                ua : `Робота з API. Набув досвіду інтеграції зі сторонніми сервісами через API,
                зокрема робота з RESTful та GraphQL API.`
            },
            {
                en : '',
                ua : `Контроль версій: Набув досвіду роботи із системами контролю версій, таких як Git, 
                SVN, Mercurial для спільної роботи над кодом та відстеження змін.`
            },
            {
                en : '',
                ua : `Семантичний HTML. Використання семантичних тегів та атрибутів HTML для покращення доступності та 
                SEO-оптимізації веб-сторінок.`
            },
            {
                en : '',
                ua : `Тестування власного коду. Набув практичних навичок створення та виконання тестів для визначення якості коду 
                і вчасного виявлення помилок.`
            },
            {
                en : '',
                ua : `Веб-аналітика. Навчився розуміти аналітику веб-сайтів за допомогою інструментів,
                накшталт Google Analytics.`
            }
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
                en : `Collaboration with UI/UX designers to discuss the technical feasibility of implementing the necessary
                visual components to the site.`,
                ua : `Співпраця з UI/UX дизайнерами для обговорення технічної можливості впровадження необхідних 
                візуальних компонентів до сайту.`,
            },            
            {
                en : 'Estimation, tasks prioritization',
                ua : `Оцінка, приоритизація задач`,
            },
            {
                en : 'Participation in scrum meetings to represent the front-end development team',
                ua : 'Участь у скрам-мітингах для представництва команди фронтенд розробки',
            },
        ],
        achievements : [
            {
                en : `Development of responsive and adaptive designs. Achievements in the creation of web pages,
                that display properly on different devices, different web browsers and screen resolutions`,
                ua : `Розробка відзивчивого та адантивного дизайну. Досягнення у створенні веб-сторінок, 
                які належним чином відображаються на різних пристроях, різних інтернет-оглядачах та розширеннях 
                екранів.`
            },
            {
                en : `Using HTML/CSS/JavaScript technologies. Knowledge and ability to work with basic
                web development technologies to create functional and attractive interfaces.`,
                ua : `Використання технологій HTML/CSS/JavaScript. Знання та вміння працювати з основними
                технологіями веб-розробки для створення функціональних та привабливих інтерфейсів.`
            },{
                en : `Performance optimization. Namely the ability to reduce web pages load times and
                improve performance by caching, compressing files, using so-called
                SVG-sprites, CSS-sprites, iconic fonts and other methods, taking into account the recommendations
                from Google Page Speed.`,
                ua : `Оптимізація продуктивності. а саме здатність знижувати час завантаження веб-сторінок та
                покращувати продуктивність за допомогою кешування, стиснення файлів, використання так називаємих
                svg-спрайтів, css-спрайтів, іконочних шрифтів та інших методів, враховуючи рекомендації 
                Google Page Speed.`
            }
        ],
    },
];
