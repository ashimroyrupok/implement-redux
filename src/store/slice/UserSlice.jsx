import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            // console.log("hii", action.payload);
            // state.pop(action.payload)
            state.splice(action.payload,1)
        },
        removeAllUsers (state,action){
            // console.log("sumon");
            return  [];
        }
    }
})


console.log(UserSlice, "helel");

export default UserSlice.reducer;

export const {addUser,removeUser,removeAllUsers } = UserSlice.actions;