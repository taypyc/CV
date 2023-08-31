// MODULES
import { Interpolation, Theme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

const container: Interpolation<Theme> = ({ color, spacing }) => ({
    padding : spacing.m,

    ':nth-of-type(2n)' : { backgroundColor : color.background },
});

const period: CSSInterpolation = {
    textAlign : 'center',
    fontWeight : 'bold',
    marginBottom : '20px',
};

const logo: CSSInterpolation = {
    textAlign : 'center',
    maxWidth : '250px',
    margin : '0 auto',
};

const position: CSSInterpolation = {};

const responsibilities: Interpolation<Theme> = ({ spacing }) => ({
    textAlign : 'justify',    

    ul : { paddingLeft : spacing.s },
    li : { marginBottom : spacing.s },
});

const achievements: Interpolation<Theme> = ({ spacing }) => ({
    textAlign : 'justify',

    ul : { paddingLeft : spacing.s },
    li : { marginBottom : spacing.s },
});

export const style = {
    container,
    period,
    logo,
    position,
    responsibilities,
    achievements,
};
