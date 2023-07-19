export interface ICertificationsData {
    title: string;
    certificate?: string;
    href?: string;
}

export const certifications: ICertificationsData[] = [
    {
        title : 'British council: CERF [English - B2]',
        certificate : 'british-council__english.png',
    },
    {
        title : 'Atlassian certified professional',
        href : 'https://university.atlassian.com/profiles/kitgart4c1301b4',
    },
    {
        title : 'DAT.IT: frontend development',
        certificate : 'danit__fe-dev.png',
    },
    {
        title : 'ISTQB: certified tester, foundation level',
        certificate : 'istqb__ctfl.png',
    },
    {
        title : 'Luxoft: leadership academy',
        certificate : 'luxoft__leadership-academy.png',
    },
    {
        title : 'Coursera: game theory',
        certificate : 'coursera__game-theory.png',
    },
    {
        title : 'Luxoft: test management introduction',
        certificate : 'luxoft__test-management-introduction.png',
    },
    {
        title : 'Professional negotiators course',
        certificate : 'pnc__pnc.png',
    },
];
