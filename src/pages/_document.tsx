// MODULES
import { Head, Html, Main, NextScript } from 'next/document';

// RESOURCES
import { page } from 'src/constants/pages.constants';

/**
 * Document configuration
 */
export default function Document(): JSX.Element {
	return (
		<Html>
			<Head>
				<title>{page.home.title}</title>

				<meta property="og:title" content="[CV] Avdieiev Serhii"/>
				<meta property="og:description" content="Your dream candidate is just one click away"/>
				{/*
					<meta property="og:image" content="/static/img/share-image.png" />
				*/ }

				<link rel="icon" href="/static/favicon.svg" />
			</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>
		</Html>
	);
}
