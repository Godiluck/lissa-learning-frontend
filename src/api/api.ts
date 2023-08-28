import {AppDispatch, store} from "../store/store";
import {snackbarTypes} from "../models/common";
import axios from "axios";
import {fetchReportsData} from "../store/reducers/ActionCreators";
import {useSnackbar} from "notistack";
import {$AxiosReports} from "../utils/interceptor";

const showSnackbar = (msg: string, variant: snackbarTypes) => (snackbar: typeof useSnackbar) => {
    console.log(123)
    snackbar().enqueueSnackbar(msg, {
        variant: variant,
        autoHideDuration: 2500,
    })
}

export const postReport = (fields, ) => async (dispatch: AppDispatch, getState: typeof store.getState) => {
    const { externalId } = getState().userReducer
    try {
        const response = await $AxiosReports.post(`v1/reports`, {
            ...fields,
            userId: externalId,
        })
        if (response.status === 200) {
            dispatch(fetchReportsData())
            return response
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
            return e.response
        } else {
            console.log(e)
        }
    }
}