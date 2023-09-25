// MODULES
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ dimensions, spacing }) => ({
    display : 'grid',
    gap : spacing.l,
    gridTemplateColumns : `${dimensions.headColumnWidth} auto`,

    /*  '@media (max-width : 500px)' : {
        display : 'block',
    }*/
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
