// MODULES
import React, { useMemo } from 'react';

// COMPONENTS
import { Typography } from 'src/components/generics/typography/typography';

// STYLES
import { style } from 'src/components/sections/highlights/summary/summary.style';

interface ISummaryProps {
    summary: string[];
}

export const Summary = ({ summary }: ISummaryProps) => {

    const renderSummary = useMemo(() => (
        summary.map(statement => <Typography variant="Text" key={statement}>{statement}</Typography>
        )), [summary]);

    return (
        <div css={style}>
            {renderSummary}
        </div>
    );
};
