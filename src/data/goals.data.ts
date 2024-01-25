// MODULES
import { TCareer } from 'src/types/generic.types';

export interface IGoalData {
    career: TCareer[];
    label: string;
}

export const goals: IGoalData[] = [
    {
        career : ['frontend', 'magento'],
        label : 'Frontend developer',
    },
    {
        career : ['frontend'],
        label : 'Angular developer',
    },
    {
        career : ['frontend'],
        label : 'React developer',
    },
    {
        career : ['magento'],
        label : 'Magento Lead Front-End developer',
    },
];
