// RESOURCES
import { TCareer, TLanguage } from 'src/types/generic.types';

type TStatement = { [language in TLanguage]: string };

interface ISummary {
    career: TCareer[];
    statement: TStatement;
}

export const summary: ISummary[] = [
    {
        career : ['magento'],
        statement : {
            en : `An IT specialist with diverse experience in Quality Assurance, management,
             and frontend development (React).`,
            ua : `Спеціаліст з інформаційних технологій з багатим досвідом у забезпеченні якості, 
            управлінні та фронтенд-розробці.`,
        },
    },
    {
        career : ['magento'],
        statement : {
            en : `As a QA manager, I have rich experience in building teams from the scratch.
             Being a QA process manager, I've developed a QA organization composed of several teams of 
             different specializations. People were wisely managed, which resulted in outstanding efficiency 
             and zero personnel loss rate during all the period I was leading the organization.`,
            ua : `Як QA менеджер, я маю досвід у побудові команд з нуля.
             У мене є досвід побудови з нуля відділку забезпечення якості з крос-функціональними командами. 
             На цьому проекті мені вдалося реалізувати ефективну схему управління, що призвело до 
             підвищення ефективності та нульової текучості кадрів протягом усього періоду співпраці.`,
        },
    },
    {
        career : ['magento'],
        statement : {
            en : `My organizational skills are empowered with a strong technical profile.
             I have a wide set of skills in test automation and frontend development areas.
              I constantly sharping my front-end development skills on my pet projects.
               The most common stack I use is Typescript, React, Redux, CSS-IN-JS.`,
            ua : `Мої організаційні навички гармонійно підсилються глибоким занням технологій. 
            Я маю широкий набір навичок у сфері автоматизації тестування та фронтенд-розробки. 
            Я постійно вдосконалюю свої навички на власних пет-проектах. 
            Найцчастіше працюю зі стеком Typescript, React, Redux, CSS-IN-JS.`,
        },
    },
    {
        career : ['frontend'],
        statement : {
            en : `An IT specialist that offers over 10 years of diverse experience in the software development domain.
             Key areas of technical experience cover JavaScript/TypeScript, NextJS, React, Redux,
              and Quality Assurance.`,
            ua : `Спеціаліст з понад десятьма роками різноманітного досвіду у сфері розробки програмного забезпечення. 
            Основний робочий стек: Typescript, NextJS, React, Redux та забезпечення якості.`,
        },
    },
    {
        career : ['frontend'],
        statement : {
            en : `I began my IT career as a quality assurance engineer, which definitely imprinted on my coding style. 
            I admire the quality-first approach and regularly use best testing practices during software development. 
            Besides, I have technical writing & translation background helping me write well-structured 
            and precisely documented code.`,
            ua : `Свою карʼєру в ІТ я розпочав як інженер з забезпечення якості, що, звичайно-ж, відобразилося на 
            моєму стилі написання коду. У розробці я ставлю якість на перше місце і постійно застосовую навички 
            зі свого тестерського досвіду. Окрім того, я певний час працював технічним письменником та перекладачем, 
            що дозволяє мені писати гарну документацію.`,
        },
    },
    {
        career : ['frontend'],
        statement : {
            en : `My frontend development career started when I decided to start a pet-project. 
            The initial plan was to build an application covering some caveats in the modern SDLC process, 
            but over time I realized that creation makes me happy. That was the moment I decided to switch my career.`,
            ua : `Моя карʼєра фронтенд-розробника почалася коли я вирішив зробити пет-проект.
            Це була система для вирішення певних проблем у сучасному SDLC. Згодом, працюючи над проектом, 
            я зрозумів, що процес творення приносить мені неабияке задоволення, тож, я вирішив стати розробником.`,
        },
    },
    {
        career : ['frontend', 'magento'],
        statement : {
            en : 'I am an open-minded, passionate professional with strong self-improvement inspiration.',
            ua : 'Я досвічений, високомотивований профессіонал зі стійкою звичкою до самовдосконалення.',
        },
    },
];
