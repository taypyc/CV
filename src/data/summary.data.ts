// RESOURCES
import { TCareer, TLanguage } from 'src/types/generic.types';

type TStatement = { [language in TLanguage]: string };

interface ISummary {
    career: TCareer[];
    statement: TStatement;
}

export const summary: ISummary[] = [
    {
        career : ['frontend', 'magento'],
        statement : {
            en : `Information technology specialist with extensive experience in front-end development.`,
            ua : `Спеціаліст з інформаційних технологій з багатим досвідом фронтенд-розробки.`,
        },
    },
    {
        career : ['frontend', 'magento'],
        statement : {
            en : `My wide professional skills help me solve extremely complex technological issues of development,
            constantly improving my skills on my own and commercial projects. `,
            ua : `Мої широкі професійні навички допомагають мені вирішувати надскладні технологічні питання розробки, 
            постійно вдосконалюючи свої навички на власних та комерційних проектах. `,
        },
    },
    {
        career : ['frontend', 'magento'],
        statement : {
            en : `A specialist with more than sixteen years of diverse experience in the software development domain. My main working stack: JavaScript, Typescript, NextJS, React, Redux, Angular, KnockoutJS, CSS-in-JS and Magento stack.,
              and Quality Assurance.`,
            ua : `Спеціаліст з понад шістнадцятьма роками різноманітного досвіду у сфері розробки програмного забезпечення. Мій основний робочий стек: JavaScript, Typescript, NextJS, React, Redux, Angular, KnockoutJS, CSS-in-JS та Magento-стек,`,
        },
    },
    {
        career : ['frontend', 'magento'],
        statement : {
            en : `When I write the code, I try to optimize it and test the new functionality for myself like so
            to relieve QA engineers of unnecessary routine checks. I have mentoring experience, namely, I worked with a small group of junior front-end developers
            and helped them solve problematic issues related to project setup, explained them main concepts of the
            JavaScript programming language. In total, more than 50 projects from scratch of varying complexity have been implemented, as well as 20 projects with support. `,
            ua : `Коли я пишу код, то намагаюсь його оптимізувати і тестую за собою новий функціонал так,
            щоб позбавити QA інженерів зайвих рутинних перевірок. Маю досвід наставництва, а саме працював у невеликій групі молодих фронтенд-розробників
            та допомагав їм вирішити проблемні питання з налаштування проекту, пояснював концепції роботи тієї чи іншої
            конструкції в мові програмування JavaScript. Всього реалізовано більше 50 проектів з нуля різної складності, а також 20 проектів з підтримкою. `,
        },
    },
    {
        career : ['frontend', 'magento'],
        statement : {
            en : 'I have a lot of experience working with SCRAM methodology with teams of various complexity, from 4 people in a team to 20. I have an IC Agile certificate. ',
            ua : 'Маю величезний досвід роботи по методології СКРАМ з командами різної складності, від 4 людей у команді до 20. Маю сертифікат IC Agile. ',
        },
    },
    {
        career : ['frontend', 'magento'],
        statement : {
            en : 'I am an experienced, highly motivated professional with a persistent habit of self-improvement and a thirst for learning modern technologies. ',
            ua : 'Я - досвічений, високомотивований професіонал зі стійкою звичкою до самовдосконалення та спрагою до вивчення сучасних технологій. ',
        },
    },
];
