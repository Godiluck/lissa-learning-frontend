import {AppDispatch, store} from "../store";
import axios from "axios";
import {getReports} from "./ReportsSlice";
import {$AxiosUserService} from "../../utils/interceptor";
import {getUserData} from "./UserSlice";
import {getOffers} from "./OffersSlice";

export const fetchReportsData = (page = 0) => async (dispatch: AppDispatch) => {
    const {externalId} = localStorage
    if (externalId) {
        try {
            const response = await $AxiosUserService.get(`v1/reports/users/${externalId}?days=7&page=${page}&size=10&sortBy=reportDate&direction=DESC`)
            if (response.status === 200) {
                dispatch(getReports(response.data))
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.log(e, 0)
            } else {
                console.log(e, 1)
            }
        }
    }
}

export const fetchUserData = () => async (dispatch: AppDispatch) => {
    const {externalId} = localStorage
    if (externalId) {
        try {
            const response = await $AxiosUserService.get(`v1/users/${externalId}`)
            if (response.status === 200) {
                dispatch(getUserData(response.data))
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.log(e, 0)
            } else {
                console.log(e, 1)
            }
        }
    }
}

export const fetchOffersData = () => async (dispatch: AppDispatch, getState: typeof store.getState) => {
    const {externalId} = getState().userReducer
    try {
        const response = await $AxiosUserService.get(`v1/users/${externalId}/offers`)
        if (response.status === 200) {
            dispatch(getOffers(response.data))
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
            console.log(e, 0)
        } else {
            console.log(e, 1)
        }
    }
}

export const postOffer = (offerDate: string, amount: number, companyName: string,) => async (dispatch: AppDispatch, getState: typeof store.getState) => {
    const {externalId} = getState().userReducer
    try {
        const response = await $AxiosUserService.post(`v1/users/${externalId}/offers`, {offerDate, amount, companyName})
        if (response.status === 200) {
            dispatch(fetchOffersData())
            return response
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
            console.log(e, 0)
        } else {
            console.log(e, 1)
        }
    }
}