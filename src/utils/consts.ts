import {IReportFields} from "../models/account";
import {IOffer, IOfferFields} from "../models/offers";

export const reportInputFieldsInitialState: IReportFields = {
    reportDate: '',
    studyingTime: '',
    workDone: '',
    problems: '',
}

export const offerFieldsInitialState: IOfferFields = {
    offerDate: '',
    amount: '',
    companyName: '',
}