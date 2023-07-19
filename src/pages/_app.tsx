// MODULES
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

// STYLES
import { globalStyles } from '../styles/global.styles';
import { theme } from '../styles/theme.style';

/**
 * Application root component
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={globalStyles} />
			<main>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}

export default MyApp;
