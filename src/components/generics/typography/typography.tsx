// MODULES
import { jsx } from '@emotion/react';
import React, { ReactNode, useMemo } from 'react';

//  RESOURCES
import { createTestId } from 'src/utils/test.utils';

// STYLES
import { TTypography, heading1, heading2, heading3, text } from 'src/styles/typography.styles';

export interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {

	/**
	 * Define which tag will be used for typography element.
	 */
	tag?: string;

	/**
	 * Choose text styles from typography presets defined in theme.
	 */
	variant: TTypography;

	/**
	 * The content.
	 */
	children: string | ReactNode;

	/**
	 * An attribute used to identify a DOM node for testing purposes.
	 */
	testId?: string;
}

/**
 * The Typography component is intended to provide unified texting across the application.
 */
function Typography({
	tag,
	variant,
	children,
	testId,
	...rest
}: ITypographyProps): JSX.Element {

	const element = useMemo(() => {
		if (tag) return tag;

		switch (variant) {
			case 'Heading 1': return 'h1';
			case 'Heading 2': return 'h2';
			case 'Heading 3': return 'h3';
			case 'Text': return 'p';
			default: return 'p';
		}
	}, [tag, variant]);

	const css = useMemo(() => {
		switch (variant) {
			case 'Heading 1': return heading1;
			case 'Heading 2': return heading2;
			case 'Heading 3': return heading3;
			case 'Text': return text;
			default: return text;
		}
	}, [variant]);

	return jsx(
		element,
		{
			css,
			...createTestId(testId),
			...rest,
		},
		children
	);
}

export { Typography };
