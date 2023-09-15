// MODULES
import { useMemo } from 'react';

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
                    <p>
                        <a target="_blank" rel="noreferrer" href={item.href}>
                            {item.name}
                        </a>
                    </p>
                    <p>
                        <strong>Description:</strong> {item.description}
                    </p>
                    <p css={stack}><strong>Tech stack:</strong> {item.stack}</p>
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
