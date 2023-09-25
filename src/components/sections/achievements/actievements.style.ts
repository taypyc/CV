// MODULES
import { Interpolation, Theme } from '@emotion/react';

export const style: Interpolation<Theme> = ({ color, spacing }) => ({
    'p' : { margin : 0 },

    'ul li' : {
        display : 'flex',
        alignItems : 'center',
        width : '100%',
        columnGap : '10px',
        marginBottom : spacing.xs,
    },

    svg : {
        width : '12px',
        fill : color.text,
    },
});

