// MODULES
import React, { useMemo } from 'react';
import Image from 'next/image';

// COMPONENTS
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { IExperienceLocale } from 'src/data/locale.data';
import { IExperienceBasis } from 'src/data/experience.data';

// STYLE
import { style } from 'src/components/sections/experience/job/job.style';


export interface IJob extends IExperienceBasis {
    responsibilities: string[],
    achievements?: string[],
}

interface IJobProps {
    job: IJob;
    locale: IExperienceLocale;
}

export const Job = ({ job, locale }: IJobProps) => {

    const renderResponsibilities = useMemo(() => (
        job
            .responsibilities
            .map(responsibility => (
                <li key={responsibility}>
                    <Typography variant="Text">
                        {responsibility}
                    </Typography>
                </li>
            ))
    ), [job.responsibilities]);

    const renderAchievements = useMemo(() => {
        if (!job.achievements!.length) return null;

        return (
            <div css={style.achievements}>
                <Typography variant="Text">{`${locale.achievements}:`}</Typography>
                <ul>
                    {job
                        .achievements!
                        .map(achievement => (
                            <li key={achievement}>
                                <Typography variant="Text">
                                    {achievement}
                                </Typography>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }, [job.achievements, locale.achievements]);

    return (
        <div css={style.container} key={job.companyName}>
            <Typography variant="Text" css={style.period}>
                {`${job.period.start}${(job.period.end) ? ` - ${job.period.end}` : ''}`}
            </Typography>
            <div css={style.logo}>
                <Image
                    src={`/static/img/experience/${job.logo.filename}`}
                    width={job.logo.width}
                    height={job.logo.height}
                    alt={`${job.companyName} logo`}/>
            </div>
            <Typography variant="Heading 3" css={style.position}>
                {job.position}
            </Typography>
            <div css={style.responsibilities}>
                <Typography variant="Text">{`${locale.responsibilities}:`}</Typography>
                <ul>
                    {renderResponsibilities}
                </ul>
            </div>
            {renderAchievements}
        </div>
    );
};
