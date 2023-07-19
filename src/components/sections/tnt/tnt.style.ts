// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ dimensions, spacing }) => ({
    display : 'grid',
    gap : spacing.s,
    gridColumnGap : spacing.l,
    gridRowGap : spacing.xs,
    padding : `0 ${spacing.xs}px`,
    gridTemplateColumns : `${dimensions.headColumnWidth}px auto`,
    alignItems : 'center',
    textAlign : 'justify',
});

const head: Interpolation<Theme> = ({ color, spacing }) => ({
    display : 'flex',
    alignItems : 'center',
    gap : spacing.xs,
    alignSelf : 'flex-start',

    'p::after' : { content : '":"' },

    svg : {
        fill : color.text,
        height : 12,
        width : 12,
    },
});

export const style = { container, head };

