export type TContact = 'email' | 'telegram' | 'skype' | 'phone' | 'linkedin' | 'behance' | 'drive';

export interface IContactData {
    label: string;
    type: TContact;
    href: string;
    content: string;
}

export const contacts: IContactData[] = [
    {
        type : 'telegram',
        label : 'taypyc1',
        href : 'https://t.me/taypyc1',
        content : 'https://t.me/taypyc1',
    },
    {
        type : 'skype',
        label : 'tigetaypyc',
        href : 'skype: tigetaypyc?chat',
        content : 'skype: tigetaypyc?chat',
    },
    {
        type : 'phone',
        label : '+38 (093) 9828063',
        href : 'tel:+380939828063',
        content : '+380939828063',
    },
    {
        type : 'email',
        label : 'reflextay@gmail.com',
        href : 'mailto:reflextay@gmail.com',
        content : 'reflextay@gmail.com',
    },
    {
        type : 'linkedin',
        label : 'serhii-avdieiev',
        href : 'https://www.linkedin.com/in/serhii-avdieiev/',
        content : 'https://www.linkedin.com/in/serhii-avdieiev/',
    },
    {
        type : 'behance',
        label : 'Behance',
        href : 'https://www.behance.net/taypyc',
        content : 'https://behance.net/taypyc',
    },
    {
        type : 'drive',
        label : 'Google Drive',
        href : 'https://docs.google.com/document/d/1JVM5Je92K-COnv6cue0fDrXMpU0T5gNhrYoDvVNiWUI/edit?usp=sharing',
        content : 'https://docs.google.com/document/d/1JVM5Je92K-COnv6cue0fDrXMpU0T5gNhrYoDvVNiWUI/edit?usp=sharing',
    },
];
