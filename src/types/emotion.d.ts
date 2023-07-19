// MODULES
import '@emotion/react';

// RESOURCES
import { dimensions } from '../constants/layout.constants';
import { TFontSize, TLayout } from '../styles/theme.style';

declare module '@emotion/react' {

	// Naming convention disabled because following interface redefines third-party interface
	// eslint-disable-next-line @typescript-eslint/naming-convention
	export interface Theme {
		color: {
			primary: string,
			accent: string,
			background: string,
			surface: string,
			text: string,
		},
		dimensions: typeof dimensions,
		font: {
			arial: string;
		}
		fontWeight: {
			bold: number;
			light: number;
			regular: number;
		},
		fontSize: { [fontSize in TFontSize]: string; },
		layout: { [key in TLayout]: string },
		spacing: {
			xs: number;
			s: number;
			m: number;
			l: number;
		}
	}
}
