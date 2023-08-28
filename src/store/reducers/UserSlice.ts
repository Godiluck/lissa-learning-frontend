import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserState} from "../../models/account";

const initialState: UserState = {
    email: '',
    externalId: '',
    username: '',
    id: 0,
    token: '',
    roles: [],
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserData(state, action: PayloadAction<UserState>) {
            state.email = action.payload.email;
            state.externalId = action.payload.externalId
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.roles = action.payload.roles;
        }
    }
})

export const {getUserData} = userSlice.actions

export default userSlice.reducer