// MODULES
import { Interpolation, Theme } from '@emotion/react';

export const button: Interpolation<Theme> = ({ color, spacing }) => ({
    padding : 12,
    borderRadius : `${spacing.s}px ${spacing.s}px 0 0`,
    width : '50px',
    textAlign : 'center',
    border : 'none',
    display : 'block',
    backgroundColor : 'transparent',
    cursor : 'pointer',

    svg : { fill : color.background },

    ':hover' : { svg : { fill : color.accent } },
});

export const container: Interpolation<Theme> = ({ color, spacing }) => ({
    backgroundColor : color.primary,
    borderRadius : spacing.s,
    position : 'fixed',
    zIndex : 1,
    right : spacing.l,
    bottom : spacing.l,
});

export const style = { button, container };
