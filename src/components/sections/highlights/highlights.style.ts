// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ dimensions, spacing }) => ({
    display : 'grid',
    gap : spacing.l,
    gridTemplateColumns : `${dimensions.headColumnWidth} auto`,
});

const contacts: Interpolation<Theme> = ({ spacing }) => ({
    marginBottom : spacing.m,
    display : 'flex',
    flexDirection : 'column',
    gap : 3,
});

export const style = {
    container,
    contacts,
};
