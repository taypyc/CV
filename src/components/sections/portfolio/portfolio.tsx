// MODULES
import React, { useMemo } from 'react';
import Link from 'next/link';

// RESOURCES
import { IPortfolioData } from 'src/data/portfolio.data';
import { IPortfolioLocale } from 'src/data/locale.data';
import { SectionHeader } from 'src/components/generics/section-header/section-header';

// STYLE
import { style } from 'src/components/sections/portfolio/portfolio.style';

interface IConferencesProps {
    locale: IPortfolioLocale;
    portfolio: IPortfolioData[];
}

export const Portfolio = ({ locale, portfolio }: IConferencesProps) => {
    const renderPortfolio = useMemo(() => (
        portfolio.map(item => (
            <>
                <div css={style} key={item.href}>
                    <Link href={item.href}>
                        <a target="_blank">
                            {item.name}
                        </a>
                    </Link>
                </div>
            </>)
        )), [portfolio]);

    return (
        <section>
            <SectionHeader title={locale.title} isClickable/>
            {renderPortfolio}
        </section>
    );
};
