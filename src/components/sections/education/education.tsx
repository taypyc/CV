// MODULES
import React, { useMemo } from 'react';

// COMPONENTS
import { IEducationLocale } from 'src/data/locale.data';
import { SectionHeader } from '../../generics/section-header/section-header';
import { Typography } from 'src/components/generics/typography/typography';

// STYLES
import { style } from 'src/components/sections/education/education.style';

export interface IEducationFacility {
    title: string;
    specialisation: string;
    startYear: number;
    endYear: number;
}

interface IEducationProps {
    locale: IEducationLocale;
    education: IEducationFacility[];
}

export const Education = ({ education, locale }: IEducationProps) => {

    const renderEducation = useMemo(() => (
        education.map(facility => (
            <React.Fragment key={facility.title}>
                <Typography variant="Heading 3" css={style.dates}>
                    {`${facility.startYear} - ${facility.endYear}`}
                </Typography>
                <div>
                    <Typography variant="Heading 3">{facility.title}</Typography>
                    <Typography variant="Text">{`${locale.specialization}: ${facility.specialisation}`}</Typography>
                </div>
            </React.Fragment>
        ))
    ), [education, locale.specialization]);

    return (
        <section>
            <SectionHeader title={locale.title}/>
            <div css={style.container}>
                {renderEducation}
            </div>
        </section>
    );
};
