// MODULES
import React, { useMemo } from 'react';

// COMPONENTS
import { CheckmarkIcon } from 'src/components/pictograms/checkmark.icon';
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { IAchievementsLocale } from 'src/data/locale.data';
import { SectionHeader } from 'src/components/generics/section-header/section-header';

// STYLE
import { style } from 'src/components/sections/achievements/actievements.style';

interface IAchievementsProps {
    achievements: string[];
    locale: IAchievementsLocale;
}

export const Achievements = ({ achievements, locale }: IAchievementsProps) => {

    const renderAchievements = useMemo(() => (
        achievements.map(achievement => (
                <React.Fragment key={achievement}>
                    <CheckmarkIcon/>
                    <Typography variant="Text">{achievement}</Typography>
                </React.Fragment>
            )
        )), [achievements]);

    return (
        <section>
            <SectionHeader title={locale.title}/>
            <div css={style}>
                {renderAchievements}
            </div>
        </section>
    );
};
