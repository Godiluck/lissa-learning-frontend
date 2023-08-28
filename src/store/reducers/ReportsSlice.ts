import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IReport, IReportsResponse} from "../../models/account";
import {direction} from "../../models/common";

interface ReportsState {
    amountPages: number,
    direction: direction,
    pageNumber: number,
    pageSize: number,
    reports: IReport[],
    sortBy: string,
    days: number,
}

const initialState: ReportsState = {
    amountPages: 0,
    direction: direction.DESC,
    pageNumber: 0,
    pageSize: 10,
    reports: [],
    sortBy: 'reportDate',
    days: 7,
}

export const reportsSlice = createSlice({
    name: "reports",
    initialState,
    reducers: {
        getReports(state, action: PayloadAction<IReportsResponse>) {
            state.reports = action.payload.reports
            state.amountPages = action.payload.amountPages
            state.pageNumber = action.payload.pageNumber
        }
    }
})

export const {getReports} = reportsSlice.actions

export default reportsSlice.reducer