import{createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
    name:"channel",
    initialState:{
        channelList:[]
    },
    reducers:{
        setChannels(state,actions){
            state.channelList = actions.payload;
        }
    }
})

const {setChannels} = channelStore.actions

const fetchList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://geek.itheima.net/v1_0/channels")
        dispatch(setChannels(res.data.data.channels))
    }
}

export {fetchList}

const reducer = channelStore.reducer

export default reducer