// MODULES
import React, { useMemo } from 'react';

// COMPONENTS
import { CheckmarkIcon } from 'src/components/pictograms/checkmark.icon';
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { ICertificationsData } from 'src/data/certifications.data';
import { ITnTLocale } from 'src/data/locale.data';
import { SectionHeader } from 'src/components/generics/section-header/section-header';

// STYLE
import { style } from 'src/components/sections/certifications/certifications.style';

export interface ITNT {
    label: string;
    items: string;
}

interface ITNTProps {
    certifications: ICertificationsData[];
    locale: ITnTLocale;
}

export const Certifications = ({ certifications, locale }: ITNTProps) => {

    const renderCertifications = useMemo(() => (
        certifications.map(({ title, certificate, href }) => (
                <a
                    href={(href) ? href : `/static/img/certificates/${certificate}/`}
                    target="_blank"
                    key={title}
                    css={style.item} rel="noreferrer">
                    <CheckmarkIcon/>
                    <Typography variant="Text">{title}</Typography>
                </a>
            )
        )), [certifications]);

    return (
        <section>
            <SectionHeader title={locale.title} isClickable/>
            <div css={style.container}>
                {renderCertifications}
            </div>
        </section>
    );
};
