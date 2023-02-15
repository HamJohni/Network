import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    usersReg: [],
    filter: {},
    error: '',
    status: ''
}

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        changeUsers: (state, action) => {
            state.usersReg = action.payload
        }
    }
 })
export const {changeUsers} = usersSlice.actions
export default usersSlice.reducer