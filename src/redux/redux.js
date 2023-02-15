import {configureStore} from "@reduxjs/toolkit";
import users from "./reducers/users";

const store= configureStore({
    reducer: {
        users: users
    }
})

export default store