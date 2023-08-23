// RESOURCES
import { TLanguage } from 'src/types/generic.types';

export interface IAchievementsLocale {
    title: string;
}

export interface ICertificationsLocale {
    title: string;
}

export interface IConferencesLocale {
    title: string;
}

export interface IEducationLocale {
    title: string;
    specialization: string;
}

export interface IExperienceLocale {
    title: string;
    achievements: string;
    responsibilities: string;
}

export interface IInfoLocale {
    title: string;
    languages: {
        english: string;
        ukrainian: string;
    };
}

export interface IHighlightsLocale {
    info: IInfoLocale;
    summary: ISummaryLocale;
}

export interface ISummaryLocale {
    title: string;
}

export interface ITeaserLocale {
    accent: string;
    message: string;
}

export interface ITnTLocale {
    title: string;
}

export interface IPortfolioLocale {
    title: string;
}

export interface ILocale {
    achievements: IAchievementsLocale;
    certifications: ICertificationsLocale;
    conferences: IConferencesLocale;
    education: IEducationLocale;
    experience: IExperienceLocale;
    info: IInfoLocale;
    summary: ISummaryLocale;
    teaser: ITeaserLocale;
    tnt: ITnTLocale;
    portfolio: IPortfolioLocale;
}

type TLocaleData = { [language in TLanguage]: ILocale };

export const locale: TLocaleData = {
    en : {
        achievements : { title : 'achievements' },
        certifications : { title : 'certifications' },
        conferences : { title : 'conferences' },
        education : {
            title : 'education',
            specialization : 'Specialization',
        },
        experience : {
            title : 'Experience',
            achievements : 'Achievements',
            responsibilities : 'Responsibilities',
        },
        info : {
            title : 'info',
            languages : {
                english : 'English',
                ukrainian : 'Ukrainian',
            },
        },
        summary : { title : 'summary' },
        portfolio : { title : 'portfolio' },
        teaser : { message : 'would you like to know', accent : 'more' },
        tnt : { title : 'tools & technologies' },
    },
    ua : {
        achievements : { title : 'Досягнення' },
        certifications : { title : 'Сертифікації' },
        conferences : { title : 'Конференції' },
        education : {
            title : 'освіта',
            specialization : '  Спеціалізація',
        },
        experience : {
            title : 'Досвід',
            achievements : 'Досягнення',
            responsibilities : 'Обовʼязки',
        },
        info : {
            title : 'Інфо',
            languages : {
                english : 'Англійська',
                ukrainian : 'Українська',
            },
        },
        summary : { title : 'резюме' },
        portfolio : { title : 'портфоліо' },
        teaser : { message : 'хочете знати', accent : 'більше' },
        tnt : { title : 'інструменти та технології' },
    },
};
