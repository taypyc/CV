// MODULES
import { Interpolation, Theme } from '@emotion/react';

// RESOURCES
import { palette } from 'src/styles/palette.styles';

export const container: Interpolation<Theme> = ({ color, font, layout, spacing }) => ({
    fontFamily : font.arial,
    textAlign : 'center',
    padding : spacing.xs,
    display : 'none',
    position : 'absolute',
    bottom : 0,
    left : 0,
    right : 0,
    marginLeft : 'auto',
    marginRight : 'auto',

    svg : { fill : color.text },

    [layout.printer] : {
        display : 'block',
        breakAfter : 'page',
    },
});

export const text: Interpolation<Theme> = ({ color }) => ({
    textTransform : 'uppercase',
    fontSize : '3.3rem',
    color : color.text,
});

export const accent: Interpolation<Theme> = ({ color }) => ({ color : palette.blue_science });

export const style = {
    accent,
    container,
    text,
};
