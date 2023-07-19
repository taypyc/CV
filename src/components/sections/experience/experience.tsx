// MODULES
import React, { useMemo } from 'react';

// COMPONENTS
import { Job, IJob } from 'src/components/sections/experience/job/job';

// RESOURCES
import { IExperienceLocale } from 'src/data/locale.data';
import { SectionHeader } from 'src/components/generics/section-header/section-header';

interface IExperienceProps {
    experience: IJob[];
    locale: IExperienceLocale;
}

export const Experience = ({ experience, locale }: IExperienceProps) => {

    const renderJobs = useMemo(() => (
        experience.map(job => <Job job={job} locale={locale} key={job.companyName}/>
        )), [experience, locale]);

    return (
        <section>
            <SectionHeader title={locale.title}/>
            <div>
                {renderJobs}
            </div>
        </section>
    );
};
