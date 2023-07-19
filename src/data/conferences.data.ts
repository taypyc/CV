export interface IConferencesData {
    title: string;
    logo: {
        src: string;
        width: number;
    };
    media: string;
}

export const conferences: IConferencesData[] = [
    {
        title : 'QA Fest',
        logo : {
            src : 'qa-fest.png',
            width : 75,
        },
        media : 'https://www.youtube.com/watch?v=CHJTcIXaKyc&feature=youtu.be&ab_channel=FestGroup',
    },
    {
        title : 'Testing Stage',
        logo : {
            src : 'testing-stage.png',
            width : 275,
        },
        media : 'https://www.linkedin.com/posts/rockstardev_testing-stage19-thanks-for-great-experience-activity' +
            '-6518047484160331776-n7xL?utm_source=share&utm_medium=member_desktop',
    },
    {
        title : 'Public IT',
        logo : {
            src : 'public-it.png',
            width : 90,
        },
        media : 'https://youtu.be/vh6JexEz7OA',
    },
    {
        title : 'Kyiv QA Day',
        logo : {
            src : 'kyiv-qa-day.png',
            width : 220,
        },
        media : 'https://www.youtube.com/watch?v=w1fCXg_-jDQ&ab_channel=GoQA',
    },
    {
        title : 'Pro QA',
        logo : {
            src : 'pro-qa.png',
            width : 200,
        },
        media : 'https://www.youtube.com/watch?v=Siez-wHrNns&feature=youtu.be&ab_channel=QAExpertsPro',
    },
];
