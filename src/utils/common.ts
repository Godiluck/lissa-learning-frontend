import {snackbarTypes} from "../models/common";
import {useSnackbar} from "notistack";

export const showSnackbar = (msg: string, variant: snackbarTypes) => (snackbar: typeof useSnackbar) => {
    snackbar().enqueueSnackbar(msg, {
        variant: variant,
        autoHideDuration: 2500,
    })
}