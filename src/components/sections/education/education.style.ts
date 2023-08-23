// MODULES
import { CSSInterpolation } from '@emotion/serialize';
import { Interpolation, Theme } from '@emotion/react';

const container: Interpolation<Theme> = ({ }) => ({ });

const dates: CSSInterpolation = { textAlign : 'center' };

export const style = { container, dates };
