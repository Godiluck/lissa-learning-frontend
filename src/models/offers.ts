export interface IOffer {
    offerDate: string,
    amount: number,
    companyName: string,
}

export interface IOfferFields {
    offerDate: string,
    amount: string,
    companyName: string,
}

export interface OffersState {
    offers: IOffer[],
}