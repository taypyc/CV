// MODULES
import { Theme } from '@emotion/react';

// RESOURCES
import { dimensions } from '../constants/layout.constants';
import { palette } from './palette.styles';

export const theme: Theme = {
    color : {
        accent : palette.heat_wave,
        background : palette.concrete,
        primary : palette.blue_science,
        surface : palette.white,
        text : palette.gray_dove,
    },
    dimensions,
    font : { arial : 'Arial,sans-serif' },
    fontWeight : {
        light : 200,
        regular : 400,
        bold : 700,
    },
    fontSize : {
        s : '1.4rem',
        m : '1.8rem',
        l : '4.4rem',
    },
    layout : {
        small : `@media #{"only screen and (min-width : ${dimensions.pageWidth}px)"}`,
        printer : '@media print',
    },
    spacing : {
        xs : 5,
        s : 10,
        m : 20,
        l : 30,
    },
} as const;

export type TFontSize = 's' | 'm' | 'l';

export type TLayout = 'small' | 'printer';

export type TFontWeight = keyof typeof theme.fontWeight;

export type TFont = keyof typeof theme.font;
