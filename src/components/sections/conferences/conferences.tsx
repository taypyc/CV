// MODULES
import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// RESOURCES
import { IConferencesData } from 'src/data/conferences.data';
import { IConferencesLocale } from 'src/data/locale.data';
import { SectionHeader } from 'src/components/generics/section-header/section-header';

// STYLE
import { style } from 'src/components/sections/conferences/conferences.style';

interface IConferencesProps {
    conferences: IConferencesData[];
    locale: IConferencesLocale;
}

export const Conferences = ({ conferences, locale }: IConferencesProps) => {

    const renderConferences = useMemo(() => (
        conferences.map(event => (
                <Link href={event.media} key={event.title}>
                    <a target="_blank">
                        <Image
                            src={`/static/img/conferences/${event.logo.src}`}
                            height={75}
                            width={event.logo.width}
                            alt={`${event.title} logo`}
                        />
                    </a>
                </Link>
            )
        )), [conferences]);

    return (
        <section>
            <SectionHeader title={locale.title} isClickable/>
            <div css={style}>
                {renderConferences}
            </div>
        </section>
    );
};
