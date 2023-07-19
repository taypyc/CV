// MODULES
import React, { RefObject, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import ReactToPrint from 'react-to-print';

// RESOURCES
import { defaultLanguage } from 'src/constants/generic.constants';
import { languages } from 'src/types/generic.types';
import { LocaleIcon } from 'src/components/pictograms/locale.icon';
import { PrintIcon } from 'src/components/pictograms/print.icon';

// STYLES
import { style } from 'src/components/generics/tools/tools.style';

interface IToolsProps {
    printRef: RefObject<HTMLDivElement>;
}

export const Tools = ({ printRef }: IToolsProps) => {
    const router = useRouter();
    const [languageIndex, setLanguageIndex] = useState(languages.indexOf(defaultLanguage));

    const handleLocalisationCLick = useCallback(() => {
        const nextLanguageIndex = (languages.length > languageIndex + 1) ? languageIndex + 1 : 0;

        setLanguageIndex(nextLanguageIndex);
        router.push(`/${languages[nextLanguageIndex]}/${router.query.career}/`);
    }, [router, languageIndex]);

    return (
        <div css={style.container}>
            <button css={style.button} onClick={() => handleLocalisationCLick()}>
                <LocaleIcon/>
            </button>
            <ReactToPrint
                trigger={() => (
                    <button css={style.button}>
                        <PrintIcon/>
                    </button>
                )}
                content={() => printRef.current}
            />
        </div>
    );
};
