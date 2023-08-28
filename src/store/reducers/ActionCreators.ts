import {AppDispatch, store} from "../store";
import axios, {AxiosError} from "axios";
import {useSnackbar} from "notistack";
import {snackbarTypes} from "../../models/common";
import {getReports} from "./ReportsSlice";
import {showSnackbar} from "../../utils/common";
import {$AxiosReports} from "../../utils/interceptor";

export const fetchReportsData = (page = 0) => async (dispatch: AppDispatch, getState: typeof store.getState) => {
    const { externalId } = getState().userReducer
    if (externalId) {
        try {
            const response = await $AxiosReports.get(`v1/reports/users/${externalId}?days=7&page=${page}&size=10&sortBy=reportDate&direction=DESC`)
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