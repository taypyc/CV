// MODULES
import emotionNormalize from 'emotion-normalize';
import { Theme, css } from '@emotion/react';

const globalStyles = ({ color, spacing }: Theme) => css`
	${emotionNormalize}
	
	html {
		font-size: 0.75em;
		user-select: none;
	}
	
	body {
		font-style: italic;
		background-color: ${color.background};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin: 0 0 10px 0;
	}	
	
	section {
		margin-bottom: ${spacing.m}px;
	}

	@page
	{
		size: auto;
		margin: ${spacing.l}px; 
	}
	
	ul {
		margin: 0;
		padding: 0;
	}

	img {
		max-width: 100%;
		height: auto;
	}
`;

export { globalStyles };
