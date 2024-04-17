import { configureStore } from "@reduxjs/toolkit";

import couterReducer from "./modules/counterStore"
import channelReducer from "./modules/channelStore"

const store = configureStore({
    reducer:{
        counter:couterReducer,
        channel:channelReducer,
    }
})

export default store