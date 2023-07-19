// RESOURCES
import { TCareer, TLanguage } from 'src/types/generic.types';

type TToolSetLabel = { [language in TLanguage]: string };

interface IToolData {
    career: TCareer[];
    items: string;
    label: TToolSetLabel;
}

const tnt: IToolData[] = [
    {
        career : ['frontend', 'magento'],
        label : {
            en : 'Front End',
            ua : 'Фронтенд',
        },
        items : 'NextJS, React, Redux, Redux Toolkit',
    },
    {
        career : ['frontend'],
        label : {
            en : 'Styling',
            ua : 'Стилізація',
        },
        items : 'Tailwind, Styled Components, SASS/LESS, Emotion, Styled JSX, CSS modules',
    },
    {
        career : ['frontend'],
        label : {
            en : 'Component libraries',
            ua : 'Бібліотеки компонентів',
        },
        items : 'Material UI, Tailwind UI, Theme UI, Flowbite',
    },
    {
        career : ['frontend'],
        label : {
            en : 'Infrastructure',
            ua : 'Інфраструктура',
        },
        items : 'AWS, Docker, Jenkins, GitLab CI, Vercel',
    },
    {
        career : ['frontend'],
        label : {
            en : 'Back End',
            ua : 'Бекенд',
        },
        items : 'Express, NestJS, Mongoose, Prisma',
    },
    {
        career : ['magento', 'frontend'],
        label : {
            en : 'Domain knowledge',
            ua : 'Базові технології',
        },
        items : `JS, TS, HTML, CSS, Network protocols, HTTP, REST, Graph QL, SQL, Unix-based systems,
         cloud-based systems, client-server architecture`,
    },
    {
        career : ['magento'],
        label : {
            en : 'Management tools',
            ua : 'Інструменти управління',
        },
        items : 'Jira, Confluence, Test Rail, Spira-Team, Rally',
    },
    {
        career : ['frontend'],
        label : {
            en : 'Packages',
            ua : 'Пакети',
        },
        items : `storybook, redux toolkit, react-modal, reakit, react-hook-form, react-query, react-slick,
         clsx, prop-types, eslint, jest, lodash, yup, you-phone, zod, formik, polished, thunk, fetch, express`,
    },
    {
        career : ['magento'],
        label : {
            en : 'Automation frameworks',
            ua : 'Фреймворки автоматизації',
        },
        items : 'Pact, Jest, Mocha, WDIO, Allure 2, Test Cafe, Nightwatch, Chai, Frisby, Gemini',
    },
];

export { tnt };
