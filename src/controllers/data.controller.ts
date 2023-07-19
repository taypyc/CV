// RESOURCES
import { IEducationFacility } from 'src/components/sections/education/education';
import { IJob } from 'src/components/sections/experience/job/job';
import { ITNT } from 'src/components/sections/tnt/tnt';
import { achievements } from 'src/data/achievements.data';
import { certifications } from 'src/data/certifications.data';
import { conferences } from 'src/data/conferences.data';
import { contacts } from 'src/data/contacts.data';
import { education } from 'src/data/education.data';
import { experience } from 'src/data/experience.data';
import { goals } from 'src/data/goals.data';
import { languages } from 'src/data/languages.data';
import { locale } from 'src/data/locale.data';
import { tnt } from 'src/data/tnt.data';
import { summary } from 'src/data/summary.data';
import { portfolio } from 'src/data/portfolio.data';
import { TCareer, TLanguage } from 'src/types/generic.types';
import { name, qrCode } from 'src/data/info.data';

const getAchievements = (career: TCareer, language: TLanguage) => (
    achievements.reduce((acc: string[], currentValue) => {
        if (currentValue.career.includes(career)) return [...acc, currentValue.achievement[language]];

        return acc;
    }, [])
);

const getCertifications = () => certifications;

const getConferences = () => conferences;

const getContacts = () => contacts;

const getEducation = (language: TLanguage) => (
    education.reduce((acc: IEducationFacility[], currentValue) => ([
        ...acc,
        {
            title : currentValue[language].title,
            specialisation : currentValue[language].specialisation,
            startYear : currentValue.startYear,
            endYear : currentValue.endYear,
        },
    ]), [])
);

const getExperience = (career: TCareer, language: TLanguage) => (
    experience.reduce((acc: IJob[], currentValue) => {
        if (currentValue.career.includes(career)) {
            const { companyName, position, period, logo } = currentValue;

            return [
                ...acc,
                {
                    companyName,
                    position,
                    period,
                    logo,
                    responsibilities :
                        currentValue
                            .responsibilities
                            .map(responsibility => responsibility[language]),
                    achievements :
                        currentValue
                            .achievements!
                            .map(achievement => achievement[language]),
                },
            ];
        }

        return acc;
    }, []));

const getGoals = (career: TCareer) => (
    goals.reduce((acc: string[], currentValue) => {
        if (currentValue.career.includes(career)) return [...acc, currentValue.label];

        return acc;
    }, [])
);

const getLanguages = () => languages;

const getLocale = (language: TLanguage) => locale[language];

const getName = (language: TLanguage) => name[language];

const getTNT = (career: TCareer, language: TLanguage) => (
    tnt.reduce((acc: ITNT[], currentValue) => {
        if (currentValue.career.includes(career)) {
            return [
                ...acc,
                {
                    label : currentValue.label[language],
                    items : currentValue.items,
                },
            ];
        }

        return acc;
    }, [])
);
const getPortfolio = () => portfolio;

const getQRCode = (career: TCareer) => qrCode[career];

const getSummary = (career: TCareer, language: TLanguage) => (
    summary.reduce((acc: string[], currentValue) => {
        if (currentValue.career.includes(career)) return [...acc, currentValue.statement[language]];

        return acc;
    }, [])
);

export {
    getAchievements,
    getCertifications,
    getConferences,
    getContacts,
    getEducation,
    getExperience,
    getGoals,
    getLanguages,
    getLocale,
    getName,
    getTNT,
    getPortfolio,
    getQRCode,
    getSummary,
};
