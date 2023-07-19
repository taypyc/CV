// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ color }) => ({
    display : 'flex',
    justifyContent : 'space-between',

    svg : {
        fill : color.text,
        height : 16,
        width : 16,
    },
});

const grade = (isActive: boolean): Interpolation<Theme> => ({ color }) => ({
    display : 'inline-block',
    svg : { fill : (isActive) ? color.text : color.background },
});

export const style = {
    container,
    grade,
};
