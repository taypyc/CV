// MODULES
import { TCareer } from 'src/types/generic.types';

export interface IGoalData {
    career: TCareer[];
    label: string;
}

export const goals: IGoalData[] = [
    {
        career : ['frontend'],
        label : 'Head of QA department',
    },
    {
        career : ['frontend', 'magento'],
        label : 'Frontend developer',
    },
    {
        career : ['frontend'],
        label : 'React developer',
    },
    {
        career : ['frontend'],
        label : 'Dev Ops',
    },
    {
        career : ['magento'],
        label : 'MAGENTO',
    },
];
