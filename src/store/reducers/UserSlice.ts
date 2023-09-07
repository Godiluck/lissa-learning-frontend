import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILoginRes, IUserDataRes, UserState} from "../../models/account";

const initialState: UserState = {
    email: '',
    externalId: '',
    username: '',
    birthday: null,
    isBlocked: false,
    createAt: '',
    modifyAt: '',
    trainingStartAt: '',
    telegramNickname: '',
    lastReportDate: '',
    id: 0,
    token: '',
    stage: '',
    roles: [],
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getLoginData(state, action: PayloadAction<ILoginRes>) {
            state.email = action.payload.email;
            state.externalId = action.payload.externalId
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.roles = action.payload.roles;
        },
        getUserData(state, action: PayloadAction<IUserDataRes>) {
            state.birthday = action.payload.birthday;
            state.isBlocked = action.payload.isBlocked;
            state.createAt = action.payload.createAt;
            state.modifyAt = action.payload.modifyAt;
            state.trainingStartAt = action.payload.trainingStartAt;
            state.telegramNickname = action.payload.telegramNickname;
            state.lastReportDate = action.payload.lastReportDate;
            state.stage = action.payload.stage;
        },
    }
})

export const {getLoginData, getUserData} = userSlice.actions

export default userSlice.reducer