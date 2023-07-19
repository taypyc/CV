// MODULES
import { CSSInterpolation } from '@emotion/serialize';
import { Interpolation, Theme } from '@emotion/react';
import { darken } from 'polished';

// RESOURCES
import { palette } from 'src/styles/palette.styles';

const container: Interpolation<Theme> = ({ spacing }) => ({
    background : `
        linear-gradient(
            90deg,
            ${darken(0.3, palette.blue_science)} 37%,
            ${palette.blue_science} 100%);`,
    width : '100%',
    display : 'flex',
    flexWrap : 'wrap',
    alignItems : 'center',
    padding : spacing.s,
    boxSizing : 'border-box',
    color : palette.gallery,
    boxShadow : '0 5px 5px -5px rgba(34, 60, 80, 0.6)',
});

const goal: Interpolation<Theme> = ({ spacing }) => ({
    display : 'inline-block',
    textTransform : 'uppercase',
    color : palette.gallery,
    letterSpacing : 1,

    '::after' : {
        content : '"/"',
        color : palette.gallery,
        margin : `0 ${spacing.xs}px`,
    },

    ':last-of-type::after' : { content : 'none' },
});

const info: CSSInterpolation = {
    flexGrow : 1,
    textAlign : 'left',
};

const text: Interpolation<Theme> = ({ fontSize }) => ({
    textTransform : 'uppercase',
    margin : 0,
    fontSize : fontSize.l,
});

const qrCode: CSSInterpolation = {
    height : 100,
    width : 100,
    boxShadow : '0 0 5px 0 rgba(11, 9, 9, 1)',
    backgroundColor : 'lightcyan',
};

export const style = {
    container,
    goal,
    info,
    text,
    qrCode,
};
