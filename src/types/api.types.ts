// RESOURCES
import { TCareer, TLanguage } from 'src/types/generic.types';

export interface IQuery {
    career: TCareer;
    lang: TLanguage;
}

export interface IAPIError {
    message: string;
}
