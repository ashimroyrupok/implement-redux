import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,addUser){}
    }
})


console.log(UserSlice, "helel");

export default UserSlice.reducer;

export const {addUser } = UserSlice.actions;