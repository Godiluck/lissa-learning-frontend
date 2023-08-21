import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IReport {
    externalId: string,
    reportDate: string,
    studyingTime: string,
    workDone: string,
    problems: string,
}

interface ReportsState {
    reports: IReport[]
}

const initialState: ReportsState = {
    reports: []
}

export const reportsSlice = createSlice({
    name: "reports",
    initialState,
    reducers: {
        getReports(state, action: PayloadAction<IReport[]>) {
            state.reports = action.payload
        }
    }
})

export const {getReports} = reportsSlice.actions

export default reportsSlice.reducer