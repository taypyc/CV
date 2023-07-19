// RESOURCES
import { TCareer, TLanguage } from 'src/types/generic.types';

interface IAchievementData {
    career: TCareer[];
    achievement: { [language in TLanguage]: string; };
}

const bestPractices = 'CI/CD, Code Review, Quality Control, SOLID, YAGNI, DRY';

const achievements: IAchievementData[] = [
        {
            career : ['frontend'],
            achievement : {
                en : `Best IT industry practices believer and follower: ${bestPractices}`,
                ua : `Знаю та постійно застосовую найефективніші практики з предментої області: ${bestPractices}`,
            },
        },
        {
            career : ['frontend'],
            achievement : {
                en : 'Led DEV team of 5 members, driving task management, code review, and quality control',
                ua : `Керував командою з пʼятьох розробників, контролюючи постановку задач, 
                код ревʼю, та контроль якості`,
            },
        },
        {
            career : ['frontend'],
            achievement : {
                en : 'Strong and  substantial expertise in the Quality Assurance domain',
                ua : 'Маю 5+ років досвіду роботи в сфері забезпечення якості',
            },
        },
        {
            career : ['frontend'],
            achievement : {
                en : 'Constantly gaining new skills and apply them on my side-projects',
                ua : 'Постійно вчуся, набуваю нових навичок та застосовую їх на своїх пет-проектах',
            },
        },
        {
            career : ['frontend'],
            achievement : {
                en : 'A good managerial background that allows me to act independently ' +
                    'in accordance with project goals',
                ua : 'Маю серйозний управлінський досвід, що дозволяє мені ефективно виконувати задачі' +
                    ' у відповідності з цілями проекту',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'Developed testing framework from scratch',
                ua : 'Маю досвід розробки тестових рішень з нуля',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'Developed sustainable architecture for long-running tests',
                ua : 'Розробляв архітектуру тестового фреймворку призначеного для роботи з довготриваючими тестами',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'Built QA process at enterprise-level (20+ members, teams of diverse specialization)',
                ua : 'Керував відділом забезпечення якості (20+ спеціалістів, команди різних спеціалізацій)',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'Designed a self-organizing team able to function independently',
                ua : 'Маю досвід створення автономних команд',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'Proficient conferences speaker',
                ua : 'Приймаю участь у тематичних конференціях',
            },
        },
    ];

export { achievements };
