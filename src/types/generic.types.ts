export type TCareer = 'frontend' | 'magento';

export const languages = ['en', 'ua'] as const;

export type TLanguage = typeof languages[number];

export interface ISectionMeta {
    title: { [language in TLanguage]: string; }
}
