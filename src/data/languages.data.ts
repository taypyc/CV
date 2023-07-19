export interface ILanguageData {
    language: string;
    grade: 1 | 2 | 3 | 4 | 5;
}

export const languages: ILanguageData[] = [
    {
        language : 'English',
        grade : 4,
    },
    {
        language : 'Ukrainian',
        grade : 5,
    },
];
