import {AppDispatch, store} from "../store/store";
import axios from "axios";
import {fetchReportsData} from "../store/reducers/ActionCreators";
import {$AxiosUserService} from "../utils/interceptor";

export const postReport = (fields, ) => async (dispatch: AppDispatch, getState: typeof store.getState) => {
    const { externalId } = getState().userReducer
    try {
        const response = await $AxiosUserService.post(`v1/reports`, {
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