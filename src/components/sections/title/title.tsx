// MODULES
import React, { useMemo } from 'react';
import { useQRCode } from 'next-qrcode';

// COMPONENTS
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { IName, IQRCode } from 'src/data/info.data';
import { palette } from 'src/styles/palette.styles';

// STYLES
import { style } from 'src/components/sections/title/title.style';

interface ITitleProps {
    goals: string[];
    name: IName;
    qrCode: IQRCode;
}

export function Title({ goals, name, qrCode }: ITitleProps) {
    const { Canvas } = useQRCode();
    const { firstname, lastname } = name;

    const renderGoals = useMemo(() => (
            goals.map(goal => <Typography variant="Text" css={style.goal} key={goal}>{goal}</Typography>)
        ), [goals]);

    return (
        <section css={style.container}>
            <div css={style.info}>
                <Typography variant="Heading 1">{`${firstname} ${lastname}`}</Typography>
                {renderGoals}
            </div>
            <Canvas
                text={qrCode.link}
                options={{
                    type : 'image/webp',
                    quality : 0.3,
                    margin : 3,
                    scale : 4,
                    width : 100,
                    color : {
                        dark : palette.tundora,
                        light : palette.white,
                    },
                }}
            />
        </section>
    );
}
