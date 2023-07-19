// MODULES
import { Interpolation, Theme } from '@emotion/react';

const link: Interpolation<Theme> = ({ color, spacing }) => ({
    display : 'flex',
    gap : spacing.s,
    alignItems : 'center',
    textDecoration : 'none',
    paddingBottom : 4,
    flexGrow : 1,

    svg : { fill : color.text },

    ':hover' : {
        p : { color : color.accent },
        svg : { fill : color.accent },
    },
});


export const style = { link };
