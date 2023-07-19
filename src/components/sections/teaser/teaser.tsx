// COMPONENTS
import { TeaserIcon } from '../../pictograms/teaser.icon';

// RESOURCES
import { ITeaserLocale } from 'src/data/locale.data';

// STYLES
import { style } from 'src/components/sections/teaser/teaser.style';

export const Teaser = ({ accent, message }: ITeaserLocale) => (
        <div css={style.container}>
            <p css={style.text}>
                {message}
                <span css={style.accent}>{` ${accent}`}</span>
                ?
            </p>
            <TeaserIcon/>
        </div>
    );
