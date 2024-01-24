// MODULES
import { useMemo } from 'react';
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { IPortfolioData } from 'src/data/portfolio.data';
import { IPortfolioLocale } from 'src/data/locale.data';
import { SectionHeader } from 'src/components/generics/section-header/section-header';

// STYLE
import { style, portfolioWrapper, stack } from 'src/components/sections/portfolio/portfolio.style';

interface IConferencesProps {
    locale: IPortfolioLocale;
    portfolio: IPortfolioData[];
}

export const Portfolio = ({ locale, portfolio }: IConferencesProps) => {
    const renderPortfolio = useMemo(() => (
        portfolio.map(item => (
            <>
                <div css={style} key={item.href}>
                    <Typography variant="Text">
                        <a target="_blank" rel="noreferrer" href={item.href}>
                            {item.name}
                        </a>
                    </Typography>
                    {item.description.length > 1 ? (
                        <Typography variant="Text">
                            <strong>Description:</strong> {item.description}
                        </Typography>
                    ) : ''}
                    <Typography variant="Text">
                        <span css={stack}>
                            <strong>Tech stack:</strong> {item.stack}
                        </span>
                    </Typography>
                </div>
            </>)
        )), [portfolio]);

    return (
        <section>
            <SectionHeader title={locale.title} isClickable/>
            <div css={portfolioWrapper}>
                {renderPortfolio}
            </div>
        </section>
    );
};
