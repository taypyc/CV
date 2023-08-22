// MODULES
import { Interpolation, Theme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

const area = {
    period : 'period',
    logo : 'logo',
    position : 'position',
    responsibilities : 'responsibilities',
    achievements : 'achievements',
} as const;

const container: Interpolation<Theme> = ({ color, dimensions, spacing }) => ({
    display : 'grid',
    gridRowGap : spacing.s,
    gridColumnGap : spacing.l,
    gridTemplateColumns : `${dimensions.headColumnWidth}px auto`,
    alignItems : 'flex-start',
    gridTemplateAreas : `
        "${area.period} ${area.position}"
        "${area.logo} ${area.responsibilities}"
        "${area.logo} ${area.achievements}"`,

    padding : spacing.s,
    pageBreakInside : 'avoid',

    ':not(:first-of-type)' : { paddingTop : spacing.s },

    ':nth-of-type(2n)' : { backgroundColor : color.background },
});

const period: CSSInterpolation = {
    gridArea : area.period,
    textAlign : 'center',
    fontWeight : 'bold',
};

const logo: CSSInterpolation = {
    gridArea : area.logo,
    textAlign : 'center',
    width : '250px',
};

const position: CSSInterpolation = { gridArea : area.position };

const responsibilities: Interpolation<Theme> = ({ spacing }) => ({
    gridArea : area.responsibilities,
    textAlign : 'justify',
    width : '650px',

    ul : { paddingLeft : spacing.s },
    li : { marginBottom : spacing.s }
});

const achievements: Interpolation<Theme> = ({ spacing }) => ({
    gridArea : area.achievements,
    textAlign : 'justify',

    ul : { paddingLeft : spacing.s },
    li : { marginBottom : spacing.s }
});

export const style = {
    container,
    period,
    logo,
    position,
    responsibilities,
    achievements,
};
