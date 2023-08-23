// MODULES
import { Interpolation, Theme } from '@emotion/react';

const head: Interpolation<Theme> = ({ color }) => ({
    display : 'flex',
    alignItems : 'center',
    columnGap : '10px',
    alignSelf : 'flex-start',

    'p' : { margin : 0 },

    'p::after' : { content : '":"' },

    svg : {
        fill : color.text,
        height : 12,
        width : 12,
    },
});

export const style = { head };

