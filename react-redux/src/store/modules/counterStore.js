import {createSlice} from "@reduxjs/toolkit"

const counterStore = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    // 编写修改数据的方法
    reducers:{
        incresment(state){
            state.count++
        },
        decresment(state){
            state.count--
        },
        addToNum(state,action){
            state.count += action.payload
        }
    }
})

//解构
const {incresment,decresment,addToNum} = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer

export {incresment,decresment,addToNum}

// 导出我们的reducer
export default reducer