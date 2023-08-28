import {direction} from "./common";

export interface UserState {
    email: string,
    externalId: string,
    username: string,
    id: number,
    token: string,
    roles: string[],
}

export interface IReportFields {
    reportDate: string,
    studyingTime: string,
    workDone: string,
    problems: string,
}

export interface IReport extends IReportFields {
    externalId: string
}

export interface IReportsResponse {
    reports: IReport[],
    pageNumber: number,
    pageSize: number,
    amountPages: number,
    sortBy: string,
    direction: direction,
}

export interface IReportRequest extends IReportFields {
    userId: string
}