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
                en : `Support the existing projects, implementation of code improvements,
                as well as implementation of the client's wishes into the project.`,
                ua : `Розвиток існуючих проєктів, впровадження вдосконалень коду, 
                а також впровадження у проєкт побажань від клієнта.`,
            },
            {
                en : 'Feature development, product analysis, testing, and debugging',
                ua : 'Розробка нового функціоналу, аналіз продукту, тестування, та відлагодження помилок у коді',
            },
            {
                en : `Working with complex functional, technical, architectural requirements and their implementation
                in architectural specifications`,
                ua : `Робота зі складними функціональними, технічними, архітектурними вимогами та їх імплементація 
                у архітектурних специфікаціях`,
            },
            {
                en : `Support the development of other team members through participation in code reviews, paired 
                activities and mentoring`,
                ua : `Підтримка розвитку інших членів команди через участь у код-ревʼю, парних активностях 
                та менторингу`,
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
                en : 'Worked simultaneously on 3 projects.',
                ua : 'Працював одночасно на 3 проектах.',
            },
            {
                en : 'Support existing projects, implemented client`s wishes.',
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
                en : `Participate in product development at all stages, attend all scheduled meetings
                according to the project, perform assessment, design and development of new functionality`,
                ua : `Приймати участь у розробці продукту на всіх етапах, відвідувати всі запланованні зустрічі 
                по проекту, виконувати оцінку, проектування та розробку нового функціоналу`,
            },
            {
                en : `Contribute to product quality, i.e. conduct code reviews,
                document new functionality and processes, test the code after completing the task`,
                ua : `Вносити свій вклад у якість продукту, тобто проводити ревʼю коду,
                документувати новий функціонал та процеси, тестувати код після завершення задачі`,
            },

        ],
        achievements : [
            {
                en : `Worked as Frontend Team Lead, did code reviews of other developers to identify bad ones
                written code; updated already existing libraries to the latest versions, optimized
                old code to speed up the site and improve the user experience`,
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
                en : 'Research and Code Development',
                ua : 'Дослідження та Розробка коду',
            },
            {
                en : 'Work in an agile team',
                ua : 'Робота в agile-команді',
            },
            {
                en : 'Development and support of the CI/CD process',
                ua : 'Розробка та підтримка CI/CD процесу',
            },
            {
                en : 'Product quality assurance: development of modular, integration tests',
                ua : 'Забезпечення якості продукту: розробка модульних, інтеграційних тестів',
            },
        ],
        achievements : [
            {
                en : `Working with APIs. Gained experience in integration with third-party services via API,
                including working with RESTful and GraphQL APIs.`,
                ua : `Робота з API. Набув досвіду інтеграції зі сторонніми сервісами через API,
                зокрема робота з RESTful та GraphQL API.`,
            },
            {
                en : `Worked as Frontend Team Lead, did code reviews of other developers to identify bad 
                written code`,
                ua : `Працював як Frontend Team Lead, робив код рев'ю інших розробників для виявлення погано 
                написанного коду`,
            },
            {
                en : 'Completed Agile training and received the ICAgile Certified Professional certificate.',
                ua : 'Пройшов навчання по Agile та отримав відповідний сертифікат ICAgile Certified Professional.',
            },
        ],
    },
    {
        companyName : 'Liga.net',
        position : 'Senior Full-Stack Developer',
        career : ['frontend', 'magento'],
        logo : {
            filename : 'liga.png',
            width : 384,
            height : 182,

        },
        period : {
            start : 2015,
            end : 2016,
        },
        responsibilities : [
            {
                en : `Maintain existing and development of new functionality of the portal, which consists of 6 
                separate sites.`,
                ua : `Підтримка існуючого та розробка нового функціоналу порталу, який складається з 6 окремих 
                сайтів.`,
            },
            {
                en : 'Participation in daily meetings related to portal improvements.',
                ua : 'Участь у щоденних мітингах, які стосуються поліпшень порталу.',
            },
            {
                en : 'Adaptive and responsive versions development of 6 main sites of the portal liga.net.',
                ua : 'Розробка адаптивної та чуйної версій 6 основних сайтів порталу liga.net.',
            },
            {
                en : 'Ensuring the quality of product functioning.',
                ua : 'Забезпечення якості функціонування продукту.',
            },
        ],
        achievements : [
            {
                en : `I have increased performance indicators for all portal sites to 95 points using such a 
                tool as Page Speed Insights.`,
                ua : `Підвищив показники якості роботи всіх сайтів порталу до 95 пунктів, використовуючи такий 
                інструмент як Page Speed Insights.`,
            },
            {
                en : 'Redesigned 6 portal sites from tabular layout to modern approaches to page layout.',
                ua : 'Переробив 6 сайтів порталу з табличної верстки на сучасні підходи до верстки сторінок.',
            },
            {
                en : `For the first time in my professional career, I have took the job of supporting the
                portal backend part and worked as a Full-Stack developer.`,
                ua : `Вперше в своїй професійній кар'єрі взяв на себе роботу по підтримці серверного боку порталу 
                та працював як Full-Stack розробник.`,
            },
            {
                en : `During my work on the project, I have increased my knowledges level of server technologies,
                such as PHP, MySql, Docker Engine, and also saved the company's resources for hiring an additional 
                backend-developer.`,
                ua : `За час роботи над проектом я підтягнув свій рівень знань серверних технологій, таких як 
                PHP, MySql, Docker Engine, чим зекономив ресурси компанії по найму додаткового спеціаліста.`,
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
                en : 'Development and continuous improvement of the code quality assurance process',
                ua : 'Розробка та постійне удосконалення процесу забезпечення якості коду',
            },
            {
                en : 'Project management and task delivery control',
                ua : 'Управління проектами та контроль виконання задач',
            },
        ],
        achievements : [
            {
                en : `Version Control: Gained experience with version control systems such as Git,
                SVN, Mercurial for code collaboration and change tracking.`,
                ua : `Контроль версій: Набув досвіду роботи із системами контролю версій, таких як Git, 
                SVN, Mercurial для спільної роботи над кодом та відстеження змін.`,
            },
            {
                en : `Semantic HTML. Using semantic HTML tags and attributes to improve accessibility and
                SEO optimization of web pages.`,
                ua : `Семантичний HTML. Використання семантичних тегів та атрибутів HTML для покращення доступності та 
                SEO-оптимізації веб-сторінок.`,
            },
            {
                en : `Testing own code. Acquired practical skills in creating and executing tests to determine code 
                quality and early detection of errors.`,
                ua : `Тестування власного коду. Набув практичних навичок створення та виконання тестів для визначення 
                якості коду і вчасного виявлення помилок.`,
            },
            {
                en : `Web analytics. Learned to understand website analytics using tools,
                such as Google Analytics.`,
                ua : `Веб-аналітика. Навчився розуміти аналітику веб-сайтів за допомогою інструментів,
                накшталт Google Analytics.`,
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
                en : `Collaboration with UI/UX designers to discuss the technical feasibility of implementing the 
                necessary visual components to the site.`,
                ua : `Співпраця з UI/UX дизайнерами для обговорення технічної можливості впровадження необхідних 
                візуальних компонентів до сайту.`,
            },
            {
                en : 'Estimation, tasks prioritization',
                ua : 'Оцінка, приоритизація задач',
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
                екранів.`,
            },
            {
                en : `Using HTML/CSS/JavaScript technologies. Knowledge and ability to work with basic
                web development technologies to create functional and attractive interfaces.`,
                ua : `Використання технологій HTML/CSS/JavaScript. Знання та вміння працювати з основними
                технологіями веб-розробки для створення функціональних та привабливих інтерфейсів.`,
            },
            {
                en : `Performance optimization. Namely the ability to reduce web pages load times and
                improve performance by caching, compressing files, using so-called
                SVG-sprites, CSS-sprites, iconic fonts and other methods, taking into account the recommendations
                from Google Page Speed.`,
                ua : `Оптимізація продуктивності. а саме здатність знижувати час завантаження веб-сторінок та
                покращувати продуктивність за допомогою кешування, стиснення файлів, використання так називаємих
                svg-спрайтів, css-спрайтів, іконочних шрифтів та інших методів, враховуючи рекомендації 
                Google Page Speed.`,
            },
        ],
    },
];
