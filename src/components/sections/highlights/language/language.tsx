// MODULES
import React, { useCallback } from 'react';

// COMPONENTS
import { CircleIcon } from 'src/components/pictograms/circle.icon';
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { ILanguageData } from 'src/data/languages.data';

// STYLES
import { style } from 'src/components/sections/highlights/language/language.style';

interface ILanguagesProps {
    language: ILanguageData;
}

export const Language = ({ language }: ILanguagesProps) => {

    const renderProficiency = useCallback((grade: number) => {
            const proficiency = [];

            for (let i = 0; i < 5; i++) {
                proficiency.push(<div key={i} css={style.grade(i < grade)}><CircleIcon/></div>);
            }

            return proficiency;

        }, []);

    return (
        <div css={style.container}>
            <Typography variant="Text">{language.language}</Typography>
            <div>
                {renderProficiency(language.grade)}
            </div>
        </div>
    );
};
