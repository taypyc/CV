// MODULES
import Link from 'next/link';
import type { NextPage } from 'next';

// COMPONENTS
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { defaultLanguage } from 'src/constants/generic.constants';
import { page } from 'src/constants/pages.constants';

// STYLES
import { style } from 'src/styles/pages/home.style';

/**
 * Homepage
 */
const Home: NextPage = () => (
    <div css={style.container}>
        <Link href={page.cv.frontend.route(defaultLanguage)}>
            <a css={style.button}>
                <Typography variant="Heading 3">
                    Front-End Developer
                </Typography>
            </a>
        </Link>
        <Link href={page.cv.magento.route('en')}>
            <a css={style.button}>
                <Typography variant="Heading 3">
                    Magento Developer
                </Typography>
            </a>
        </Link>
    </div>
);

export default Home;
