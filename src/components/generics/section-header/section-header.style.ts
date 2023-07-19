// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ spacing }) => ({
    marginBottom : spacing.s,
    padding : `0 ${spacing.xs}px 5px`,
});

const clickableSign: Interpolation<Theme> = ({ color, fontSize, spacing }) => ({
    color : color.text,
    fontSize : fontSize.s,
    textTransform : 'none',
    margin : `0 0 0 ${spacing.xs}px`,
});

export const style = { clickableSign, container };
