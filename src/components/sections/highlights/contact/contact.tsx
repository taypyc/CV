// MODULES
import React, { useCallback, useState } from 'react';

// COMPONENTS
import { EmailIcon } from 'src/components/pictograms/contacts/email.icon';
import { SkypeIcon } from 'src/components/pictograms/contacts/skype.icon';
import { BehanceIcon } from 'src/components/pictograms/contacts/behance.icon';
import { DriveIcon } from 'src/components/pictograms/contacts/drive.icon';
import { LinkedinIcon } from 'src/components/pictograms/contacts/linkedin.icon';
import { PhoneIcon } from 'src/components/pictograms/contacts/phone.icon';
import { TelegramIcon } from 'src/components/pictograms/contacts/telegram.icon';
import { Typography } from 'src/components/generics/typography/typography';

// RESOURCES
import { IContactData, TContact } from 'src/data/contacts.data';

// STYLES
import { style } from 'src/components/sections/highlights/contact/contact.style';

export const Contact = ({ href, label, type }: IContactData) => {
    const [text, setText] = useState(label);

    const handleCopyClick = useCallback((text: string) => {
        navigator.clipboard.writeText(text);
        setText('copied');
        setTimeout(() => setText(label), 1000);
    }, []);

    const renderContactIcon = useCallback((contactType: TContact) => {
        switch (contactType) {
            case 'email':
                return <EmailIcon/>;
            case 'skype':
                return <SkypeIcon/>;
            case 'linkedin':
                return <LinkedinIcon/>;
            case 'telegram':
                return <TelegramIcon/>;
            case 'phone':
                return <PhoneIcon/>;
            case 'behance':
                return <BehanceIcon/>;
            case 'drive':
                return <DriveIcon/>;
        }
    }, []);

    return (
        <a css={style.link} href={href} target="_blank" rel="noreferrer">
            {renderContactIcon(type)}
            <Typography variant="Text">{text}</Typography>
        </a>
    );
};
