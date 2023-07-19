// MODULES
import { Interpolation, Theme } from '@emotion/react';

export const style: Interpolation<Theme> = ({ spacing }) => ({
    display : 'grid',
    gap : spacing.xs,
    textAlign : 'justify',
});
