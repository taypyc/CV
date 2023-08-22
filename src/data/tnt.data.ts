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
        career : ['frontend'],
        label : {
            en : 'Front End',
            ua : 'Фронтенд',
        },
        items : 'JavaScript, NextJS, React, Redux, Redux Toolkit, CSS-in-JS, GraphQL, Grunt/Gulp/Webpack, jQuery',
    },
    {
        career : ['frontend'],
        label : {
            en : 'Styling',
            ua : 'Стилізація',
        },
        items : 'Tailwind, Styled Components, SASS/SCSS/LESS, Emotion, Styled JSX, CSS modules, CSS 3',
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
        career : ['frontend', 'magento'],
        label : {
            en : 'Frameworks',
            ua : 'Фреймворки',
        },
        items : 'Bootstrap, Boilerplate',
    },
    {
        career : ['frontend', 'magento'],
        label : {
            en : 'Infrastructure',
            ua : 'Інфраструктура',
        },
        items : 'AWS, Docker/Devilbox, Jenkins, GitLab CI/CD, Vercel, LAMP-stack, Microsoft Azure',
    },
    {
        career : ['frontend'],
        label : {
            en : 'Back End',
            ua : 'Бекенд',
        },
        items : 'PHP, Python, MYSQL, Express, NestJS, Mongoose, Prisma, NodeJS, Camunda',
    },
    {
        career : ['magento', 'frontend'],
        label : {
            en : 'Domain knowledge',
            ua : 'Базові технології',
        },
        items : `JavaScript, TypeScript, HTML5, CSS, SASS/SCSS/LESS, Network protocols, HTTP, REST, Graph QL,
        'SQL, Unix-based systems, cloud-based systems, client-server architecture, Version Control 
        Systems (git/svn/mercurial)`,
    },
    {
        career : ['magento', 'frontend'],
        label : {
            en : 'Tools for design and HTML markup',
            ua : 'Інструменти для роботи з дизайном та версткою',
        },
        items : 'Photoshop, illustrator, Zeplin, inVision, Avocode, Figma, Adobe XD',
    },
    {
        career : ['magento', 'frontend'],
        label : {
            en : 'Management tools',
            ua : 'Інструменти управління',
        },
        items : 'Jira, Confluence, Test Rail, Spira-Team, Rally, Trello, Wrike, Redmine, Basecamp',
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
            en : 'Мадженто-стек',
            ua : 'Magento stack',
        },
        items : 'jQuery, KnockoutJS, RequireJS, XML Layouts, Grunt, composer, NodeJS, Magento CLI, Magento PWA ' +
        'Studio, GraphQL, ElasticSearch, OpenSearch',
    },
    {
        career : ['frontend', 'magento'],
        label : {
            en : 'Utilities for working with icons and fonts',
            ua : 'Утиліти для роботи з іконками та шрифтами',
        },
        items : 'Fontello, FontAwesome',
    },
];

export { tnt };
