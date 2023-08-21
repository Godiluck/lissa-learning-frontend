import {AppDispatch, store} from "../store";
import axios from "axios";
import {useSnackbar} from "notistack";
import {snackbarTypes} from "../../models/common";
import {getReports} from "./ReportsSlice";

const showSnackbar = (msg: string, variant: snackbarTypes) => (snackbar: typeof useSnackbar) => {
    snackbar().enqueueSnackbar(msg, {
        variant: variant,
        autoHideDuration: 2500,
    })
}

export const fetchReportsData = () => async (dispatch: AppDispatch, getState: typeof store.getState) => {
    const { externalId } = getState().userReducer
    try {
        const response = await axios.get(`${process.env.REACT_APP_REPORTS_ENDPOINT}v1/reports/users/${externalId}?days=7`)
        if (response.status === 200) {
            dispatch(getReports(response.data))
        }
    } catch (e: any) {
        console.log(e)
        showSnackbar(e.text, snackbarTypes.error)
    }
}