// MODULES
import { Interpolation, Theme } from '@emotion/react';

export const style: Interpolation<Theme> = ({ spacing }) => ({
    margin : `${spacing.s}px 0`,
    fontSize : '1.5em',
});
