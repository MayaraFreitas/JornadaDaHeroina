import { Data } from '@angular/router';

export interface InterviewCardModel {
    index: number;
    name: string;
    workFunction: string;
    companyName: string;
    description: string;
    photo: string;
    publishDate: Data;
}
