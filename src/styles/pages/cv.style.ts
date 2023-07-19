// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ color, dimensions, layout, spacing }) => ({
    margin : '0 auto',
    padding : spacing.l,
    width : dimensions.pageWidth,
    boxSizing : 'border-box',
    background : color.surface,
    boxShadow : '0 0 0.1cm rgba(0,0,0,0.5)',
    minHeight : '100vh',

    [layout.printer] : {
        boxShadow : 'none',
        padding : `0 ${spacing.l}px`,
    },
});

const cover: Interpolation<Theme> = ({ color, dimensions, layout, spacing }) => ({
    position : 'relative',

    [layout.printer] : { height : '100vh' },
});

export const style = {
    container,
    cover,
};
