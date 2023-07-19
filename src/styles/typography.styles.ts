// MODULES
import { Interpolation, Theme } from '@emotion/react';

// RESOURCES
import { palette } from 'src/styles/palette.styles';

export type TTypography = 'Heading 1' | 'Heading 2' | 'Heading 3' | 'Text';

const heading1: Interpolation<Theme> = ({ font, fontSize, fontWeight }) => ({
	fontFamily : font.arial,
	fontSize : fontSize.l,
	fontWeight : fontWeight.bold,
	textTransform : 'uppercase',
});

const heading2: Interpolation<Theme> = ({ color, font, fontSize, fontWeight }) => ({
	fontFamily : font.arial,
	fontSize : fontSize.m,
	fontWeight : fontWeight.light,
	textTransform : 'uppercase',
	borderBottom : `1px solid ${color.text}`,
	color : palette.tundora,
});

const heading3: Interpolation<Theme> = ({ color, font, fontSize, fontWeight }) => ({
	fontFamily : font.arial,
	fontSize : fontSize.s,
	fontWeight : fontWeight.bold,
	color : color.text,
});

const text: Interpolation<Theme> = ({ color, font, fontSize, fontWeight }) => ({
	fontFamily : font.arial,
	fontSize : fontSize.s,
	fontWeight : fontWeight.regular,
	color : color.text,
});

export { heading1, heading2, heading3, text };
