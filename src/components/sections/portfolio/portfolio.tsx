// MODULES
import { useMemo } from 'react';

// RESOURCES
import { IPortfolioData } from 'src/data/portfolio.data';
import { IPortfolioLocale } from 'src/data/locale.data';
import { SectionHeader } from 'src/components/generics/section-header/section-header';

// STYLE
import { style, portfolioWrapper, description } from 'src/components/sections/portfolio/portfolio.style';

interface IConferencesProps {
    locale: IPortfolioLocale;
    portfolio: IPortfolioData[];
}

export const Portfolio = ({ locale, portfolio }: IConferencesProps) => {
    const renderPortfolio = useMemo(() => (
        portfolio.map(item => (
            <>
                <div css={style} key={item.href}>
                    <a target="_blank" rel="noreferrer" href={item.href}>
                        {item.name}
                    </a>
                    <p css={description}>{item.description}</p>
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
