// MODULES
import { Interpolation, Theme } from '@emotion/react';

export const style: Interpolation<Theme> = ({ color, spacing }) => ({
    display : 'grid',
    gap : spacing.xs,
    padding : `0 ${spacing.xs}px`,
    gridTemplateColumns : '12px auto',
    alignItems : 'flex-start',
    textAlign : 'justify',

    svg : {
        marginTop : 2,
        fill : color.text,
    },
});

