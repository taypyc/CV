// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ spacing }) => ({
    display : 'grid',
    gridColumnGap : spacing.m,
    padding : `0 ${spacing.xs}px`,
    gridTemplateColumns : '1fr 1fr',
    alignItems : 'center',
});

const title = () => ({ marginBottom : 0 });

const item: Interpolation<Theme> = ({ color, spacing }) => ({
    display : 'flex',
    alignItems : 'center',
    gap : spacing.xs,
    alignSelf : 'flex-start',
    paddingBottom : spacing.xs,
    textDecoration : 'none',
    color : color.text,

    svg : {
        fill : color.text,
        height : 12,
        width : 12,
    },

    ':hover' : {
        color : color.accent,
        cursor : 'pointer',

        p : { color : color.accent },

        svg : { fill : color.accent },
    },
});

export const style = { container, title, item };

