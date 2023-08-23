// MODULES
import React, { useMemo } from 'react';

// COMPONENTS
import { CheckmarkIcon } from 'src/components/pictograms/checkmark.icon';
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { ITnTLocale } from 'src/data/locale.data';
import { SectionHeader } from 'src/components/generics/section-header/section-header';

// STYLE
import { style } from 'src/components/sections/tnt/tnt.style';

export interface ITNT {
    label: string;
    items: string;
}

interface ITNTProps {
    tnts: ITNT[];
    locale: ITnTLocale;
}

export const TNT = ({ tnts, locale }: ITNTProps) => {

    const renderTNT = useMemo(() => (
        tnts.map(tnt => (
                <React.Fragment key={tnt.label}>
                    <div css={style.head}>
                        <CheckmarkIcon/>
                        <Typography variant="Text"><strong>{tnt.label}</strong></Typography>
                    </div>
                    <Typography variant="Text">{tnt.items}</Typography>
                </React.Fragment>
            )
        )), [tnts]);

    return (
        <section>
            <SectionHeader title={locale.title}/>
            {renderTNT}
        </section>
    );
};
