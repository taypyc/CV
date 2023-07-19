// COMPONENTS
import { Typography } from 'src/components/generics/typography/typography';

// STYLE
import { style } from 'src/components/generics/section-header/section-header.style';

interface ISectionHeaderProps {
    title: string;
    isClickable?: boolean;
}

const SectionHeader = ({ title, isClickable = false }: ISectionHeaderProps) => (
        <Typography variant="Heading 2" css={style.container}>
            {title}
            {(isClickable) ? <span css={style.clickableSign}>(clickable)</span> : null}
        </Typography>
    );

export { SectionHeader };
