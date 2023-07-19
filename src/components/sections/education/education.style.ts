// MODULES
import { CSSInterpolation } from '@emotion/serialize';
import { Interpolation, Theme } from '@emotion/react';

// RESOURCES
import { dimensions } from 'src/constants/layout.constants';

const container: Interpolation<Theme> = ({ spacing }) => ({
    display : 'grid',
    gap : spacing.s,
    gridColumnGap : spacing.l,
    gridRowGap : spacing.xs,
    padding : `0 ${spacing.xs}px`,
    gridTemplateColumns : `${dimensions.headColumnWidth}px auto`,
    alignItems : 'center',
});

const dates: CSSInterpolation = {
    textAlign : 'center',
    alignSelf : 'flex-start',
};

export const style = { container, dates };
