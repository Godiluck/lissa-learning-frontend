import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOffer, OffersState} from "../../models/offers";
import {userSlice} from "./UserSlice";

const initialState: OffersState = {
    offers: [],
}

export const offersSlice = createSlice({
    name: "offers",
    initialState,
    reducers: {
        getOffers(state, action: PayloadAction<IOffer[]>) {
            state.offers = action.payload
        }
    }
})

export const { getOffers } = offersSlice.actions

export default offersSlice.reducer