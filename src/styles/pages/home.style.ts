// MODULES
import { CSSInterpolation } from '@emotion/serialize';
import { Interpolation, Theme } from '@emotion/react';

export const container: CSSInterpolation = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    height : '100vh',
};

export const button: Interpolation<Theme> = ({ color, fontSize, spacing }) => ({
    boxShadow : 'rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px',
    margin : spacing.s,
    padding : spacing.s,
    backgroundColor : color.surface,
    width : 200,
    height : 200,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    textAlign : 'center',
    textDecoration : 'none',
    color : color.text,
    fontSize : fontSize.m,
    transition : '0.3s',

    ':hover' : {
        color : color.primary,
        transition : '0.3s',
    },
});


export const style = { button, container };
