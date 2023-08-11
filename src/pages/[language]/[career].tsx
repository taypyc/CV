// MODULES
import { ParsedUrlQuery } from 'querystring';
import { useRef } from 'react';
import type {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
    NextPage,
} from 'next';

// COMPONENTS
import { Achievements } from 'src/components/sections/achievements/achievements';
import { Certifications } from 'src/components/sections/certifications/certifications';

/* import { Conferences } from 'src/components/sections/conferences/conferences'; */
import { Experience } from 'src/components/sections/experience/experience';
import { Highlights } from 'src/components/sections/highlights/highlights';
import { Teaser } from 'src/components/sections/teaser/teaser';
import { Title } from 'src/components/sections/title/title';
import { Tools } from 'src/components/generics/tools/tools';
import { Portfolio } from 'src/components/sections/portfolio/portfolio';
import { Education, IEducationFacility } from 'src/components/sections/education/education';
import { ITNT, TNT } from 'src/components/sections/tnt/tnt';

// RESOURCES
import { ICertificationsData } from 'src/data/certifications.data';
import { IConferencesData } from 'src/data/conferences.data';
import { IContactData } from 'src/data/contacts.data';
import { IJob } from 'src/components/sections/experience/job/job';
import { ILanguageData } from 'src/data/languages.data';
import { ILocale } from 'src/data/locale.data';
import { IName, IQRCode } from 'src/data/info.data';
import { TCareer, TLanguage } from 'src/types/generic.types';
import { IPortfolioData } from 'src/data/portfolio.data';
import {
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
    getPortfolio,
    getQRCode,
    getSummary,
    getTNT,
} from 'src/controllers/data.controller';

// STYLES
import { style } from 'src/styles/pages/cv.style';

interface ICVProps {
    achievements: string[];
    certifications: ICertificationsData[];
    /*conferences: IConferencesData[];*/
    contacts: IContactData[];
    education: IEducationFacility[];
    experience: IJob[];
    goals: string[];
    languages: ILanguageData[];
    locale: ILocale;
    name: IName;
    tnt: ITNT[];
    portfolio: IPortfolioData[];
    qrCode: IQRCode;
    summary: string[];
}

const CV: NextPage<ICVProps> = ({
                                    achievements,
                                    certifications,

                                    /* conferences, */
                                    contacts,
                                    education,
                                    experience,
                                    goals,
                                    languages,
                                    locale,
                                    portfolio,
                                    name,
                                    tnt,
                                    qrCode,
                                    summary,
                                }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const cvRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Tools printRef={cvRef}/>
            <div css={style.container} ref={cvRef}>
                <div css={style.cover}>
                    <Title goals={goals} name={name} qrCode={qrCode}/>
                    <Highlights
                        contacts={contacts}
                        languages={languages}
                        locale={{ info : locale.info, summary : locale.summary }}
                        summary={summary}/>
                    <Achievements locale={locale.achievements} achievements={achievements}/>
                    <Portfolio locale={locale.portfolio} portfolio={portfolio}/>                    
                    {/* <Conferences locale={locale.conferences} conferences={conferences}/>*/}
                    <TNT locale={locale.tnt} tnts={tnt}/>
                    <Teaser {...locale.teaser}/>
                </div>
                <Education locale={locale.education} education={education}/>
                <Certifications locale={locale.certifications} certifications={certifications}/>
                <Experience locale={locale.experience} experience={experience}/>
            </div>
        </>
    );
};

export interface IParams extends ParsedUrlQuery {
    career: TCareer;
    language: TLanguage;
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
    return {
        paths : [
            { params : { career : 'frontend', language : 'en' } },
            { params : { career : 'frontend', language : 'ua' } },
            { params : { career : 'magento', language : 'en' } },
            { params : { career : 'magento', language : 'ua' } },
        ],
        fallback : false,
    };
};

export const getStaticProps: GetStaticProps<ICVProps, IParams> = async ({ params }) => {
    const { career, language } = params as IParams;

    return {
        props : {
            achievements : getAchievements(career, language),
            certifications : getCertifications(),
            conferences : getConferences(),
            contacts : getContacts(),
            education : getEducation(language),
            experience : getExperience(career, language),
            goals : getGoals(career),
            languages : getLanguages(),
            locale : getLocale(language),
            name : getName(language),
            tnt : getTNT(career, language),
            portfolio : getPortfolio(),
            qrCode : getQRCode(career),
            summary : getSummary(career, language),
        },
    };
};

export default CV;
