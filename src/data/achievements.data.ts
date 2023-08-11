// RESOURCES
import { TCareer, TLanguage } from 'src/types/generic.types';

interface IAchievementData {
    career: TCareer[];
    achievement: { [language in TLanguage]: string; };
}

const bestPractices = 'CI/CD, Code Review, Quality Control';

const achievements: IAchievementData[] = [
        {
            career : ['frontend'],
            achievement : {
                en : `Best IT industry practices believer and follower: ${bestPractices}`,
                ua : `Знаю та постійно застосовую найефективніші практики з області: ${bestPractices}`,
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
                ua : 'Маю загалом 16+ років досвіду роботи в сфері IT та фронтенд розробки зокрема',
            },
        },
        {
            career : ['frontend'],
            achievement : {
                en : 'Constantly gaining new skills and apply them on my side-projects',
                ua : 'Постійно вчусь, набуваю нових навичок та застосовую їх на поточних проектах',
            },
        },
        {
            career : ['frontend'],
            achievement : {
                en : 'A good managerial background that allows me to act independently ' +
                    'in accordance with project goals',
                ua : `Маю серйозний досвід розробки проектів різної складності, що дозволяє мені ефективно 
                виконувати задачі у відповідності з цілями проекту`,
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'I have experience in developing themes from scratch',
                ua : 'Маю досвід розробки тем з нуля',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'Modules development for magento',
                ua : 'Розробка модулів для magento',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'I do a code review',
                ua : 'Роблю код ревью',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'I have mentoring experience',
                ua : 'Маю досвід менторства',
            },
        },
        {
            career : ['magento'],
            achievement : {
                en : 'I attend conferences, meetings, discussions on magento',
                ua : 'Відвідую конференції, зустрічі, обговорення по magento',
            },
        },
    ];

export { achievements };
