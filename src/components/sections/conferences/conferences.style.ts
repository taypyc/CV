// MODULES
import { Interpolation, Theme } from '@emotion/react';

export const style: Interpolation<Theme> = ({ spacing }) => ({
    display : 'flex',
    gap : spacing.m,
    width : 550,
    flexWrap : 'wrap',
    margin : '0 auto',
    justifyContent : 'space-around',
});
