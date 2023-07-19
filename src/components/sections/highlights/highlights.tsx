// MODULES
import React, { useMemo } from 'react';

// COMPONENTS
import { Contact } from 'src/components/sections/highlights/contact/contact';
import { Language } from 'src/components/sections/highlights/language/language';
import { SectionHeader } from 'src/components/generics/section-header/section-header';
import { Summary } from 'src/components/sections/highlights/summary/summary';

// RESOURCES
import { IContactData } from 'src/data/contacts.data';
import { IHighlightsLocale } from 'src/data/locale.data';
import { ILanguageData } from 'src/data/languages.data';

// STYLES
import { style } from 'src/components/sections/highlights/highlights.style';

interface IHighlightsProps {
    contacts: IContactData[];
    languages: ILanguageData[];
    locale: IHighlightsLocale;
    summary: string[];
}

export const Highlights = ({ contacts, languages, locale, summary }: IHighlightsProps) => {

    const renderContacts = useMemo(() => (
        contacts.map(contact => <Contact key={contact.label} {...contact}/>)
    ), [languages]);

    const renderLanguages = useMemo(() => (
        languages.map(language => <Language language={language} key={language.language}/>)
    ), [languages]);

    return (
        <section css={style.container}>
            <div>
                <SectionHeader title={locale.info.title} isClickable/>
                <div css={style.contacts}>
                    {renderContacts}
                </div>
                <div>
                    {renderLanguages}
                </div>
            </div>
            <div>
                <SectionHeader title={locale.summary.title}/>
                <Summary summary={summary}/>
            </div>
        </section>
    );
};
