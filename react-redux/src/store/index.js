import { configureStore } from "@reduxjs/toolkit";

import couterReducer from "./modules/counterStore"

const store = configureStore({
    reducer:{
        counter:couterReducer
    }
})

export default store